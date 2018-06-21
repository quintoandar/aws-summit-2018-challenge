FROM node:8
RUN apt-get update
ADD . .
CMD npm install --save axios && node app.js
EXPOSE 80
