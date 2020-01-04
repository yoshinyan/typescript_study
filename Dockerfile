FROM node

RUN apt-get update -y && \
    npm install npm@latest -g