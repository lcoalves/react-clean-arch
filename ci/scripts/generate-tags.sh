#!/bin/bash
​
print_usage() {
    printf """
experimental-create-repo-tag --microservice <name> --git-pass: <pass> --git-email <email> --git-user <user> --hash
Required:
    --microservice: microservice name.
    --git-pass: git pass to clone microservice repository via http.
    --git-email: git email.
    --git-user: git user.
Optional:
    --push-tag: default false.
    --hotfix: default false.
"""
}
​
while [ $# -gt 0 ]; do
case $1 in
  --microservice)
    microservice="$2"
    shift
    shift
    ;;
  --git-pass)
    git_pass="$2"
    shift
    shift
    ;;
  --git-email)
    git_email="$2"
    shift
    shift
    ;;
  --git-user)
    git_user="$2"
    shift
    shift
    ;;
  --git-hash)
    hash="$2"
    shift
    shift
    ;;
  --git-version)
    version="$2"
    shift
    shift
    ;;
  --source-name)
    sourceName="$2"
    shift
    shift
    ;;
  --push-tags)
    push_tag="$2"
    shift
    shift
    ;;
  --hotfix)
    hotfix="$2"
    shift
    shift
    ;;
  *)    # unknown option
    shift # past argument
    ;;
esac
done
​
if [ -z "$microservice" ]; then
  printf "ERROR: --microservice is a mandatory argument.\n\n"
  print_usage
  exit 1
fi
​
if [ -z "$git_pass" ]; then
  printf "ERROR: --git-pass is a mandatory argument.\n\n"
  print_usage
  exit 1
fi
​
if [ -z "$git_user" ]; then
  printf "ERROR: --git-user is a mandatory argument.\n\n"
  print_usage
  exit 1
fi
​
if [ -z "$git_email" ]; then
  printf "ERROR: --git_email is a mandatory argument.\n\n"
  print_usage
  exit 1
fi
​
if [ -z "$push_tag" ]; then
  push_tag=false
fi
​
if [ -z "$hotfix" ]; then
  hotfix=false
fi
​
pwd
​
echo "Deployment descriptor for $microservice:"

packageVersion=$(cat "$sourceName/package.json" | jq '.version' -r)

actual_date=$(date +%F)
sufix=""
tag_message=""

echo "\nHash found: $hash"
echo "Version found: $version"
echo "Actual date: $actual_date"
​
echo "Clonning $microservice"
cd ..
# clone microservice...
git clone "https://$git_pass:$git_pass@dev.azure.com/Your-Azure-Url/$microservice"
​
cd $microservice
tag_exists=$(git tag -l "$version")
​
echo "Version: $version"
​
final_version="v$packageVersion.$version"
​
rolling_version=false
​
if [ -n "$tag_exists" ]; then
    echo "Tag $tag_exists already exists... Searching the last tag created..."
    for i in {1..10}
      do
        tag_exists=$(git tag -l "$version-$i")
        # if the tag does not exists...
        if [ -z "$tag_exists" ]; then
          final_version="$version-$i"
          rolling_version=true
          break
        else
          echo "Rolling new version because $version-$i already exists..."
        fi
      done
fi
​
find="-"
replace="."
​
final_version=$(echo "$final_version" | sed "s/-/$replace/")
​
commit_message=$(git log -n 1 --pretty=format:%s $hash)
echo "Commit message found: $commit_message\n"

if [[ $commit_message == *"hotfix"* ]]; then
  final_version="$final_version-hotfix"
  echo "Setting the sufix to hotfix"
fi
​
tag_message="$microservice-$final_version"
git config --global user.email "$git_email"
git config --global user.name "$git_user"
git tag -a "$final_version" $hash -m "$tag_message"
​
echo "The version will be: $final_version"
echo "The tag message will be: $tag_message"
​
if [ "$push_tag" = true ] ; then
  git push --tags
  echo "Tag $version pushed to origin!"
else
  echo "*** The --push-tag parameter is false. The tag $final_version won't be pushed. ***"
fi
