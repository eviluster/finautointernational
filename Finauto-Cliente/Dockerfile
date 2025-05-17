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

# 1) Copiamos package.json, lockfile y configs de TS/Vite (igual que Admin)

COPY package.json package-lock.json tsconfig.json vite.config.mts env.d.ts ./

# 2) Instalamos TODO (devDeps incluidos)
RUN npm ci

# 3) Copiamos el resto del código
COPY . .

# 4) Solo bundle, sin type-check
RUN npm run build-only

# Etapa final: servir con NGINX
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
