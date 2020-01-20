# base image
FROM cypress/base:10

# set working directory
WORKDIR /usr/src/app

# install cypress
RUN npm install cypress@2.1.0

# copy cypress files and folders
COPY . .
COPY ..APP/cypress.json /usr/src/app/cypress.json

# confirm the cypress install

RUN ./node_modules/.bin/cypress run --record --key d1ebf8a7-f401-4fee-bd4f-db8abc7c4af1
