FROM node:16-alpine

WORKDIR /webapp

COPY ./ ./

RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn","start"]