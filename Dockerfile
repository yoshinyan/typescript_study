FROM node

RUN apt-get update -y && \
    npm install npm@latest -g

RUN npm init && \
    npm install --save typescript && \
    npx tsc --init && \
    npm install --save-dev @types/node