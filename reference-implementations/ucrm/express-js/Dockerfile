FROM node:21.5.0-alpine3.18

WORKDIR /usr/src/app/src
COPY ./ ./
RUN npm install
# the shared-js directory needs to be copied into this directory beforehand!
COPY ./shared-js ../../shared-js
RUN ls -la
# the hosted.config.js file is NOT present in the public repo, so you need to create your own!
CMD ["npm","start","./config/hosted.config.js"]