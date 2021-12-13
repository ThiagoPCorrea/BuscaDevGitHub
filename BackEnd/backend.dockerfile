FROM node as dist
WORKDIR ../BackEnd
COPY . .
EXPOSE 4000/tcp
RUN npm i --only=production
CMD [ "node","./server.js" ]