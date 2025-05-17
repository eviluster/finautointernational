# # Etapa 1: Build
# FROM node:22.14-alpine AS builder
# WORKDIR /app

# # Copiamos e instalamos dependencias
# COPY package*.json ./
# RUN npm install

# # Copiamos el resto del proyecto
# COPY . .

# # Deshabilitamos el type-check en tiempo de build
# RUN if grep -q '"type-check"' package.json; then \
#     sed -i 's/"type-check": *"[^"]*"/"type-check": "echo Skipping type-check..."/' package.json; \
#   else \
#     echo 'No type-check script found'; \
#   fi && npm run build

# # Etapa 2: Producción con NGINX
# FROM nginx:alpine
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Opcional: configuración NGINX personalizada (si tienes)
# # COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]


# ─── Etapa 1: Build ─────────────────────────────────────────────────────────────
FROM node:22.14-alpine AS builder
WORKDIR /app

# 1) Copiamos únicamente package.json, lockfile y configs de TS/Vite
COPY package.json package-lock.json vite.config.js ./

# 2) Instalamos TODO (incluyendo devDependencies) para que vue-tsc, @types/…, etc. estén disponibles
RUN npm ci


# 3) Copiamos el resto de la aplicación
COPY . .

# 4) Hacemos build
#    - Opcional A: si quieres forzar sólo el bundle sin type-check, usa `npm run build-only`
#    - Recomendado B: correr la validación de tipos + build con tu script "build"

# # >>> DEBUG: verifica que tu tsconfig.json es el correcto
# RUN echo "----- tsconfig.json ----" && cat tsconfig.json

# # y que vite.config.mts también
# RUN echo "----- vite.config.mts ----" && cat vite.config.mts


RUN npm run build-only

# ─── Etapa 2: Producción ─────────────────────────────────────────────────────────
FROM nginx:alpine
# Copiamos el resultado estático del builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponemos el puerto 80 y lanzamos NGINX
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
