FROM node

WORKDIR /app

COPY  package.json yarn.lock ./

RUN yarn install
RUN yarn add typescript

COPY . .

EXPOSE 3000

RUN yarn build