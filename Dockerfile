FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 8080

ENV host localhost
ENV port 27017
ENV database music_store

CMD ["sh", "-c", "node src/app/server.js --host ${host} --port ${port} --databaseName ${database}" ]
