FROM node:16.14.0-alpine as builder
COPY . /app 
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx:1.17.10-alpine
EXPOSE 80

COPY --from=builder /app/dist/bsams /usr/share/nginx/html