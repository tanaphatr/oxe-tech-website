interface Translations {
  [key: string]: {
    th: string;
    en: string;
  };
}

export const translations: Translations = {
  // Navigation
  home: { th: "หน้าแรก", en: "Home" },
  about: { th: "เกี่ยวกับเรา", en: "About Us" },
  services: { th: "บริการ", en: "Services" },
  portfolio: { th: "ผลงาน", en: "Portfolio" },
  contact: { th: "ติดต่อ", en: "Contact" },
  getStarted: { th: "เริ่มต้น", en: "Get Started" }, // Hero Section
  heroTitle: {
    th: "OXE TECH",
    en: "OXE TECH",
  },
  heroTitleAccent: {
    th: "นวัตกรรมเริ่มต้นจากจินตนาการ",
    en: "Innovation Starts With Imagination",
  },
  heroDescription: {
    th: "ผู้เชี่ยวชาญด้านการพัฒนาเทคโนโลยีและซอฟต์แวร์คุณภาพสูง พร้อมด้วยทีมงานมืออาชีพที่มีประสบการณ์กว่า 10 ปี ในการสร้างสรรค์โซลูชันดิจิทัลที่ตอบโจทย์ธุรกิจสมัยใหม่",
    en: "Expert in developing high-quality technology and software solutions with a professional team having over 10 years of experience in creating digital solutions that meet modern business needs.",
  },
  exploreServices: { th: "เรียนรู้เพิ่มเติม", en: "Learn More About Us" },
  viewPortfolio: { th: "ดูผลงาน", en: "View Portfolio" },

  // Stats
  projects: { th: "โปรเจ็กต์", en: "Projects" },
  years: { th: "ปี", en: "Years" },
  success: { th: "สำเร็จ", en: "Success" },
  support: { th: "สนับสนุน", en: "Support" }, // About Section
  aboutTitle: { th: "เกี่ยวกับเรา", en: "About Us" },
  aboutDescription: {
    th: "บริษัท โอ เอ็กซ์ อี เทค จำกัด เป็นผู้เชี่ยวชาญด้านการพัฒนาเทคโนโลยีและซอฟต์แวร์ เราให้บริการพัฒนาเว็บแอปพลิเคชัน แอปพลิเคชันมือถือ ระบบ E-commerce ระบบจัดการข้อมูลขนาดใหญ่ (Big Data) และโซลูชันดิจิทัลที่หลากหลาย พร้อมทั้งให้บริการปรึกษาด้านเทคโนโลยีและการจัดหาบุคลากรที่มีความเชี่ยวชาญ เพื่อตอบสนองความต้องการของลูกค้าทุกภาคส่วน",
    en: "OXE Tech Co., Ltd. is a specialist in technology and software development. We provide web application development, mobile applications, E-commerce systems, Big Data management systems, and various digital solutions. We also offer technology consulting services and expert personnel recruitment to meet the needs of customers in all sectors.",
  },

  // About Cards
  innovationTitle: { th: "นวัตกรรมเป็นอันดับแรก", en: "Innovation First" },
  innovationDesc: {
    th: "เราใช้เทคโนโลยีที่ทันสมัยเพื่อส่งมอบโซลูชันที่ก้าวล้ำทางเทคโนโลยี",
    en: "We leverage cutting-edge technologies to deliver solutions that stay ahead of the curve.",
  },
  qualityTitle: { th: "การประกันคุณภาพ", en: "Quality Assurance" },
  qualityDesc: {
    th: "ทุกโปรเจ็กต์ผ่านการทดสอบอย่างเข้มงวดเพื่อรับประกันมาตรฐานคุณภาพและความเชื่อมั่นสูงสุด",
    en: "Every project undergoes rigorous testing to ensure the highest standards of quality and reliability.",
  },
  teamTitle: { th: "ทีมผู้เชี่ยวชาญ", en: "Expert Team" },
  teamDesc: {
    th: "นักพัฒนาและนักออกแบบที่มีประสบการณ์ของเราทำงานร่วมกันเพื่อนำวิสัยทัศน์ของคุณมาสู่ความเป็นจริง",
    en: "Our experienced developers and designers work collaboratively to bring your vision to life.",
  }, // Services Section
  servicesTitle: { th: "บริการของเรา", en: "Our Services" },
  servicesDescription: {
    th: "เราให้บริการครบวงจรด้านเทคโนโลยี ตั้งแต่การพัฒนาเว็บแอปพลิเคชัน แอปพลิเคชันมือถือ ไปจนถึงการจัดหาบุคลากรที่มีความเชี่ยวชาญ",
    en: "We provide comprehensive technology services, from web application development and mobile applications to expert personnel recruitment.",
  },

  // Service Items
  webDev: { th: "พัฒนาเว็บแอปพลิเคชัน", en: "Web Application Development" },
  webDevDesc: {
    th: "พัฒนาเว็บไซต์และเว็บแอปพลิเคชันที่ทันสมัย รองรับการใช้งานบนทุกอุปกรณ์ และมีประสิทธิภาพสูง",
    en: "Development of modern websites and web applications that support all devices and deliver high performance.",
  },
  mobileDev: { th: "พัฒนาแอปพลิเคชันมือถือ", en: "Mobile Application Development" },
  mobileDevDesc: {
    th: "สร้างแอปพลิเคชันมือถือที่ใช้งานง่าย สำหรับทั้งระบบ iOS และ Android พร้อมฟีเจอร์ที่ตอบโจทย์ผู้ใช้",
    en: "Create user-friendly mobile applications for both iOS and Android platforms with features that meet user needs.",
  },
  resourcing: { th: "จัดหาบุคลากร", en: "Personnel Recruitment" },
  resourcingDesc: {
    th: "บริการจัดหาและคัดเลือกบุคลากรที่มีความเชี่ยวชาญด้านเทคโนโลยี เพื่อเสริมความแข็งแกร่งให้กับองค์กรของคุณ",
    en: "Recruitment and selection services for technology specialists to strengthen your organization.",
  },
  database: { th: "โซลูชันฐานข้อมูล", en: "Database Solutions" },
  databaseDesc: {
    th: "บริการออกแบบ เพิ่มประสิทธิภาพ และจัดการฐานข้อมูลแบบครบวงจรสำหรับฐานข้อมูล SQL และ NoSQL",
    en: "Comprehensive database design, optimization, and management services for SQL and NoSQL databases.",
  },
  analytics: { th: "การวิเคราะห์ข้อมูลดิจิทัล", en: "Digital Analytics" },
  analyticsDesc: {
    th: "โซลูชันการวิเคราะห์ข้อมูลขั้นสูงและ business intelligence เพื่อช่วยให้คุณตัดสินใจอย่างมีข้อมูลประกอบ",
    en: "Advanced analytics and business intelligence solutions to help you make data-driven decisions.",
  },
  cloud: { th: "โซลูชันคลาวด์", en: "Cloud Solutions" },
  cloudDesc: {
    th: "โครงสร้างพื้นฐานคลาวด์ที่ปรับขนาดได้และบริการ deployment โดยใช้แพลตฟอร์ม AWS, Google Cloud และ Azure",
    en: "Scalable cloud infrastructure and deployment services using AWS, Google Cloud, and Azure platforms.",
  },
  consulting: { th: "การให้คำปรึกษาทางเทคนิค", en: "Technical Consulting" },
  consultingDesc: {
    th: "การให้คำปรึกษาทางเทคนิคจากผู้เชี่ยวชาญเพื่อช่วยคุณเลือก technology stack และสถาปัตยกรรมที่เหมาะสมสำหรับโปรเจ็กต์",
    en: "Expert technical consultation to help you choose the right technology stack and architecture for your projects.",
  },

  // Service Features (bullet points)
  responsiveDesign: { th: "การออกแบบที่ตอบสนอง", en: "Responsive Design" },
  ecommerce: { th: "โซลูชัน E-commerce", en: "E-commerce Solutions" },
  pwa: { th: "Progressive Web Apps", en: "Progressive Web Apps" },
  iosAndroid: { th: "แอป iOS และ Android", en: "iOS & Android Apps" },
  crossPlatform: { th: "โซลูชัน Cross-platform", en: "Cross-platform Solutions" },
  appStore: { th: "การเพิ่มประสิทธิภาพ App Store", en: "App Store Optimization" },
  dbDesign: { th: "การออกแบบฐานข้อมูล", en: "Database Design" },
  performance: { th: "การเพิ่มประสิทธิภาพ", en: "Performance Optimization" },
  migration: { th: "การย้ายข้อมูล", en: "Data Migration" },
  bi: { th: "Business Intelligence", en: "Business Intelligence" },
  visualization: { th: "การแสดงผลข้อมูล", en: "Data Visualization" },
  metrics: { th: "ตัวชี้วัดประสิทธิภาพ", en: "Performance Metrics" },
  cloudMigration: { th: "การย้ายไปคลาวด์", en: "Cloud Migration" },
  iac: { th: "Infrastructure as Code", en: "Infrastructure as Code" },
  devops: { th: "การนำ DevOps มาใช้", en: "DevOps Implementation" },
  assessment: { th: "การประเมินเทคโนโลยี", en: "Technology Assessment" },
  architecture: { th: "การออกแบบสถาปัตยกรรม", en: "Architecture Design" },
  codeReview: { th: "การตรวจสอบโค้ด", en: "Code Review" }, // Portfolio Section
  portfolioTitle: { th: "ผลงาน", en: "Our Portfolio" },
  portfolioDescription: {
    th: "ตัวอย่างผลงานที่ประสบความสำเร็จของเราในการพัฒนาระบบและแอปพลิเคชันต่างๆ ที่ตอบโจทย์ความต้องการของลูกค้า",
    en: "Examples of our successful projects in developing various systems and applications that meet customer needs.",
  },

  // Portfolio Projects
  projectManagement: { th: "ระบบจัดการข้อมูลสาขา", en: "Branch Data Management System" },
  projectDescription1: {
    th: "ระบบจัดการข้อมูลและบันทึกการดำเนินงานของสาขาต่างๆ",
    en: "Data management and operational recording system for various branches.",
  },

  ecommerceSystem: { th: "ระบบจัดการการเงิน", en: "Financial Management System" },
  projectDescription2: {
    th: "ระบบจัดการการเงิน การเรียกเก็บเงิน และการออกใบแจ้งหนี้",
    en: "Financial management, billing, and invoice generation system.",
  },

  mobileApp: { th: "ระบบผู้ดูแลและวิเคราะห์ข้อมูล", en: "Admin and Data Analytics System" },
  projectDescription3: {
    th: "ระบบบริหารจัดการผู้ใช้และการวิเคราะห์ข้อมูลเชิงลึก",
    en: "User management and advanced data analytics platform.",
  },
  // Portfolio List Items
  portfolioList1: {
    th: "ระบบต้นแบบโรงพักดิจิตอล",
    en: "Digital Police Station Prototype System",
  },
  portfolioList2: {
    th: "ระบบร้องเรียน/ร้องทุกข์ออนไลน์ สำนักงานตำรวจ (JCOMS)",
    en: "Online Complaint System for Police Department (JCOMS)",
  },
  portfolioList3: {
    th: "โครงการจัดทำระบบวิเคราะห์ข้อมูลขนาดใหญ่ (Big Data)",
    en: "Big Data Analytics System Development Project",
  },
  portfolioList4: {
    th: "พัฒนาระบบ COE Services สภาวิศวกร",
    en: "Engineering Council COE Services System Development",
  },
  portfolioList5: {
    th: "พัฒนาระบบ E-Commerce (Onxon) ประเทศลาว",
    en: "E-Commerce System Development (Onxon) Laos",
  },
  portfolioList6: {
    th: "พัฒนาระบบ Express ประเทศลาว",
    en: "Express System Development Laos",
  },
  portfolioList7: {
    th: "พัฒนาระบบคลังสินค้าครบวงจร ประเทศลาว",
    en: "Comprehensive Warehouse Management System Development Laos",
  },
  portfolioList8: {
    th: "พัฒนาระบบ Billing Upgrad (CRM) และระบบ CRM",
    en: "Billing Upgrade (CRM) and CRM System Development",
  },
  portfolioList9: {
    th: "ระบบ iC89 Management Software",
    en: "iC89 Management Software System",
  },
  portfolioList10: {
    th: "ศูนย์ติดตามสถานการณ์น้ำ",
    en: "Water Situation Monitoring Center",
  },
  portfolioList11: {
    th: "Vichy-th maintendance support",
    en: "Vichy-th Maintenance Support",
  },
  portfolioList12: {
    th: "พัฒนาระบบ Admin และ Analytics",
    en: "Admin and Analytics System Development",
  },
  portfolioList13: {
    th: "องค์การเภสัชกรรม",
    en: "Pharmaceutical Organization System",
  },
  portfolioList14: {
    th: "พัฒนาระบบหลังบ้าน Lotus's",
    en: "Lotus's Backend System Development",
  },
  // Partners Section
  partnersTitle: { th: "พาร์ทเนอร์", en: "Our Partners" },
  partnersDescription: {
    th: "เราภูมิใจที่ได้ร่วมงานกับพาร์ทเนอร์ชั้นนำและองค์กรที่มีชื่อเสียงต่างๆ ในการสร้างสรรค์โซลูชันเทคโนโลยีที่มีคุณภาพ",
    en: "We're proud to collaborate with leading partners and renowned organizations in creating high-quality technology solutions.",
  },

  // Technology Section
  technologyTitle: { th: "เทคโนโลยีและเครื่องมือ", en: "Technology & Tools" },
  technologyDescription: {
    th: "เราใช้เทคโนโลยีและเครื่องมือที่ทันสมัยและเป็นมาตรฐานในอุตสาหกรรม เพื่อพัฒนาโซลูชันที่มีประสิทธิภาพ เสถียร และปลอดภัย",
    en: "We use cutting-edge and industry-standard technologies and tools to develop efficient, stable, and secure solutions.",
  },

  // About Company Section
  aboutCompanyTitle: { th: "ทีมงานมืออาชีพ & บริการระดับพรีเมียม", en: "Professional Team & Premium Service" },
  aboutCompanyDesc: {
    th: "ทีมงานมืออาชีพของเรามีความเชี่ยวชาญในด้านต่างๆ พร้อมให้บริการคุณภาพระดับพรีเมียม และสนับสนุนลูกค้าตลอดกระบวนการพัฒนาโปรเจ็กต์",
    en: "Our professional team has expertise in various fields, ready to provide premium quality services and support customers throughout the project development process.",
  },
  // Contact Section
  contactTitle: { th: "พร้อมเริ่มต้นโปรเจ็กต์แล้วหรือยัง?", en: "Ready to Start Your Project?" },
  contactDescription: {
    th: "มาคุยกันเกี่ยวกับโปรเจ็กต์ของคุณ เราพร้อมช่วยเหลือและให้คำปรึกษาเพื่อเปลี่ยนไอเดียของคุณให้กลายเป็นโซลูชันดิจิทัลที่มีประสิทธิภาพ",
    en: "Let's discuss your project. We're ready to help and provide consultation to transform your ideas into efficient digital solutions.",
  },
  contactInfo: { th: "ข้อมูลการติดต่อ", en: "Contact Information" },
  yourName: { th: "ชื่อของคุณ", en: "Your Name" },
  yourEmail: { th: "อีเมลของคุณ", en: "Your Email" },
  subject: { th: "หัวข้อ", en: "Subject" },
  yourMessage: { th: "ข้อความของคุณ", en: "Your Message" },
  sendMessage: { th: "ส่งข้อความ", en: "Send Message" },
  // Footer
  companyDesc: {
    th: "ผู้ให้บริการโซลูชันเทคโนโลยีชั้นนำในประเทศไทย เชี่ยวชาญด้านการพัฒนาซอฟต์แวร์ เว็บแอปพลิเคชัน แอปพลิเคชันมือถือ และบริการดิจิทัลทรานส์ฟอร์เมชัน เพื่อช่วยให้ธุรกิจเติบโตและประสบความสำเร็จในยุคดิจิทัล",
    en: "Leading technology solutions provider in Thailand, specializing in software development, web applications, mobile applications, and digital transformation services to help businesses grow and succeed in the digital age.",
  },
  quickLinks: { th: "ลิงก์ด่วน", en: "Quick Links" },
  copyright: { th: "© 2025 OXE Tech Thailand. สงวนลิขสิทธิ์", en: "© 2025 OXE Tech Thailand. All rights reserved." },
};

export type Language = "th" | "en";

export const getTranslation = (key: string, lang: Language): string => {
  return translations[key]?.[lang] || translations[key]?.en || key;
};
