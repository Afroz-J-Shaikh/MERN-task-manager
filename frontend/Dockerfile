FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json .

RUN apt-get update \
    && apt-get upgrade -y \
    && rm -rf /var/lib/apt/lists/*

RUN npm install

COPY . .

RUN npm run build

RUN ls -la

FROM nginx:alpine

RUN addgroup -S appgroup && adduser -S -G appgroup appuser

COPY --from=builder --chown=appuser:appgroup /app/build /usr/share/nginx/html
COPY --from=builder --chown=appuser:appgroup /app/nginx.conf /etc/nginx/conf.d/default.conf

RUN chown -R appuser:appgroup /var/cache/nginx /var/log/nginx /etc/nginx
RUN touch /var/run/nginx.pid && \
    chown appuser:appgroup /var/run/nginx.pid
    
USER appuser

EXPOSE 80

CMD ["nginx","-g","daemon off;"]
