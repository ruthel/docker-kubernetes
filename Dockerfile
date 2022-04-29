FROM node:alpine

WORKDIR /app
COPY ./ ./
RUN yarn install
EXPOSE 5026:5025
CMD ["npm", "start"]