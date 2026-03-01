# 🐳 Dockerizing an Express.js App (Step-by-Step Guide)

This guide explains how to:

- Create a simple Express server
- Write a Dockerfile
- Build a Docker image
- Run a Docker container
- Understand what each Docker instruction does

This is a beginner-friendly DevOps walkthrough.

---

# 📌 Prerequisites

Make sure you have installed:

- Node.js (for local testing)
- Docker Desktop
- Git (optional but recommended)
- VS Code (recommended)

Check Docker installation:

# Step 1 – Create Project Folder & Express Server

- mkdir DOCKER
- cd DOCKER
- npm init -y
- npm install express
- create server.js with a dummy get api and test the server

# 🐳 Step 2 – Create Dockerfile

- Create a file named: dockerfile inside your project root
- # contents of dockerfile :

- FROM node:18
# Base image: includes Linux OS + Node.js v18

WORKDIR /app
# Sets working directory inside container

COPY package*.json ./
# Copies package.json and package-lock.json

RUN npm install
# Installs dependencies inside container

COPY server.js ./
# Copies application source code

EXPOSE 3000
# Tells Docker the app runs on port 3000

CMD ["node", "server.js"]
# Command to run when container starts

### 🧠 Understanding the Dockerfile

- FROM node:18 : Pulls official Node.js image from Docker Hub.

Includes:

Linux OS

Node.js

npm
- WORKDIR /app : Creates and sets /app directory inside container.

All next commands run inside /app.

- COPY package*.json ./ : Copies dependency files first.

This improves Docker caching performance.

- RUN npm install : Installs dependencies inside container.

Creates node_modules inside container.

- COPY server.js ./ : Copies your application file.

- EXPOSE 3000 : Informs Docker that app listens on port 3000.

- CMD ["node", "server.js"] : Runs the server when container starts.

# 🔨 Step 3 – Build Docker Image

- Make sure you are inside the project folder.
- Run : docker build -t first_docker_image .
- Explanation:

docker build → builds image

-t → tag/name of image

. → current directory (where Dockerfile exists)

If successful, Docker image is created.
- Verify Image : Run --> docker images
- You should see the docker image that has been created with the name you gave

```bash
Author -- Abinash Deka