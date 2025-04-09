# Etapa de construcción con todas las dependencias
FROM node:22.12-alpine AS builder
WORKDIR /app

# Copia solo los archivos necesarios
COPY package*.json ./
RUN npm ci

# Copia todo el backend
COPY . .

# Verificar que los archivos realmente están dentro del contenedor
RUN echo "Contenido de src/pago dentro del contenedor:" && \
    ls -la src/pago && \
    echo "Contenido de src/pago/entities dentro del contenedor:" && \
    ls -la src/pago/entities || echo "No existe la carpeta 'entities'"
    
RUN npm run build
RUN ls -la /app && ls -la /app/src && ls -la /app/src/pago

# Etapa produccion
FROM node:22.12-alpine
WORKDIR /app

# Copia los archivos necesarios desde la etapa de construcción
COPY package*.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/dist ./dist

# Expone el puerto y ejecuta la aplicación
#EXPOSE 5000
CMD ["node", "dist/src/main.js"]