FROM node:14.15 AS build

WORKDIR /app
COPY . .
RUN npm i
RUN npm run build-storybook
FROM nginx:1.18.0
COPY --from=build /app/storybook-static /usr/share/nginx/html