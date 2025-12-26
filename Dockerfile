FROM node:22-alphine
WORKDIR /demo
COPY . .
RUN yarn install --production
CMD ["node" "./src/app.js"]
