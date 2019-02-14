FROM node:10.3.0-alpine

RUN apk update \
    && apk upgrade \
    && apk add --no-cache git

WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn install --frozen-lockfile \
    && yarn check --integrity \
    && yarn cache clean

ARG NODE_ENV=production
COPY . /usr/src/app

# Check that it builds and that there are no uncommitted changes after building
RUN yarn build:check

RUN yarn lint && yarn test:coverage
