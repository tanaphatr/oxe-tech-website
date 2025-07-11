FROM node:18

WORKDIR /app

# copy เฉพาะ package.json และ package-lock.json
COPY package*.json ./

# ลบ node_modules เก่าที่ติดมากับ context (ถ้ามี)
RUN rm -rf node_modules package-lock.json

# ติดตั้ง dependencies ใหม่ใน container (บน Linux จริง)
RUN npm install

# คัดลอก source code ที่เหลือ
COPY . .

ARG NEXT_PUBLIC_EMAILJS_SERVICE_ID
ARG NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ARG NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

ENV NEXT_PUBLIC_EMAILJS_SERVICE_ID=$NEXT_PUBLIC_EMAILJS_SERVICE_ID
ENV NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=$NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
ENV NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=$NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

# Continue with build...
RUN npm run build


CMD ["npm", "start"]
