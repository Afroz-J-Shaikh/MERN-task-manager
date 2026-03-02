FROM node:20-slim AS builder

WORKDIR /app

COPY package*.json ./

RUN apt-get update \
    && apt-get upgrade -y \
    && rm -rf /var/lib/apt/lists/*

RUN npm install

COPY . .

RUN ls -la /app

RUN groupadd appgroup && useradd -g appgroup appuser

RUN chown -R appuser:appgroup /app

FROM gcr.io/distroless/nodejs20-debian12

WORKDIR /app

COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /etc/group /etc/group
COPY --from=builder --chown=appuser:appgroup /app .

USER appuser

EXPOSE 5000

CMD ["app.js"]
