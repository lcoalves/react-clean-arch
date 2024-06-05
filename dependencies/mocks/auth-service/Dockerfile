FROM node:13.13.0-alpine

WORKDIR /mocks

COPY auth-endpoints.yaml /mocks/auth-endpoints.yaml
COPY responses /mocks/responses

EXPOSE 80 8906

RUN yarn global add stubby 

ENTRYPOINT ["stubby", "-d", "auth-endpoints.yaml", "-s", "80", "-a", "8906", "-t", "7449", "-w"]