FROM nginxinc/nginx-unprivileged:stable-alpine

USER root
RUN apk update
RUN apk del nginx-module-xslt libgcrypt libxml2
RUN apk add --upgrade curl

COPY ./build /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]