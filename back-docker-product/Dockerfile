FROM node:18

# Create app directory
WORKDIR /backend

COPY package*.json /backend/

RUN npm install

COPY . /backend/

EXPOSE 3000

CMD ["npm", "run", "dev"]