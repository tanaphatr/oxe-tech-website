# ใช้ node:18 image เป็น base
FROM node:18

WORKDIR /app

# copy เฉพาะ package.json และ package-lock.json
COPY package*.json ./

# ลบ node_modules ถ้ามีใน context (ถ้าแอบส่งมาด้วย)
RUN rm -rf node_modules

# ติดตั้ง dependencies ใหม่ (ต้องติดตั้งบน Linux จริงใน container)
RUN npm install

# copy source code ที่เหลือทั้งหมด
COPY . .

# build
RUN npm run build

# รันแอป (แล้วแต่โปรเจกต์)
CMD ["npm", "start"]
