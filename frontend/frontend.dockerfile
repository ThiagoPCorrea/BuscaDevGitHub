FROM node:16 as Build
WORKDIR /src
COPY . .
RUN npm i
RUN npm run build

FROM nginx 
WORKDIR /usr/share/nginx/html
COPY --from=build /src/build .
ADD ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80 443