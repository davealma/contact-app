FROM node:20
LABEL MAINTAINER="David Almanza"
COPY . /src
WORKDIR /src
RUN npm install -g @angular/cli && npm i
EXPOSE $PORT
ENTRYPOINT ["npm", "start"]
