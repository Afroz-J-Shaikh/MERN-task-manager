# MERN Task Manager

### A full-stack Task Management application built using the MERN (MongoDB, Express, React, Node) architecture, fully containerized and hardened.

## Architecture Highlights:

1. Frontend: React served by Nginx (Alpine) running as a non-root user.

2. Backend: Node.js API built using Google Distroless for a minimal attack surface.

3. Reverse Proxy: Nginx handles routing to bypass CORS issues and secure the backend.

4. Database: MongoDB with persistent volumes and healthcheck-dependent startup.

## Prerequisites

- Docker & Docker compose must be installed on the system.

## Setup

1. Create files named "db.env" & "mern.env". 
   * For "db.env" write :
    ```sh
    MONGO_INITDB_ROOT_USERNAME="admin"
    MONGO_INITDB_ROOT_PASSWORD="your_pass"
    ```

   * For "mern.env" write :
    ```sh 
     MONGODB_URL=mongodb://admin:<psswd>@db:27017/mydb?authSource=admin
     ACCESS_TOKEN_SECRET='Rj2S?RVe9[]8-dCS6A**&b5Tsg$gwbg~Bd{*QTK' (any-long-string)
    ```

2. Run the application

   ```sh
   docker compose up -d
   ```

4. Go to http://localhost:81

## CleanUp

   ```sh
   docker compose down
   ```

## Contact

- Email: afsk1997@gmail.com
- Linkedin: https://www.linkedin.com/in/afroz-j-shaikh/
