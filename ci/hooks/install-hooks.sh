cp ci/hooks/commit-msg.sh .git/hooks/commit-msg
cp ci/hooks/pre-push.sh .git/hooks/pre-push
cp ci/hooks/pre-commit.sh .git/hooks/pre-commit
cp ci/hooks/post-merge.sh .git/hooks/post-merge

rm -f .git/hooks/commit-msg.sample >> /dev/null
rm -f .git/hooks/pre-push.sample >> /dev/null
rm -f .git/hooks/pre-commit.sample >> /dev/null
rm -f .git/hooks/post-merge.sample >> /dev/null

chmod +x .git/hooks/commit-msg
chmod +x .git/hooks/pre-push
chmod +x .git/hooks/pre-commit
chmod +x .git/hooks/post-merge