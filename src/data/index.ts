export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];



export const workExperience =
  [
    {
      id: 1,
      title: "Freelancer",
      place: "",
      year: "Des 2019 - Present",
      task: [],
      category: "freelance",
      desc: "Developed various applications using diverse technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 2,
      title: "Frontend Developer",
      place: "PT. AZEC Indonesia Management Service",
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
      id: 3,
      title: "Middleware Developer",
      place: "PT Bank Rakyat Indonesia (Persero) Tbk",
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
      id: 4,
      title: "IT Specialist - Application Development",
      place: "PT Xsys Solusi Cemerlang",
      year: "Des 2023 - Jun 2024",
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
      "HTML5",
      "CSS",
      "Bootstrap",
      "Javascript",
      "Typescript",
      "ReactJs",
      "AngularJS (ES5/ES6)"
    ],
    backend: [
      "Node Js",
      "Express Js (ES5/ES6)",
      "PHP (Laravel)",
      "Golang",
      "Java (Spring Boot)",
      "Dart",
      "Flutter"
    ],
    databases: [
      "MySQL",
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Redis"
    ]
  },
  mobileApps: {
    frameworks: ["Dart", "Flutter"],
  }
}
export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
]

type Project = {
  title: string;
  description: string;
  category: string;
  client: string;
  year: string;
  pathName: string;
  url: string;
  technology: string[];
  img: string[];
  features: string[];
};

export const projects: Project[] = [
  {
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
    features: [
      "Dashboard backoffice (management product, transaction)",
      "Book a place",
    ],
  },
  {
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
    features: [
      "Dashboard backoffice (management user, master data, operational)",
      "Create appointment",
    ],
  },
  {
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
    img: [
      "/images/tinder/1.png",
      "/images/tinder/2.png",
      "/images/tinder/3.png",
    ],
    features: ["Login & Register", "Find & Add People"],
  },
  {
    title: "Whatsapp Sitcker Apps",
    description:
      "Application for adding WhatsApp stickers and implementing several AdMob such as, interstitial, native and banner, this application is also integrated with Google Firebase analytics to analyze application users, there are many applications that have been published on Playstore and have more than 100k installers",
    category: "Mobile Apps",
    client: "My Project",
    year: "2020",
    pathName: "stickerwa",
    url: "https://play.google.com/store/search?q=pub%3Amiddleearth%20dev&c=apps&hl=id-ID",
    technology: ["Java", "Admob", "Firebase Analytics"],
    img: [
      "/images/stickerwa/1.png",
      "/images/stickerwa/2.png",
      "/images/stickerwa/3.png",
    ],
    features: ["Add sticker packs to WhatsApp"],
  },
  {
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
    title: "Dart Programming to Prepare to Learn Flutter",
    description: "",
    category: "Basic programming language",
    client: "Online Course",
    year: "2023",
    pathName: "basic1",
    url: "",
    technology: ["Dart"],
    img: ["/images/course/1.png"],
    features: [],
  },
  {
    title: "Adobe Illustration: How To Create Icon For UI",
    description: "",
    category: "Basic Design",
    client: "Online Course",
    year: "2023",
    pathName: "basic2",
    url: "",
    technology: ["Adobe Ilustration"],
    img: ["/images/course/2.png"],
    features: [],
  },
  {
    title: "Learn Adobe Illustrator: How to Become a Design Artist",
    description: "",
    category: "Basic Design",
    client: "Online Course",
    year: "2023",
    pathName: "basic3",
    url: "",
    technology: ["Adobe Ilustration"],
    img: ["/images/course/3.png"],
    features: [],
  },
  {
    title: "CSS Website Design",
    description: "",
    category: "Basic programming language",
    client: "Online Course",
    year: "2023",
    pathName: "basic4",
    url: "",
    technology: ["CSS", "HTML"],
    img: ["/images/course/4.png"],
    features: [],
  },
  {
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
    title: "Website SSC Karawang",
    description: "",
    category: "Web Apps",
    client: "My Project",
    year: "2022",
    pathName: "ssc",
    url: "-",
    technology: ["PHP (Laravel)", "MySql"],
    img: ["/images/ssc/1.png", "/images/ssc/2.png"],
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

  // Company profile ssc karawang,
  // Game Pengenalan huruf hijaiyah,
  // platform undangan digital,
  // kasir mobile
];


