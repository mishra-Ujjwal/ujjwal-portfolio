import {
  Boxes,
  BrainCircuit,
  Code2,
  Database,
  ExternalLink,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  MonitorSmartphone,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
  Zap
} from "lucide-react";

export const profile = {
  name: "Ujjwal Mishra",
  role: "Full Stack Developer / MERN / Frappe / UI Engineer",
  tagline: "I build premium digital products that feel fast, modern, and unforgettable.",
  email: "ujjwalmishra9717@gmail.com",
  location: "India",
  socials: [
    { label: "GitHub", handle: "@ujjwalmishra", href: "https://github.com/mishra-Ujjwal", icon: Github },
    { label: "LinkedIn", handle: "/in/ujjwalmishra", href: "https://www.linkedin.com/in/ujjwalmishra7/", icon: Linkedin },
    { label: "Projects", handle: "Selected launches", href: "#projects", icon: Globe2 }
  ]
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const aboutCards = [
  { metric: "MERN", label: "Production stack", detail: "React, Node, MongoDB, REST APIs, dashboards" },
  { metric: "Frappe", label: "ERP systems", detail: "ERPNext customization, doctypes, workflows, reports" },
  { metric: "UI", label: "Frontend craft", detail: "Cinematic interfaces, motion, responsive product UX" }
];

export const skills = [
  {
    category: "Frontend",
    icon: MonitorSmartphone,
    items: ["React", "Vite", "HTML", "Tailwind CSS", "GSAP", "JavaScript", "Responsive UI"]
  },
  {
    category: "Backend",
    icon: ServerCog,
    items: ["Node.js", "Express", "REST APIs", "Auth", "Business Logic", "Frappe"]
  },
  {
    category: "Database",
    icon: Database,
    items: ["MongoDB", "MySQL", "PostgreSQL", "Schema Design", "Queries"]
  },
  {
    category: "Tools",
    icon: TerminalSquare,
    items: ["Git", "Github", "Postman", "Docker", "AWS", "VS Code"]
  }, 
  {
    category: "Deployment",
    icon: Rocket,
    items: ["Render", "Netlify", "Nginx", "CI-ready Apps", "Optimization"]
  }
];

export const projects = [
  {
    title: "Wedding Bureau Management System",
    eyebrow: "Lead full-stack build",
    summary: "A premium CRM-style platform for matchmaking workflows, lead tracking, user profiles, and admin operations.",
    problem: "Manual bureau operations were scattered across calls, spreadsheets, and disconnected records.",
    impact: "Centralized profiles, improved follow-ups, and made daily operations searchable and trackable.",
    tech: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript (ES6+)",
    "REST API",
    "JWT Authentication",
    "bcrypt.js",
    "Cloudinary",
    "Multer",
    "Axios",
    "Nodemailer",
    "Git",
    "GitHub",
    "Render"
  ],
    accent: "teal",
    links: [

      { label: "GitHub", href: "https://github.com/" }
    ],
    image:"/wedding-project.png",
  },
  {
    title: "Smart Restaurant Management System",
    eyebrow: "Operational dashboard",
    summary: "Restaurant admin experience for orders, menus, billing flow, table status, and staff-friendly control panels.",
    problem: "Restaurant teams needed faster order visibility and fewer manual coordination gaps.",
    impact: "Reduced operational friction with a clean command center for key restaurant workflows.",
    tech: ["MERN", "Dashboard UI", "API", "MongoDB", "Auth"],
    accent: "ember",
    image:"/restaurant.png",
    links: [
      { label: "Live Demo", href: "https://eatrio.onrender.com/", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/", icon: Github }
    ]
  },
  {
    title: "Taja Thela",
    eyebrow: "Commerce concept",
    summary: "Fresh-market web product concept focused on quick browsing, category clarity, and lightweight commerce flows.",
    problem: "Local fresh goods need a faster digital browsing path without heavy marketplace complexity.",
    impact: "Created a direct, mobile-friendly interface that keeps discovery and ordering simple.",
    tech: ["React", "Tailwind", "Node", "UI Systems", "Mobile UX"],
    accent: "volt",
    links: [
      { label: "Live Demo", href: "https://tajathela-wy9b.onrender.com/", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/", icon: Github }
    ],
    image:"/tajathela.png",
  },
  {
  title: "CRM / HRMS / Frappe Modules",
  eyebrow: "ERP engineering",
  summary: "Building custom Frappe and ERPNext modules for approvals, employee management, reporting, and workflow automation.In Progress (Launching Soon)",
  problem: "Business teams needed flexible, scalable internal systems instead of rigid, one-size-fits-all workflows.",
  impact: "Currently developing a streamlined system focused on role-based access, automated processes, and intuitive reporting. Expected to significantly improve operational efficiency.",
  tech: [
    "Frappe",
    "ERPNext",
    "React",
    "Python",
    "MariaDB",
    "JavaScript",
    "REST APIs",
    "Role-Based Access Control (RBAC)",
    "Workflow Automation",
    "Custom Reports"
  ],
  accent: "steel",
  links: [

  ],
  image: "/erp.png"
}
];

export const timeline = [
  {
    year: "Dec 2025 – Present",
    title: "Full Stack Developer Intern – Extension Technologies",
    type: "Experience",
    detail: "Building CRM/HRMS systems using Frappe with custom modules, workflows, and admin dashboards. Developed 5+ core modules, automated approval flows reducing manual effort by ~30%, and implemented role-based access for multi-level teams."
  },
  {
    year: "Sept 2025 – Oct 2025",
    title: "Frontend Developer Intern – ShadowFox",
    type: "Internship",
    detail: "Delivered 10+ responsive UI components and improved page load and usability. Collaborated on real client requirements, reducing UI inconsistencies and improving user interaction flow."
  },
  {
    year: "Feb 2025 – July 2025",
    title: "Full Stack Development Certification – Sheriyans Coding School",
    type: "Certification",
    detail: "Built 6+ full-stack projects using MERN, including authentication systems, dashboards, and APIs. Gained hands-on experience with database design, REST APIs, and deployment workflows."
  },
  {
    year: "2024",
    title: "Advanced Full Stack & System Design",
    type: "Growth",
    detail: "Designed and developed 3+ production-style systems including admin panels and workflow-driven dashboards, focusing on scalability, UI polish, and clean architecture."
  },
  
  {
    year: "2023",
    title: "Frontend Systems Foundation",
    type: "Journey",
    detail: "Created 10+ responsive web pages and transitioned into component-based architecture with modern UI practices and basic animations."
  }
];

export const services = [
  { title: "Full Stack Web Apps", icon: Layers3, copy: "End-to-end products with clean frontends, APIs, auth, databases, and deployment-ready structure." },
  { title: "SaaS Dashboards", icon: Boxes, copy: "Dense, elegant control panels for operations, analytics, teams, and business workflows." },
  { title: "CRM / ERP / HRMS Systems", icon: Workflow, copy: "Custom modules, approvals, records, reports, and Frappe/ERPNext-driven internal tools." },
  { title: "Modern Frontend UI", icon: Sparkles, copy: "Premium interfaces with responsive layouts, motion systems, and conversion-aware hierarchy." },
  { title: "API / Backend Development", icon: Network, copy: "Reliable REST APIs, database models, role flows, integrations, and maintainable service logic." },
  { title: "Performance Polish", icon: Zap, copy: "UI refinement, animation tuning, Lighthouse-minded cleanup, and smooth mobile behavior." }
];

export const achievements = [
  { value: 12, suffix: "+", label: "Project modules delivered", icon: Code2 },
  { value: 5, suffix: "+", label: "Production-grade stacks", icon: BrainCircuit },
  { value: 3, suffix: "+", label: "Certifications & workshops", icon: ShieldCheck },
  { value: 100, suffix: "%", label: "Product-minded execution", icon: Sparkles }
];
