#1st stage base image
FROM node:20-slim AS builder

#set working directory
WORKDIR /app

#copying dependencies 
COPY package*.json ./

#updating image
RUN apt-get update \
    && apt-get upgrade -y \
    && rm -rf /var/lib/apt/lists/*

#installing dependencies
RUN npm install

#copy actual source code
COPY . .

#listing all files of containers /app directory
RUN ls -la /app

#adding non-root user
#RUN groupadd appgroup && useradd -g appgroup appuser

#change ownership of files from root to appuser
#RUN chown -R appuser:appgroup /app

#2nd stage base image(distroless)
# hadolint ignore=DL3006
FROM gcr.io/distroless/nodejs20-debian12

#set working directory
WORKDIR /app

#copying needed files from 1st stage
#COPY --from=builder /etc/passwd /etc/passwd
#COPY --from=builder /etc/group /etc/group
#COPY --from=builder --chown=appuser:appgroup /app .
COPY --from=builder  --chown=nonroot:nonroot /app .

# Distroless has a built-in 'nonroot' user (UID 65532)
USER nonroot

#backend runs on port 5000
EXPOSE 5000

#startup command 
CMD ["app.js"]
