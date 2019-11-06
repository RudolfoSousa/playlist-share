FROM node:10.15.2

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

COPY . .

RUN yarn build

CMD [ "yarn", "dev" ]