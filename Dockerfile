FROM node:10.18-alpine

VOLUME /tmp

RUN mkdir common

WORKDIR common

RUN npm install

COPY . .

EXPOSE 4200

CMD [ "npm", "start" ]
