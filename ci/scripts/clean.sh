rm -rf dist
rm -rf .cache
rm -rf coverage
rm -rf component-test/results
docker rm -f $(docker ps -a -q)