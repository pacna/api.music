# Grab the latest version of node from registry
FROM node:latest


RUN mkdir /app
WORKDIR /app

# Copying the current directory (api.music has package.json) to the /app folder
COPY . /app
RUN npm install

CMD ["npm", "run", "start"]