FROM node:12.18.1
# set working directory
WORKDIR /app
#COPY package.json ./
#COPY package-lock.json ./

COPY . /app/

RUN npm install

RUN npm run build

CMD [ "npm", "start" ]