FROM node:14-alpine

RUN npm install -g @mockoon/cli@2.1.0
COPY local-environment.json ./local-environment.json

# Do not run as root.
RUN adduser --shell /bin/sh --disabled-password --gecos "" mockoon
RUN chown -R mockoon ./local-environment.json
USER mockoon

EXPOSE 3333

ENTRYPOINT ["mockoon-cli", "start", "--hostname", "0.0.0.0", "--daemon-off", "--data", "local-environment.json", "--container"]

# Usage: docker run -p <host_port>:<container_port> mockoon-test