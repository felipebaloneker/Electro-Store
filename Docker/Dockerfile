FROM node:16 as build

WORKDIR /app

COPY ../package.json ../yarn.lock ./

RUN yarn

COPY ../. .

RUN yarn build