# Step 1: ใช้ node base image
FROM node:18-alpine

# Step 2: ตั้ง working directory
WORKDIR /app

# Step 3: Copy ไฟล์ package
COPY package*.json ./

# Step 4: ติดตั้ง dependencies
RUN npm install

# Step 5: Copy source code
COPY . .

# Step 6: Build Project
RUN npm run build

# Step 7: เปิด port
EXPOSE 3000

# Step 8: สั่งรัน server
CMD ["npm", "start"]
