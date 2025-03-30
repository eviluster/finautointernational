FROM node:22.12
WORKDIR /app
COPY . .
RUN npm install && npm run build
RUN npm install -g serve
#EXPOSE 4173
CMD ["serve", "dist"]
