# EmailJS Setup Guide for OXE Tech Website

## การตั้งค่า EmailJS สำหรับส่งอีเมลจากฟอร์มติดต่อ

### ขั้นตอนที่ 1: สร้างบัญชี EmailJS

1. ไปที่ [https://www.emailjs.com/](https://www.emailjs.com/)
2. สมัครสมาชิกหรือเข้าสู่ระบบ
3. ไปที่ Dashboard

### ขั้นตอนที่ 2: เพิ่ม Email Service

1. คลิก "Add New Service"
2. เลือก Gmail (หรือ email provider ที่คุณต้องการ)
3. กรอกข้อมูล:
   - Service Name: `OXE Tech Contact`
   - Email: `.........` (หรืออีเมลที่ต้องการรับ)
4. บันทึก Service ID ที่ได้

### ขั้นตอนที่ 3: สร้าง Email Template

1. คลิก "Create New Template"
2. กรอกข้อมูล template:

```html
Subject: Contact Form - {{subject}} From: {{from_name}} <{{from_email}}> เรื่อง: {{subject}} ข้อความ: {{message}} --- ส่งจากฟอร์มติดต่อเว็บไซต์ OXE Tech
```

3. ตั้งค่า variables:

   - `from_name` - ชื่อผู้ส่ง
   - `from_email` - อีเมลผู้ส่ง
   - `subject` - หัวข้อ
   - `message` - ข้อความ

4. บันทึก Template ID ที่ได้

### ขั้นตอนที่ 4: รับ Public Key

1. ไปที่ Account > General
2. คัดลอก Public Key

### ขั้นตอนที่ 5: อัปเดตไฟล์ Environment Variables

อัปเดตไฟล์ `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
```

### ขั้นตอนที่ 6: ทดสอบ

1. รันโปรเจ็ค: `npm run dev`
2. ไปที่หน้าเว็บ Contact section
3. กรอกฟอร์มและส่งทดสอบ
4. ตรวจสอบอีเมลที่ `tanaphatr5@gmail.com`

## ฟีเจอร์ที่ใช้งาน

✅ **Client-side Email Sending** - ส่งอีเมลจาก browser โดยตรง ✅ **No Server Required** - ไม่ต้องตั้งค่า server ✅ **Secure** - ไม่ต้องเก็บ email credentials ใน server ✅ **Real-time Feedback** - แสดงผลสำเร็จ/ผิดพลาดทันที ✅ **Multilingual Support** - รองรับภาษาไทยและอังกฤษ ✅ **Form Validation** - ตรวจสอบข้อมูลก่อนส่ง

## ประโยชน์ของ EmailJS

- **ง่ายต่อการตั้งค่า** - ไม่ต้องจัดการ server-side code
- **ปลอดภัย** - ไม่ต้องเก็บ password ใน code
- **เสถียร** - service ที่เชื่อถือได้
- **ฟรี** - มี free tier สำหรับการใช้งานทั่วไป
- **รองรับหลาย Email Provider** - Gmail, Outlook, Yahoo, etc.

## หมายเหตุ

- EmailJS มี rate limit สำหรับ free account
- สำหรับการใช้งานจริงที่มี traffic สูง ควรใช้ paid plan
- ตรวจสอบ spam folder หากไม่เห็นอีเมลทดสอบ
