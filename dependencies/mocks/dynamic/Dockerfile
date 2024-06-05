FROM node:13.13.0-alpine

EXPOSE 80 8906

RUN yarn global add stubby 

ENTRYPOINT ["stubby", "-s", "80", "-a", "8906", "-t", "7449", "-w"]