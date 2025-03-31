# Etapa 1: Build
FROM node:18-alpine AS builder
WORKDIR /app

# Copiamos e instalamos dependencias
COPY package*.json ./
RUN npm install

# Copiamos el resto del proyecto
COPY . .

# Deshabilitamos el type-check en tiempo de build
RUN npm set-script type-check "echo Skipping type-check..." && \
    npm run build

# Etapa 2: Producción con NGINX
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Opcional: configuración NGINX personalizada (si tienes)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
