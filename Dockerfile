FROM node:18

WORKDIR /app

# คัดลอก package.json และ lock file
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอก source ทั้งหมด
COPY . .

# สร้าง build
RUN npm run build

# รันแอป (อาจใช้ serve หรือ next start แล้วแต่โปรเจกต์)
CMD ["npm", "start"]
