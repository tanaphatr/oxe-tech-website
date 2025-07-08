import { PortfolioItem } from "@/types/portfolio";

export const portfolioData: PortfolioItem[] = [
  {
    id: "1",
    slug: "coe-services",
    title: {
      th: "ระบบ COE Services สภาวิศวกร",
      en: "COE Services System for Engineering Council",
    },
    description: {
      th: "พัฒนาระบบ COE Services สำหรับสภาวิศวกรเพื่อให้บริการออนไลน์แก่วิศวกรทั่วประเทศ รวมถึงการลงทะเบียน การต่อใบอนุญาต การอบรม และการจัดการข้อมูลวิศวกร",
      en: "Developed COE Services system for the Engineering Council to provide online services for engineers nationwide, including registration, license renewal, training, and engineer data management.",
    },
    shortDescription: {
      th: "ระบบบริการออนไลน์สำหรับสภาวิศวกร",
      en: "Online services system for Engineering Council",
    },
    category: "system",
    client: "สภาวิศวกร",
    year: 2023,
    duration: "12 months",
    teamSize: 8,
    status: "completed",
    technologies: [
      { name: "Node.js", icon: "/tool/nodejs.webp", category: "backend" },
      { name: "React", icon: "/tool/React.png", category: "frontend" },
      { name: "PostgreSQL", icon: "/tool/PostgreSQL.webp", category: "database" },
      { name: "Docker", icon: "/tool/Docker.png", category: "cloud" },
      { name: "Next.js", icon: "/tool/nextjs.webp", category: "frontend" },
    ],
    features: {
      th: ["ระบบลงทะเบียนวิศวกรออนไลน์", "การต่อใบอนุญาตอัตโนมัติ", "ระบบการอบรมและการศึกษาต่อเนื่อง", "การจัดการข้อมูลวิศวกรแบบครบวงจร", "ระบบรายงานและสถิติ", "การเชื่อมต่อกับฐานข้อมูลภาครัฐ"],
      en: ["Online engineer registration system", "Automated license renewal", "Training and continuing education system", "Comprehensive engineer data management", "Reporting and statistics system", "Government database integration"],
    },
    challenges: {
      th: ["การจัดการข้อมูลวิศวกรจำนวนมาก", "ระบบความปลอดภัยที่เข้มงวด", "การเชื่อมต่อกับระบบภาครัฐ", "ประสิทธิภาพการทำงานแบบ Real-time"],
      en: ["Managing large volumes of engineer data", "Strict security system requirements", "Government system integration", "Real-time performance optimization"],
    },
    solutions: {
      th: ["ใช้ Database Partitioning และ Indexing", "ใช้ OAuth 2.0 และ JWT สำหรับความปลอดภัย", "พัฒนา API Gateway สำหรับการเชื่อมต่อ", "ใช้ Redis Cache และ CDN"],
      en: ["Implemented Database Partitioning and Indexing", "Used OAuth 2.0 and JWT for security", "Developed API Gateway for integration", "Implemented Redis Cache and CDN"],
    },
    results: {
      th: ["ลดเวลาการทำงานของเจ้าหน้าที่ 60%", "เพิ่มการเข้าถึงบริการของวิศวกร 200%", "ลดข้อผิดพลาดในการประมวลผล 85%", "ปรับปรุงความพึงพอใจของผู้ใช้ 95%"],
      en: ["Reduced staff workload by 60%", "Increased engineer service accessibility by 200%", "Reduced processing errors by 85%", "Improved user satisfaction to 95%"],
    },
    images: {
      main: "/portfolio/COE.webp",
      gallery: ["/portfolio/COE.webp", "/portfolio/COE.webp", "/portfolio/COE.webp"],
      thumbnail: "/portfolio/COE.webp",
    },
    testimonial: {
      text: {
        th: "ระบบ COE Services ช่วยให้การให้บริการแก่วิศวกรทั่วประเทศมีประสิทธิภาพมากขึ้น และลดระยะเวลาการดำเนินงาน",
        en: "The COE Services system has significantly improved our efficiency in serving engineers nationwide and reduced processing time.",
      },
      author: "คุณวิศวกร สุขสำราญ",
      position: "IT Director",
      company: "สภาวิศวกร",
    },
  },
  {
    id: "2",
    slug: "jcoms-nsb-system",
    title: {
      th: "ระบบร้องเรียน/ร้องทุกข์ออนไลน์ สำนักงานตำรวจ (JCOMS)",
      en: "Online Complaint System for National Security Bureau (JCOMS)",
    },
    description: {
      th: "พัฒนาระบบร้องเรียน/ร้องทุกข์ออนไลน์สำหรับสำนักงานตำรวจ เพื่อให้ประชาชนสามารถแจ้งเรื่องร้องเรียนได้อย่างสะดวกและรวดเร็ว พร้อมระบบติดตามสถานะการดำเนินงาน",
      en: "Developed an online complaint system for the National Security Bureau to enable citizens to submit complaints conveniently and quickly, with status tracking capabilities.",
    },
    shortDescription: {
      th: "ระบบร้องเรียนออนไลน์สำหรับสำนักงานตำรวจ",
      en: "Online complaint system for National Security Bureau",
    },
    category: "system",
    client: "สำนักงานตำรวจ",
    year: 2023,
    duration: "10 months",
    teamSize: 7,
    status: "completed",
    technologies: [
      { name: "Node.js", icon: "/tool/nodejs.webp", category: "backend" },
      { name: "React", icon: "/tool/React.png", category: "frontend" },
      { name: "PostgreSQL", icon: "/tool/PostgreSQL.webp", category: "database" },
      { name: "Next.js", icon: "/tool/nextjs.webp", category: "frontend" },
      { name: "Docker", icon: "/tool/Docker.png", category: "cloud" },
    ],
    features: {
      th: ["ระบบแจ้งเรื่องร้องเรียนออนไลน์", "การติดตามสถานะการดำเนินงาน", "ระบบจัดการเรื่องร้องเรียนสำหรับเจ้าหน้าที่", "การจัดหมวดหมู่เรื่องร้องเรียน", "ระบบรายงานและสถิติ", "การแจ้งเตือนอัตโนมัติ"],
      en: ["Online complaint submission system", "Status tracking system", "Complaint management system for officers", "Complaint categorization", "Reporting and statistics system", "Automated notifications"],
    },
    challenges: {
      th: ["การจัดการข้อมูลที่มีความละเอียดอย่างปลอดภัย", "ระบบการจัดลำดับความสำคัญ", "การเชื่อมต่อกับระบบภายในตำรวจ", "การรับประกันความเป็นส่วนตัว"],
      en: ["Securely managing sensitive data", "Priority classification system", "Integration with internal police systems", "Ensuring privacy protection"],
    },
    solutions: {
      th: ["ใช้ Encryption และ Access Control", "พัฒนาอัลกอริทึมการจัดลำดับความสำคัญ", "สร้าง API Gateway สำหรับการเชื่อมต่อ", "ใช้ GDPR Compliance และ Data Protection"],
      en: ["Implemented Encryption and Access Control", "Developed priority classification algorithm", "Created API Gateway for integration", "Applied GDPR Compliance and Data Protection"],
    },
    results: {
      th: ["ลดเวลาการดำเนินงาน 50%", "เพิ่มความโปร่งใสในการทำงาน 80%", "ปรับปรุงความพึงพอใจของประชาชน 70%", "ลดภาระงานเจ้าหน้าที่ 40%"],
      en: ["Reduced processing time by 50%", "Increased transparency by 80%", "Improved citizen satisfaction by 70%", "Reduced officer workload by 40%"],
    },
    images: {
      main: "/portfolio/NSB.webp",
      gallery: ["/portfolio/NSB.webp", "/portfolio/NSB.webp", "/portfolio/NSB.webp"],
      thumbnail: "/portfolio/NSB.webp",
    },
    testimonial: {
      text: {
        th: "ระบบ JCOMS ช่วยให้การดำเนินงานด้านการร้องเรียนมีประสิทธิภาพและโปร่งใสมากขึ้น",
        en: "The JCOMS system has made our complaint handling more efficient and transparent.",
      },
      author: "คุณสารวัตร ยุติธรรม",
      position: "IT Manager",
      company: "สำนักงานตำรวจ",
    },
  },
  {
    id: "3",
    slug: "egat-water-monitoring",
    title: {
      th: "ศูนย์ติดตามสถานการณ์น้ำ",
      en: "Water Situation Monitoring Center",
    },
    description: {
      th: "พัฒนาระบบศูนย์ติดตามสถานการณ์น้ำสำหรับการไฟฟ้าฝ่ายผลิตแห่งประเทศไทย (กฟผ.) เพื่อติดตามระดับน้ำในเขื่อนและแม่น้ำสายต่างๆ พร้อมระบบเตือนภัยและการวิเคราะห์ข้อมูล",
      en: "Developed a water situation monitoring center system for Electricity Generating Authority of Thailand (EGAT) to monitor water levels in dams and rivers with alert systems and data analytics.",
    },
    shortDescription: {
      th: "ระบบติดตามสถานการณ์น้ำแบบ Real-time",
      en: "Real-time water situation monitoring system",
    },
    category: "system",
    client: "การไฟฟ้าฝ่ายผลิตแห่งประเทศไทย",
    year: 2024,
    duration: "14 months",
    teamSize: 9,
    status: "completed",
    technologies: [
      { name: "Node.js", icon: "/tool/nodejs.webp", category: "backend" },
      { name: "React", icon: "/tool/React.png", category: "frontend" },
      { name: "PostgreSQL", icon: "/tool/PostgreSQL.webp", category: "database" },
      { name: "Next.js", icon: "/tool/nextjs.webp", category: "frontend" },
      { name: "Docker", icon: "/tool/Docker.png", category: "cloud" },
      { name: "Kubernetes", icon: "/tool/kubernetes.webp", category: "cloud" },
    ],
    features: {
      th: ["ระบบติดตามระดับน้ำแบบ Real-time", "ระบบแจ้งเตือนภัยน้ำท่วม/แล้ง", "Dashboard สำหรับวิเคราะห์ข้อมูล", "ระบบพยากรณ์สถานการณ์น้ำ", "การเชื่อมต่อกับเซนเซอร์ IoT", "ระบบรายงานอัตโนมัติ"],
      en: ["Real-time water level monitoring", "Flood/drought warning system", "Data analytics dashboard", "Water situation forecasting", "IoT sensor integration", "Automated reporting system"],
    },
    challenges: {
      th: ["การรวบรวมข้อมูลจากหลากหลายแหล่งข้อมูล", "ระบบเตือนภัยที่แม่นยำ", "การประมวลผลข้อมูลปริมาณมาก", "ระบบที่ทำงาน 24/7 ได้"],
      en: ["Collecting data from multiple sources", "Accurate warning system", "Processing large volumes of data", "24/7 system availability"],
    },
    solutions: {
      th: ["ใช้ Data Integration และ ETL Process", "พัฒนาอัลกอริทึม Machine Learning", "ใช้ Big Data Processing และ Analytics", "ใช้ High Availability และ Redundancy"],
      en: ["Implemented Data Integration and ETL Process", "Developed Machine Learning algorithms", "Used Big Data Processing and Analytics", "Applied High Availability and Redundancy"],
    },
    results: {
      th: ["ปรับปรุงความแม่นยำของการพยากรณ์ 90%", "ลดเวลาการตอบสนองต่อภัยพิบัติ 60%", "เพิ่มประสิทธิภาพการบริหารน้ำ 45%", "ลดความเสียหายจากน้ำท่วม 35%"],
      en: ["Improved forecast accuracy by 90%", "Reduced disaster response time by 60%", "Increased water management efficiency by 45%", "Reduced flood damage by 35%"],
    },
    images: {
      main: "/portfolio/EGAT.webp",
      gallery: ["/portfolio/EGAT.webp", "/portfolio/EGAT.webp", "/portfolio/EGAT.webp"],
      thumbnail: "/portfolio/EGAT.webp",
    },
    testimonial: {
      text: {
        th: "ระบบติดตามสถานการณ์น้ำช่วยให้เราสามารถบริหารจัดการทรัพยากรน้ำได้อย่างมีประสิทธิภาพมากขึ้น",
        en: "The water monitoring system has enabled us to manage water resources much more efficiently.",
      },
      author: "คุณวิศวกร น้ำใส",
      position: "Water Resource Manager",
      company: "กฟผ.",
    },
  },
  {
    id: "4",
    slug: "gpo-pharmacy-system",
    title: {
      th: "ระบบองค์การเภสัชกรรม",
      en: "Government Pharmaceutical Organization System",
    },
    description: {
      th: "พัฒนาระบบจัดการองค์การเภสัชกรรมที่ครอบคลุมการจัดการสินค้ายา การกระจายยา และระบบติดตามคุณภาพยา รวมถึงระบบรายงานการใช้ยาในระดับประเทศ",
      en: "Developed a comprehensive Government Pharmaceutical Organization system covering pharmaceutical inventory management, drug distribution, and drug quality tracking, including national drug usage reporting.",
    },
    shortDescription: {
      th: "ระบบจัดการเภสัชกรรมระดับประเทศ",
      en: "National pharmaceutical management system",
    },
    category: "system",
    client: "องค์การเภสัชกรรม",
    year: 2024,
    duration: "16 months",
    teamSize: 12,
    status: "completed",
    technologies: [
      { name: "Node.js", icon: "/tool/nodejs.webp", category: "backend" },
      { name: "React", icon: "/tool/React.png", category: "frontend" },
      { name: "PostgreSQL", icon: "/tool/PostgreSQL.webp", category: "database" },
      { name: "Next.js", icon: "/tool/nextjs.webp", category: "frontend" },
      { name: "Docker", icon: "/tool/Docker.png", category: "cloud" },
      { name: "Kubernetes", icon: "/tool/kubernetes.webp", category: "cloud" },
    ],
    features: {
      th: ["ระบบจัดการคลังยาแบบครบวงจร", "ระบบติดตามการกระจายยา", "ระบบควบคุมคุณภาพยา", "ระบบรายงานการใช้ยาแห่งชาติ", "ระบบจัดการใบสั่งยา", "ระบบเฝ้าระวังยาปลอม"],
      en: ["Comprehensive pharmaceutical warehouse management", "Drug distribution tracking system", "Drug quality control system", "National drug usage reporting", "Prescription management system", "Counterfeit drug surveillance"],
    },
    challenges: {
      th: ["การจัดการข้อมูลยาจำนวนมหาศาล", "ระบบติดตามที่ซับซ้อน", "การรับประกันคุณภาพและความปลอดภัย", "การเชื่อมต่อกับโรงพยาบาลทั่วประเทศ"],
      en: ["Managing massive pharmaceutical data", "Complex tracking system", "Ensuring quality and safety", "Connecting with hospitals nationwide"],
    },
    solutions: {
      th: ["ใช้ Big Data และ Data Warehousing", "พัฒนา Blockchain สำหรับการติดตาม", "ใช้ GMP และ Quality Management System", "สร้าง API Integration Hub"],
      en: ["Implemented Big Data and Data Warehousing", "Developed Blockchain for tracking", "Applied GMP and Quality Management System", "Created API Integration Hub"],
    },
    results: {
      th: ["ปรับปรุงประสิทธิภาพการกระจายยา 70%", "ลดการสูญเสียยา 50%", "เพิ่มความแม่นยำในการติดตาม 95%", "ลดเวลาการรายงาน 80%"],
      en: ["Improved drug distribution efficiency by 70%", "Reduced drug loss by 50%", "Increased tracking accuracy by 95%", "Reduced reporting time by 80%"],
    },
    images: {
      main: "/portfolio/GPO.webp",
      gallery: ["/portfolio/GPO.webp", "/portfolio/GPO.webp", "/portfolio/GPO.webp"],
      thumbnail: "/portfolio/GPO.webp",
    },
    testimonial: {
      text: {
        th: "ระบบองค์การเภสัชกรรมช่วยให้เราสามารถจัดการยาและเฝ้าระวังคุณภาพยาได้อย่างมีประสิทธิภาพมากขึ้น",
        en: "The pharmaceutical system has enabled us to manage drugs and monitor drug quality much more efficiently.",
      },
      author: "คุณเภสัชกร ปลอดภัย",
      position: "System Director",
      company: "องค์การเภสัชกรรม",
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
