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
    title: "HRMS, Vendor & Expense Platform (Apotsa.com)",
    eyebrow: "Multi-tenant platform",
    summary: "Multi-tenant HRMS covering onboarding, attendance, leave, payroll, payslips, and expense claims, with vendor management (onboarding, purchase orders, invoices, payments) integrated into the same approval workflows.",
    problem: "HR, finance, and vendor processes ran in separate tools with disconnected approvals.",
    impact: "RBAC across five roles, real-time notifications via Socket.IO, and Redis caching with PostgreSQL indexing to keep dashboards fast under concurrent load.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "Socket.IO"],
    accent: "teal",
    links: [
      { label: "Live Demo", href: "https://apotsa.com", icon: ExternalLink }
    ],
    image: "/apotsa.png"
  },
  {
    title: "AI-Powered CA Firm Platform",
    eyebrow: "Accounting automation",
    summary: "Centralized dashboard for CA firms to manage clients, documents, compliance, and tasks.",
    problem: "CA firms handled client data, invoices, and GST checks manually across disconnected tools.",
    impact: "Tally sync via a secure desktop sync mechanism for multiple companies, plus AI-based OCR invoice processing and GST reconciliation (GSTR-2A/2B mismatch detection).",
    tech: ["React.js", "Node.js", "Tally", "OCR"],
    accent: "volt",
    links: [],
    image: "/ca-firm.svg"
  },
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
    title: "Software Developer – Extension Technologies Pvt. Ltd., Faridabad",
    type: "Full-Time",
    detail: "Deliver client projects end-to-end in a cross-functional team, covering CRM (Zoho), in-house ERP, and HRMS solutions. Design dashboards, approval workflows, and custom reports for sales, HR, finance, and operations teams."
  },
  {
    year: "Jun 2025 – Nov 2025",
    title: "Software Developer Intern – Extension Technologies Pvt. Ltd., Faridabad",
    type: "Internship",
    detail: "Worked on CRM implementation and customization, including Zoho CRM, alongside in-house ERP and HRMS solutions. Built a personal CRM using React.js, Express.js, and PostgreSQL. Contributed to client projects by developing features, fixing bugs, and supporting deployments."
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
