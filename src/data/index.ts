import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];


export const workExperience =
  [
    {
      id: 1,
      title: "Freelancer",
      place: "",
      year: "Dec 2019 - Present",
      client: "-",
      task: [],
      category: "freelance",
      desc: "Developed various applications using diverse technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 2,
      title: "Bootcamp Java Developer",
      place: "",
      year: "Dec 2019 - Jun 2020",
      client: "PT Xsis Mitra Utama",
      task: ["Bootcamp as a java developer"],
      category: "bootcamp",
      desc: "Bootcamp as a java developer.",
      className: "md:col-span-2",
      thumbnail: "-",
    },
    {
      id: 3,
      title: "Frontend Developer",
      place: "PT. AZEC Indonesia Management Service",
      client:
        "PT Xsis Mitra Utama, placement at PT AZEC Indonesia Management Service",
      year: "Jul 2020 - Jun 2021",
      task: [
        "Developed several dashboard applications using Golang, AngularJS, and Docker as containers for the applications.",
        "Enhanced new features on existing dashboards using Java.",
        "Created API services using Golang as the programming language on the server side, with PostgreSQL as the database"
      ],
      category: "work",
      desc: "Developed dashboards with Golang, AngularJS, Docker, and created APIs using Golang and PostgreSQL.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",

    },
    {
      id: 4,
      title: "Middleware Developer",
      place: "PT Bank Rakyat Indonesia (Persero) Tbk",
      client: "PT Xsis Mitra Utama, placement at PT Bank Rakyat Indonesia",
      year: "Jul 2021 - Jul 2023",
      task: [
        "Created RestAPI service in ESB to integrate the requirements between BRI channels and third-party entities.",
        "Integrated applications with various formats such as JSON, ISO, and WSDL.",
        "Developed stored procedures in SQL Server.",
        "Acted as a dedicated middleware programmer for the BRI insurance platform (BRISURF).",
        "Designed the system's application flow, created API specification documentation, and conducted testing.",
        "Developed dashboard applications using React.js and Express.js.",
        "Conducted problem-solving and monitored services using Kibana.",
        "Implemented technologies such as Redis, Kafka, Elasticsearch, Bitbucket, and Bamboo."
      ],
      category: "work",
      desc: "Built RestAPIs in ESB, integrated systems, and developed dashboards with React.js and Express.js.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",

    },

    {
      id: 5,
      title: "IT Specialist - Application Development",
      place: "PT Xsys Solusi Cemerlang",
      client: "PT Xsys Solusi Cemerlang",
      year: "Dec 2023 - Jun 2024",
      task: [
        "Develop, testing, analysis custom APP for integration filenet IBM to client's existing app (Mandiri utama finance) with java springboot",
        "Develop fullstack aplication ecommerce xsys mobilink with next js as a frontend and laravel as a backend",
        "Design UI/UX lokerlink 2.0 with figma",
        "Get to know IBM products"
      ],
      category: "work",
      desc: "Developed IBM integration apps with Java Springboot, e-commerce with Next.js and Laravel, and designed UI/UX.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    }
  ]

export const skills = {
  webApps: {
    frontend: [
      "HTML / CSS",
      "Javascript / Typescript",
      "React Js",
      "Angular JS",
      "Dart (Flutter)",
      "Kotlin"
    ],
    backend: [
      "Node Js (Express / Nest / Hono)",
      "PHP (Laravel)",
      "Golang",
      "Java (Spring Boot)",
    ],
    others: [
      "MySQL",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Elastic Search",
      "Redis",
      "AWS EC2",
      "Kafka"
    ],
  },
  mobileApps: {
    frameworks: ["Kotlin", "Dart (Flutter)"],
  }
}
export const socialMedia = [
  {
    id: 1,
    platform: "github",
    icn: FaGithub,
    link: "https://github.com/fahminurcahya",
    username: "fahminurcahya"
  },
  {
    id: 2,
    platform: "linkedin",
    icn: FaLinkedin,
    link: "https://www.linkedin.com/in/fahmi-nurcahya-117056153",
    username: "fahminurcahya"
  },
  {
    id: 3,
    platform: "instagram",
    icn: FaInstagram,
    link: "https://www.instagram.com/fahminurcahya",
    username: "@fahminurcahya"
  },
]

export type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  client: string;
  year: string;
  pathName: string;
  url: string;
  technology: string[];
  img: string[];
  type: "project" | "course" | "others";
  features: string[];
};

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Ticketing",
    description:
      "This is a project for e-ticketing for participants of the funwalk and funrun organized by Kementrian Investasi/BKPM in order to commemorate the 50th anniversary",
    category: "Project",
    client: "Kementrian Investasi/BKPM",
    year: "2023",
    pathName: "e-ticketing",
    url: "The URL is no longer available",
    technology: ["Node Js (Express Js)", "Mysql", "Nginx"],
    img: ["/images/bkpm/1.png", "/images/bkpm/2.png"],
    type: "project",
    features: [
      "Participant registration for funwalk and funrun",
      "Send Email (registration success notification and ticket)",
      "Participant login page to display barcode and participant information",
      "List table of all participants",
      "Committee/administrator login",
      "Scan barcode & verify data",
    ],
  },
  {
    id: 2,
    title: "Full-Stack JavaScript Developer: Website Travel",
    description: "Application for booking places for holidays",
    category: "Web Apps",
    client: "Online Course - Build with Angga",
    year: "2022",
    pathName: "staycation",
    url: "-",
    technology: ["Node Js (Express Js)", "React Js", "MongoDB"],
    img: [
      "/images/staycation/1.png",
      "/images/staycation/2.png",
      "/images/staycation/3.png",
    ],
    type: "course",
    features: [
      "Dashboard backoffice (management product, transaction)",
      "Book a place",
    ],
  },
  {
    id: 3,
    title:
      "Bootcamp Full-Stack Website Developer: Website Doctor Appointment",
    description:
      "Application for appointments along with a dashboard for data management",
    category: "Web Apps",
    client: "Online Course - Build with Angga",
    year: "2023",
    pathName: "appointment",
    url: "-",
    technology: ["PHP (Laravel 8)", "MySQl"],
    img: [
      "/images/appointment/1.png",
      "/images/appointment/2.png",
      "/images/appointment/3.png",
    ],
    type: "course",
    features: [
      "Dashboard backoffice (management user, master data, operational)",
      "Create appointment",
    ],
  },
  {
    id: 4,
    title:
      "Flutter App Developer: Make a Tinder Application to Find a Match",
    description:
      "A multi-platform application like Tinder and implementing bloc as state management",
    category: "Mobile Apps",
    client: "Online Course - Build with Angga",
    year: "2023",
    pathName: "sarangapps",
    url: "-",
    technology: ["Flutter"],
    type: "course",
    img: [
      "/images/tinder/1.png",
      "/images/tinder/2.png",
      "/images/tinder/3.png",
    ],
    features: ["Login & Register", "Find & Add People"],
  },
  {
    id: 5,
    title: "Whatsapp Sitcker Apps",
    description:
      "Application for adding WhatsApp stickers and implementing several AdMob such as, interstitial, native and banner, this application is also integrated with Google Firebase analytics to analyze application users, there are many applications that have been published on Playstore and have more than 100k installers",
    category: "Mobile Apps",
    client: "My Project",
    year: "2020",
    pathName: "stickerwa",
    url: "https://play.google.com/store/search?q=pub%3Amiddleearth%20dev&c=apps&hl=id-ID",
    technology: ["Java", "Admob", "Firebase Analytics"],
    type: "project",
    img: [
      "/images/stickerwa/1.png",
      "/images/stickerwa/2.png",
      "/images/stickerwa/3.png",
    ],
    features: ["Add sticker packs to WhatsApp"],
  },
  {
    id: 6,
    title: "KasirBersama",
    description:
      "This is an online cashier application project built for product and point of sale management needs",
    category: "Mobile Apps",
    client: "My Project",
    year: "2020",
    pathName: "kasir",
    url: "-",
    technology: [
      "Kotlin",
      "PHP (Code Igniter)",
      "PHP (Lumen)",
      "MySql",
      "3rd party (midtrans)",
    ],
    img: ["/images/kasir/1.png", "/images/kasir/2.png"],
    type: "project",
    features: [
      "Web Dashboard",
      "Store Management",
      "Product Management",
      "Cashier Management",
      "Transaction Report (Pdf Export, Chart)",
      "Custom Receipt",
      "POS",
      "Print Receipt",
      "Premium application Subscription Package",
    ],
  },
  {
    id: 7,
    title: "Dart Programming to Prepare to Learn Flutter",
    description: "",
    category: "Basic programming language",
    client: "Online Course",
    year: "2023",
    pathName: "basic1",
    url: "",
    technology: ["Dart"],
    img: ["/images/course/1.png"],
    type: "course",
    features: [],
  },
  {
    id: 8,
    title: "Adobe Illustration: How To Create Icon For UI",
    description: "",
    category: "Basic Design",
    client: "Online Course",
    year: "2023",
    pathName: "basic2",
    url: "",
    technology: ["Adobe Ilustration"],
    img: ["/images/course/2.png"],
    type: "course",
    features: [],
  },
  {
    id: 9,
    title: "Learn Adobe Illustrator: How to Become a Design Artist",
    description: "",
    category: "Basic Design",
    client: "Online Course",
    year: "2023",
    pathName: "basic3",
    url: "",
    technology: ["Adobe Ilustration"],
    img: ["/images/course/3.png"],
    type: "course",
    features: [],
  },
  {
    id: 10,
    title: "CSS Website Design",
    description: "",
    category: "Basic programming language",
    client: "Online Course",
    year: "2023",
    pathName: "basic4",
    url: "",
    technology: ["CSS", "HTML"],
    img: ["/images/course/4.png"],
    type: "course",
    features: [],
  },
  {
    id: 11,
    title: "Website Undangan Digital (begather.id)",
    description: "",
    category: "Web Apps",
    client: "My Project",
    year: "2022",
    pathName: "invitation",
    url: "-",
    technology: ["PHP (Code Igniter)", "MySql"],
    img: [
      "/images/undangan/1.png",
      "/images/undangan/2.png",
      "/images/undangan/3.png",
    ],
    type: "project",
    features: [
      "Consumer Dashboard",
      "Visitor Report",
      "Import Guest Names",
      "Custom Template",
      "Send Whatsapp",
      "Bride/Groom Page",
      "Event Information",
      "Greetings Page",
      "Location/Google Maps Page",
      "Gallery/Album Page",
      "Story Page",
      "Digital Wallet Information",
    ],
  },
  {
    id: 12,
    title: "Website SSC Karawang",
    description: "",
    category: "Web Apps",
    client: "My Project",
    year: "2022",
    pathName: "ssc",
    url: "-",
    technology: ["PHP (Laravel)", "MySql"],
    img: ["/images/ssc/1.png", "/images/ssc/2.png"],
    type: "project",
    features: [
      "Company Profile",
      "Dashboard Admin/Teacher",
      "Manage Teacher",
      "Manage Class",
      "Manage Tryout Schedule",
      "Manage Tryout Questions",
      "Report Results Report",
      "Online Tryout PG/Essay",
    ],
  },
  {
    id: 13,
    title: "IBM Certification",
    description: "Guardium Data Protection Technical Sales Intermediate",
    category: "certification",
    client: " - ",
    year: "19 Feb 2024",
    pathName: "-",
    url: "-",
    technology: [],
    img: ["/cer/Guardium_Data_Protection_Technical_Sales_Intermediate_Badge20240222-31-w3zjtd.jpg"],
    type: "others",
    features: [],
  },
  {
    id: 14,
    title: "IBM Certification",
    description: "IBM Guardium Foundations",
    category: "certification",
    client: " - ",
    year: "20 Feb 2024",
    pathName: "-",
    url: "-",
    technology: [],
    img: ["/cer/IBM_Guardium_Foundations_Badge20240222-37-uyxjzj.jpg"],
    type: "others",
    features: [],
  },
  {
    id: 15,
    title: "IBM Certification",
    description: "Maximo Application Suite Sales Foundation",
    category: "certification",
    client: " - ",
    year: "22 Feb 2024",
    pathName: "-",
    url: "-",
    technology: [],
    img: ["/cer/Maximo_Application_Suite_Sales_Foundation_Badge20240222-29-m6ro38.jpg"],
    type: "others",
    features: [],
  },
  {
    id: 16,
    title: "IBM Certification",
    description: "Maximo Application Suite Technical Sales Intermediate",
    category: "certification",
    client: " - ",
    year: "22 Feb 2024",
    pathName: "-",
    url: "-",
    technology: [],
    img: ["/cer/Maximo_Application_Suite_Technical_Sales_Intermediate_Badge20240222-29-hf744f.jpg"],
    type: "others",
    features: [],
  },
  {
    id: 17,
    title: "IBM Certification",
    description: "Maximo Visual Inspection Technical Sales Intermediate",
    category: "certification",
    client: " - ",
    year: "22 Feb 2024",
    pathName: "-",
    url: "-",
    technology: [],
    img: ["/cer/Maximo_Visual_Inspection_Technical_Sales_Intermediate_Badge20240222-37-nimshs.jpg"],
    type: "others",
    features: [],
  },

  // Company profile ssc karawang,
  // Game Pengenalan huruf hijaiyah,
  // platform undangan digital,
  // kasir mobile
];

export const educations = [
  {
    title: "Bechelor of Informatic Engineering",
    university: "University Of Singaperbangsa Karawang",
    year: "2015-2019"
  }
]

export const profile = {
  name: "Fahmi Nurcahya",
  title: "Software Engineer",
  bio: "+4 years of experience as a software engineer, skilled in designing, developing, and managing efficient and reliable software solutions. I possess a deep understanding of modern programming languages, software architecture, and best practices in application development. I contribute to complex and high-quality software development projects that meet client needs, and I am committed to continuously learning and growing in the field of technology",
  map: "Karawang, Indonesia",
  mail: "fahminurcahya@gmail.com",
  whatsapp: "+6285718456591"
}






