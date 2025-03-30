FROM node:22.12
ENV NODE_OPTIONS="--max-old-space-size=1024"
WORKDIR /app
COPY . .
RUN npm install && npm run build
RUN npm install -g serve
#EXPOSE 4173
CMD ["serve", "dist"]
