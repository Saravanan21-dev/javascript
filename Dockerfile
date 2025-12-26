FROM node:22-alpine
WORKDIR /demo
COPY . .
RUN yarn install --production
CMD ["node" "app.js"]
