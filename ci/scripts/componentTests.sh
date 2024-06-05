# Run only in terminal
echo "Starting component tests..."

yarn build

docker-compose -f dependencies/docker-compose.test.yml up --force-recreate --build -d

echo "Component tests is running"

cd component-test && yarn install && yarn component-test