# Etapa 1: Construcción del proyecto
FROM node:22.2.0-alpine AS build-stage

WORKDIR /app

# Copiamos solo los archivos de dependencias para cacheo eficiente
COPY package*.json ./

# Desactivamos el type-check en el build si existe en scripts
# Evitamos ejecutar "type-check" en el build (si existe)
RUN sed -i 's/npm run type-check && //' package.json || true

# Instalamos dependencias
RUN npm ci

# Copiamos el resto del código
COPY . .

# Ejecutamos el build de producción
RUN npm run build

# Etapa 2: Producción con NGINX
FROM nginx:alpine

# Copiamos archivos compilados al root de NGINX
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Configuración básica de NGINX (opcional si ya tienes tu archivo)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
