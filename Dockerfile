FROM node:20-alpine
WORKDIR /app

# 1) Copia solo los manifests para cachear bien
COPY app/package*.json ./

# 2) Instala y luego elimina dev-deps
RUN npm ci && npm prune --omit=dev

# 3) Copia el código
COPY app ./

# 4) Usuario no root
RUN addgroup -S app && adduser -S app -G app
USER app

EXPOSE 3000
CMD ["node", "src/index.js"]
