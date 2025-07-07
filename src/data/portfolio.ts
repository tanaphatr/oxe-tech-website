import { PortfolioItem } from "@/types/portfolio";

export const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    slug: "lotus-backend-system",
    title: {
      th: "ระบบ Backend ของ Lotus",
      en: "Lotus's Backend System Development",
    },
    description: {
      th: "พัฒนาระบบ Backend ที่มีประสิทธิภาพสูงสำหรับ Lotus โดยใช้เทคโนโลยี microservices architecture เพื่อรองรับการทำงานของระบบขนาดใหญ่และการเชื่อมต่อกับระบบต่างๆ ได้อย่างมีประสิทธิภาพ",
      en: "Developed a high-performance backend system for Lotus using microservices architecture to support large-scale operations and efficient integration with various systems.",
    },
    shortDescription: {
      th: "ระบบ Backend ที่มีประสิทธิภาพสูงสำหรับ Lotus ด้วย microservices architecture",
      en: "High-performance backend system for Lotus with microservices architecture",
    },
    category: "system",
    client: "Lotus",
    year: 2024,
    duration: "8 months",
    teamSize: 6,
    status: "completed",
    technologies: [
      { name: "Node.js", icon: "/tool/nodejs.webp", category: "backend" },
      { name: "NestJS", icon: "/tool/Nest.png", category: "backend" },
      { name: "PostgreSQL", icon: "/tool/PostgreSQL.webp", category: "database" },
      { name: "Docker", icon: "/tool/Docker.png", category: "cloud" },
      { name: "Kubernetes", icon: "/tool/kubernetes.webp", category: "cloud" },
      { name: "Elasticsearch", icon: "/tool/elasticsearch.webp", category: "database" },
    ],
    features: {
      th: ["Microservices Architecture ที่รองรับการขยายตัว", "Real-time API สำหรับการประมวลผลข้อมูล", "ระบบ Authentication และ Authorization ที่ปลอดภัย", "Database Optimization และ Caching", "Monitoring และ Logging แบบ Real-time", "CI/CD Pipeline สำหรับ Deployment อัตโนมัติ"],
      en: ["Scalable Microservices Architecture", "Real-time APIs for data processing", "Secure Authentication and Authorization system", "Database Optimization and Caching", "Real-time Monitoring and Logging", "CI/CD Pipeline for automated deployment"],
    },
    challenges: {
      th: ["การจัดการข้อมูลขนาดใหญ่จากหลายแหล่งข้อมูล", "การรับประกันความต่อเนื่องของระบบ 99.9%", "การปรับปรุงประสิทธิภาพการประมวลผล", "การรักษาความปลอดภัยของข้อมูลลูกค้า"],
      en: ["Managing large-scale data from multiple sources", "Ensuring 99.9% system uptime", "Optimizing processing performance", "Maintaining customer data security"],
    },
    solutions: {
      th: ["ใช้ Microservices เพื่อแบ่งระบบเป็นส่วนย่อยที่จัดการได้ง่าย", "ใช้ Load Balancing และ Auto-scaling เพื่อรองรับการใช้งานสูง", "ปรับปรุง Database Schema และใช้ Caching Strategy", "ใช้ Encryption และ Security Best Practices"],
      en: ["Used Microservices to divide system into manageable components", "Implemented Load Balancing and Auto-scaling for high availability", "Optimized Database Schema and implemented Caching Strategy", "Applied Encryption and Security Best Practices"],
    },
    results: {
      th: ["ลดเวลาการตอบสนองของระบบ 40%", "เพิ่มความสามารถในการรองรับผู้ใช้พร้อมกัน 300%", "ลดต้นทุนการดำเนินงาน 25%", "ปรับปรุงความปลอดภัยและความเสถียร 99.9%"],
      en: ["Reduced system response time by 40%", "Increased concurrent user capacity by 300%", "Reduced operational costs by 25%", "Improved security and stability to 99.9%"],
    },
    images: {
      main: "/portfolio/lotus-main.jpg",
      gallery: ["/portfolio/lotus-1.jpg", "/portfolio/lotus-2.jpg", "/portfolio/lotus-3.jpg", "/portfolio/lotus-4.jpg"],
      thumbnail: "/portfolio/lotus-thumb.jpg",
    },
    testimonial: {
      text: {
        th: "ทีม OXE Tech ได้พัฒนาระบบ Backend ที่มีประสิทธิภาพและความเสถียรสูง ช่วยให้เราสามารถรองรับการเติบโตของธุรกิจได้อย่างมีประสิทธิภาพ",
        en: "OXE Tech team developed a highly efficient and stable backend system that helps us effectively support our business growth.",
      },
      author: "คุณสมชาย ใจดี",
      position: "IT Director",
      company: "Lotus",
    },
  },
  {
    id: "2",
    slug: "ecommerce-platform",
    title: {
      th: "แพลตฟอร์ม E-commerce ขนาดใหญ่",
      en: "Large-scale E-commerce Platform",
    },
    description: {
      th: "พัฒนาแพลตฟอร์ม E-commerce ที่สมบูรณ์แบบ รองรับการทำงานแบบ multi-vendor พร้อมระบบจัดการสินค้าคงคลัง การชำระเงิน และการจัดส่งที่ทันสมัย",
      en: "Developed a comprehensive E-commerce platform supporting multi-vendor operations with modern inventory management, payment, and shipping systems.",
    },
    shortDescription: {
      th: "แพลตฟอร์ม E-commerce แบบ multi-vendor พร้อมระบบจัดการครบวงจร",
      en: "Multi-vendor E-commerce platform with comprehensive management system",
    },
    category: "ecommerce",
    client: "Confidential Client",
    year: 2023,
    duration: "12 months",
    teamSize: 8,
    status: "completed",
    technologies: [
      { name: "React", icon: "/tool/React.png", category: "frontend" },
      { name: "Next.js", icon: "/tool/nextjs.webp", category: "frontend" },
      { name: "Node.js", icon: "/tool/nodejs.webp", category: "backend" },
      { name: "PostgreSQL", icon: "/tool/PostgreSQL.webp", category: "database" },
      { name: "Docker", icon: "/tool/Docker.png", category: "cloud" },
      { name: "Strapi", icon: "/tool/Strapi.png", category: "backend" },
    ],
    features: {
      th: ["ระบบ Multi-vendor Marketplace", "ระบบจัดการสินค้าคงคลังอัตโนมัติ", "Payment Gateway หลากหลายช่องทาง", "ระบบติดตามการจัดส่งแบบ Real-time", "Admin Dashboard สำหรับจัดการร้านค้า", "Mobile-responsive Design"],
      en: ["Multi-vendor Marketplace System", "Automated Inventory Management", "Multiple Payment Gateway Integration", "Real-time Shipping Tracking", "Admin Dashboard for Store Management", "Mobile-responsive Design"],
    },
    challenges: {
      th: ["การจัดการธุรกรรมจำนวนมากพร้อมกัน", "การรองรับผู้ขายหลายรายในระบบเดียว", "การออกแบบ UI/UX ที่ใช้งานง่าย", "การรักษาความปลอดภัยของข้อมูลการชำระเงิน"],
      en: ["Managing high volume concurrent transactions", "Supporting multiple vendors in single system", "Designing user-friendly UI/UX", "Securing payment data"],
    },
    solutions: {
      th: ["ใช้ Database Connection Pooling และ Caching", "สร้าง Multi-tenant Architecture", "ออกแบบ Interface แบบ Intuitive", "ใช้ PCI DSS Compliance และ Encryption"],
      en: ["Implemented Database Connection Pooling and Caching", "Built Multi-tenant Architecture", "Designed Intuitive Interface", "Applied PCI DSS Compliance and Encryption"],
    },
    results: {
      th: ["รองรับผู้ใช้พร้อมกัน 10,000+ คน", "ประมวลผลธุรกรรมได้ 1,000+ รายการต่อนาที", "ลดเวลาการโหลดหน้าเว็บ 60%", "เพิ่มอัตราการแปลงลูกค้า 35%"],
      en: ["Support 10,000+ concurrent users", "Process 1,000+ transactions per minute", "Reduced page load time by 60%", "Increased customer conversion rate by 35%"],
    },
    images: {
      main: "/portfolio/ecommerce-main.jpg",
      gallery: ["/portfolio/ecommerce-1.jpg", "/portfolio/ecommerce-2.jpg", "/portfolio/ecommerce-3.jpg", "/portfolio/ecommerce-4.jpg", "/portfolio/ecommerce-5.jpg"],
      thumbnail: "/portfolio/ecommerce-thumb.jpg",
    },
  },
  {
    id: "3",
    slug: "mobile-banking-app",
    title: {
      th: "แอปพลิเคชันธนาคารมือถือ",
      en: "Mobile Banking Application",
    },
    description: {
      th: "พัฒนาแอปพลิเคชันธนาคารมือถือที่ปลอดภัยและใช้งานง่าย รองรับการทำธุรกรรมทางการเงินครบวงจร พร้อมระบบรักษาความปลอดภัยระดับธนาคาร",
      en: "Developed a secure and user-friendly mobile banking application supporting comprehensive financial transactions with bank-level security systems.",
    },
    shortDescription: {
      th: "แอปธนาคารมือถือที่ปลอดภัยพร้อมระบบรักษาความปลอดภัยระดับธนาคาร",
      en: "Secure mobile banking app with bank-level security system",
    },
    category: "mobile",
    client: "Regional Bank",
    year: 2024,
    duration: "10 months",
    teamSize: 10,
    status: "completed",
    technologies: [
      { name: "React Native", icon: "/tool/React-native.png", category: "mobile" },
      { name: "Flutter", icon: "/tool/Flutter_.png", category: "mobile" },
      { name: "Node.js", icon: "/tool/nodejs.webp", category: "backend" },
      { name: "PostgreSQL", icon: "/tool/PostgreSQL.webp", category: "database" },
      { name: "Docker", icon: "/tool/Docker.png", category: "cloud" },
      { name: "Kubernetes", icon: "/tool/kubernetes.webp", category: "cloud" },
    ],
    features: {
      th: ["ระบบ Biometric Authentication", "การโอนเงินแบบ Real-time", "ระบบแจ้งเตือนทางการเงิน", "การจัดการบัญชีหลายบัญชี", "ระบบ QR Code Payment", "Dashboard การเงินส่วนบุคคล"],
      en: ["Biometric Authentication System", "Real-time Money Transfer", "Financial Notification System", "Multi-account Management", "QR Code Payment System", "Personal Financial Dashboard"],
    },
    challenges: {
      th: ["การรักษาความปลอดภัยสูงสุดของข้อมูลการเงิน", "การออกแบบ UX ที่เข้าใจง่ายสำหรับผู้ใช้ทุกวัย", "การรองรับมาตรฐานการธนาคารต่างๆ", "การทำงานแบบ Offline และ Online"],
      en: ["Ensuring maximum security for financial data", "Designing intuitive UX for users of all ages", "Supporting various banking standards", "Enabling both offline and online functionality"],
    },
    solutions: {
      th: ["ใช้ End-to-end Encryption และ Multi-factor Authentication", "ออกแบบ Interface ตาม Design System", "ปฏิบัติตามมาตรฐาน ISO 27001 และ PCI DSS", "พัฒนา Offline Capability ด้วย Local Storage"],
      en: ["Implemented End-to-end Encryption and Multi-factor Authentication", "Designed Interface following Design System", "Complied with ISO 27001 and PCI DSS standards", "Developed Offline Capability with Local Storage"],
    },
    results: {
      th: ["ใช้งานโดยลูกค้า 500,000+ คน", "ประมวลผลธุรกรรม 50,000+ รายการต่อวัน", "ได้รับรางวัล Best Mobile Banking App", "อัตราความพึงพอใจของผู้ใช้ 4.8/5"],
      en: ["Used by 500,000+ customers", "Process 50,000+ transactions daily", "Won Best Mobile Banking App award", "User satisfaction rate 4.8/5"],
    },
    images: {
      main: "/portfolio/banking-main.jpg",
      gallery: ["/portfolio/banking-1.jpg", "/portfolio/banking-2.jpg", "/portfolio/banking-3.jpg", "/portfolio/banking-4.jpg"],
      thumbnail: "/portfolio/banking-thumb.jpg",
    },
    testimonial: {
      text: {
        th: "แอปพลิเคชันที่ OXE Tech พัฒนาให้มีความปลอดภัยสูงและใช้งานง่าย ได้รับการตอบรับที่ดีจากลูกค้าอย่างมาก",
        en: "The application developed by OXE Tech is highly secure and user-friendly, receiving excellent feedback from our customers.",
      },
      author: "คุณวิชัย เก่งการเงิน",
      position: "Digital Banking Director",
      company: "Regional Bank",
    },
  },
];

export const getPortfolioBySlug = (slug: string): PortfolioItem | undefined => {
  return portfolioData.find((item) => item.slug === slug);
};

export const getPortfolioByCategory = (category: string): PortfolioItem[] => {
  if (category === "all") return portfolioData;
  return portfolioData.filter((item) => item.category === category);
};
