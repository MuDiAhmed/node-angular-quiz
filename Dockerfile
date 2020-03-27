FROM node:10 
ENV PORT 4300
ENV DB_HOST mongo
ENV DB_PORT 27017
ENV DB_NAME 3DD
WORKDIR /app
COPY package*.json ./
RUN npm install
WORKDIR /app/frontend
COPY frontend/package.*json ./
RUN npm install
COPY frontend ./
RUN ./node_modules/.bin/ng build --prod
WORKDIR /app
COPY . .
CMD ./node_modules/.bin/nodemon index.js
EXPOSE ${PORT}