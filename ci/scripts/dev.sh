echo "Starting DEV app..."

docker-compose -f dependencies/docker-compose.dev.yml up --force-recreate --build -d

yarn start

echo "DEV app is running"