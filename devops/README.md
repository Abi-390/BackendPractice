# 🚀 Deploying an Express Server on AWS EC2 (Beginner DevOps Guide)

This guide explains how to:

- Create an AWS Free Tier account  
- Create IAM user with EC2 access  
- Launch Ubuntu EC2 instance  
- Connect using SSH  
- Install Node.js  
- Copy Express project using SCP  
- Run server on AWS  

---

## 1️⃣ Create AWS Account

1. Go to: https://console.aws.amazon.com  
2. Create a new account  
3. Choose **Free Tier**
4. Add debit/credit card (required for verification)

---

## 2️⃣ Create IAM Group & User (Best Practice – Do NOT Use Root)

### Step 1 – Create User Group

1. Go to **IAM**
2. Click **User Groups**
3. Click **Create Group**
4. Give any name (e.g., `ec2-full-access-group`)
5. Attach policy:
   - `AmazonEC2FullAccess`
6. Create group

---

### Step 2 – Create IAM User

1. Go to **Users**
2. Click **Create User**
3. Give username
4. Add user to the previously created EC2 group
5. Create user

---

### Step 3 – Enable Console Access

1. Click on the created user
2. Go to **Security Credentials**
3. Enable **Console Sign-In**
4. Choose:
   - Auto-generate password
   - User must change password on first login
5. Save

You will get:
- Username
- Password
- Console sign-in URL

⚠️ Open the Console Sign-in URL in a different browser or browser profile.  
Opening in the same browser logs you out of root.

---

## 3️⃣ Login as IAM User

1. Open the provided sign-in URL
2. Enter username & password
3. New AWS console will open

---

## 4️⃣ Launch EC2 Instance

1. Click **View All Services**
2. Select **EC2**
3. Choose region (e.g., Mumbai – ap-south-1)
4. Click **Launch Instance**

### Configure Instance:

- Name: Anything
- OS: Ubuntu
- Instance type:
  - `t3.micro` (Free Tier, 2 vCPU) – preferred
  - OR `t2.micro` (1 vCPU)

### Network Settings:

Enable:
- Allow SSH traffic from anywhere
- Allow HTTP traffic
- Allow HTTPS traffic

---

## 5️⃣ Create Key Pair

During launch:

- Create new key pair
- Choose:
  - Key type: RSA
  - Format: `.pem`
- Download file

⚠️ Keep this file safe. You cannot download it again.

Click **Launch Instance**.

---

## 6️⃣ Setup VS Code Project Folder

1. Create a project folder
2. Paste your `.pem` file inside it

---

## 7️⃣ Connect to EC2 Using SSH

Go to:

EC2 → Instances → Your Instance → Connect → SSH Client

### Step 1  – Open terminal


- chmod 400 your-key-name.pem
- ssh -i "your-key-name.pem" ubuntu@your-public-ip
- sudo apt update
- sudo apt upgrade 
- sudo apt install nodejs 
- sudo apt install npm 

### Step 2 - Create server

- create your express server inside the project folder
- run your express server inside a new terminal

### Step 3 - Copy Files to EC2 Using SCP

- create a new terminal inside the project
- scp -i your-key-name.pem server.js ubuntu@your-public-ip:/home/ubuntu/
- scp -i your-key-name.pem package.json ubuntu@your-public-ip:/home/ubuntu/
- scp -i your-key-name.pem package-lock.json ubuntu@your-public-ip:/home/ubuntu/

### Step 4 - Run Server on EC2

- Go back to SSH terminal
- npm install
- node server.js
- You should see : Server running on port 3000
- Access in browser : http://your-public-ip:3000



```bash

Author : Abinash Deka