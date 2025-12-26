FROM node:22-alphine
WORKDIR /demo
COPY . .
RUN npm ci --omit=dev
CMD ["node" "app.js"]