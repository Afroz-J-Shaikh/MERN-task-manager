#1st stage base image
FROM node:20-slim AS builder

#set working directory
WORKDIR /app

#copying dependencies 
COPY package*.json .

#updating image
RUN apt-get update \
    && apt-get upgrade -y \
    && rm -rf /var/lib/apt/lists/*

#installing dependencies
RUN npm ci --legacy-peer-deps

#copy actual source code
COPY . .

#building app
RUN npm run build

#2nd stage base image
FROM nginx:stable-alpine

#adding non-root user
RUN addgroup -S appgroup && adduser -S -G appgroup appuser

#copying needed files from 1st stage
COPY --from=builder --chown=appuser:appgroup /app/dist /usr/share/nginx/html
COPY --from=builder --chown=appuser:appgroup /app/nginx.conf /etc/nginx/conf.d/default.conf

#change ownership of files from root to appuser
RUN chown -R appuser:appgroup /var/cache/nginx /var/log/nginx /etc/nginx

#allowing non-root user to run nginx
RUN touch /var/run/nginx.pid && \
    chown appuser:appgroup /var/run/nginx.pid
    
#chnage user to appuser
USER appuser

#app runs on port 80
EXPOSE 80

#run nginx in front not in background
CMD ["nginx","-g","daemon off;"]
