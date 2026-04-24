import { Code2, Globe2, Layers3 } from "lucide-react";

export const projectsData = [
  {
    title: "CRM Lead Management",
    category: "Frappe + React CRM",
    description:
      "A modern CRM lead module rebuilt with React UI and connected directly with Frappe backend APIs.",
    image:
      "linear-gradient(135deg, rgba(11,13,16,0.16), rgba(11,13,16,0.75)), radial-gradient(circle at 22% 18%, rgba(75,227,193,0.42), transparent 30%), radial-gradient(circle at 82% 72%, rgba(255,92,53,0.30), transparent 32%), linear-gradient(160deg, #f3eee2, #d9d4c8 58%, #c3beaf)",
    tags: ["React", "Frappe", "REST API", "CRM"],
    problem: "The default CRM workflow felt limited and less modern for fast lead tracking.",
    role:
      "Designed and developed the frontend UI, API integration, lead listing, create/edit flow, filters, status handling, and backend connection.",
    features: [
      "Lead dashboard with counts",
      "Create and edit lead flow",
      "Backend-driven status and source fields",
      "Search and filtering",
      "Premium responsive UI"
    ],
    approach:
      "Built a React interface inside the Frappe environment, used reusable components, connected APIs with credentials and CSRF handling, and structured the module for future CRM expansion.",
    challenges: [
      "Handling Frappe CSRF token issues",
      "Fixing backend validation mismatch",
      "Fetching dynamic source/status values",
      "Keeping React routing stable inside Frappe"
    ],
    outcome:
      "A working modern CRM lead module that feels faster, cleaner, and ready for opportunity/customer module expansion.",
    summary:
      "A rebuilt lead engine with stronger usability, faster status handling, and a much more modern operator experience.",
    liveUrl: "#contact",
    codeUrl: "https://github.com/",
    badgeIcon: Layers3
  },
  {
    title: "HRMS Attendance System",
    category: "Business Workflow Platform",
    description:
      "A role-based attendance system with geofencing, check-in/check-out, manager visibility, and attendance correction flow.",
    image:
      "linear-gradient(135deg, rgba(11,13,16,0.18), rgba(11,13,16,0.78)), radial-gradient(circle at 74% 20%, rgba(215,255,114,0.34), transparent 30%), radial-gradient(circle at 18% 72%, rgba(75,227,193,0.28), transparent 34%), linear-gradient(160deg, #efe9db, #d7d0bf 58%, #bbb39f)",
    tags: ["React", "Node.js", "MongoDB", "HRMS"],
    problem:
      "Companies need accurate attendance logic connected with holidays, leaves, managers, and payroll.",
    role:
      "Designed module flow, UI, attendance rules, manager approval logic, and employee self-service experience.",
    features: [
      "Employee check-in/check-out",
      "Minimum working hour validation",
      "Half-day logic",
      "Manager approval flow",
      "Attendance issue raise system"
    ],
    approach:
      "Created role-based screens for employees, managers, HR admins, and super admins with business rules connected to attendance status.",
    challenges: [
      "Late check-in and half-day calculation",
      "Forgot check-in correction approval",
      "Manager-wise team visibility",
      "Holiday and leave impact on attendance"
    ],
    outcome: "A strong foundation for payroll-connected attendance management.",
    summary:
      "Attendance logic transformed into a cleaner, role-aware workflow that teams can actually trust every day.",
    liveUrl: "#contact",
    codeUrl: "https://github.com/",
    badgeIcon: Globe2
  },
  {
    title: "Smart Restaurant System",
    category: "SaaS Product",
    description:
      "A QR-based restaurant ordering platform where customers scan tables, order food, and restaurants manage menus and subscriptions.",
    image:
      "linear-gradient(135deg, rgba(11,13,16,0.14), rgba(11,13,16,0.8)), radial-gradient(circle at 28% 18%, rgba(255,92,53,0.38), transparent 28%), radial-gradient(circle at 84% 78%, rgba(75,227,193,0.28), transparent 34%), linear-gradient(160deg, #f1eadc, #d6ceb9 58%, #b5ad9b)",
    tags: ["MERN", "SaaS", "QR Ordering", "Dashboard"],
    problem:
      "Restaurants need a faster digital ordering flow without depending only on waiters.",
    role:
      "Planned and built product modules including restaurant onboarding, menu management, table QR flow, and customer ordering journey.",
    features: [
      "QR table ordering",
      "Restaurant dashboard",
      "Menu and category management",
      "Order tracking",
      "Subscription-ready architecture"
    ],
    approach:
      "Built the app as a multi-restaurant SaaS platform with clean dashboards and customer-friendly ordering flow.",
    challenges: [
      "Multi-restaurant data separation",
      "Simple customer ordering UX",
      "Real-time order status planning",
      "Subscription-based access design"
    ],
    outcome: "A practical SaaS product concept suitable for real restaurant operations.",
    summary:
      "A product-first restaurant platform balancing customer simplicity, operator control, and subscription-ready architecture.",
    liveUrl: "#contact",
    codeUrl: "https://github.com/",
    badgeIcon: Code2
  }
];
