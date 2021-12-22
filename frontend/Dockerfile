FROM node:16-alpine
WORKDIR /app/frontend
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json package-lock.json ./
RUN npm install
RUN npm install react-scripts@latest -g
COPY . ./
EXPOSE 3000