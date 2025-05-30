FROM node

COPY . .

EXPOSE 8888

CMD [ "bash", "-c", "node app.js" ]