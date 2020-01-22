#Demo
# Stage 1
FROM node:10.18.0-alpine3.9 as node2

WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install

COPY . .


RUN npm run build

# Stage 2
FROM nginx:1.13.12-alpine

COPY --from=node2 /usr/src/app/dist/AMATG3Mapper /usr/share/nginx/html

COPY ./src/default.conf /etc/nginx/conf.d

