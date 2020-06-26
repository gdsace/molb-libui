FROM node:10.15.3-alpine

RUN apk update \
    && apk upgrade \
    && apk add --no-cache git

WORKDIR /usr/src/app


COPY package.json yarn.lock /usr/src/app/
RUN apk add --no-cache git \
    && yarn policies set-version 1.22.4 \
    && yarn install --frozen-lockfile \
    && yarn check --integrity \
    && yarn cache clean

ARG NODE_ENV=production
COPY . /usr/src/app
RUN echo "dist/index.js.map" >> .gitignore

# Check that it builds and that there are no uncommitted changes after building
RUN yarn build:check

RUN yarn lint && yarn test:coverage
