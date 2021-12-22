FROM node:current-alpine
WORKDIR /app/frontend

COPY package.json package-lock.json ./
RUN npm install
RUN npm install react-scripts@latest -g
COPY . ./
EXPOSE 3000