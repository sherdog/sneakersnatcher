FROM node:8

RUN mkdir /src

WORKDIR /app

COPY ./package.json /src/package.json
COPY ./package-lock.json /src/package-lock.json

RUN npm install --silent

COPY ./app /src/app
COPY ./public /src/public
COPY ./middleware /src/middleware

#nodemon ftw.
COPY ./nodemon.json /src/.nodemon.json

ENV NODE_ENV development

EXPOSE 3000