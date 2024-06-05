echo "Starting component tests DEV..."

yarn build

docker-compose -f dependencies/docker-compose.test.yml up --force-recreate --build -d

cd component-test && yarn install && yarn component-test-dev

echo "Component tests DEV is running"