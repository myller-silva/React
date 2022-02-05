FROM node

WORKDIR /usr/src/app-doame

COPY package.json /usr/src/app-doame/
# COPY package.json .

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]


# # pull the base image
# FROM node:alpine

# # set the working direction
# WORKDIR /app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./

# COPY package-lock.json ./

# RUN npm install

# # add app
# COPY . ./

# # start app
# CMD ["npm", "start"]