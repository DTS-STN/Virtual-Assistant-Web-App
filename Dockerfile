FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .

ARG VITE_APP_FEEDBACK_API_URL
ENV VITE_APP_FEEDBACK_API_URL=$VITE_APP_FEEDBACK_API_URL
RUN npm run build

FROM nginx as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
