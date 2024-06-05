echo "Starting Application DEV..."

docker-compose -f dependencies/docker-compose.dev.yml up --force-recreate --build -d

yarn react-app-rewired start