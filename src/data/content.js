/**
 * ============================================================
 *  EDIT EVERYTHING HERE
 * ------------------------------------------------------------
 *  This is the single source of truth for all website content.
 *  Change your name, photo, services, skills, projects, etc.
 *  No need to touch the components.
 * ============================================================
 */

/** Resolves a file in /public against the deploy base path. */
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

export const profile = {
  name: "Shiena Jarabe",
  shortName: "Shiena Jarabe",
  // Shown under your name in the nav and footer
  title: "Licensed Customs Broker",
  // Small badge above the hero headline
  badge: "LICENSED CUSTOMS BROKER · LOGISTICS VA",
  // The hero headline. Set `headlineAccent` to the part you want highlighted
  // in orange — it must appear at the end of `headline`.
  headline: "Logistics support with a customs broker's eye for detail.",
  headlineAccent: "a customs broker's eye for detail.",
  subheadline:
    "I handle the tracking, documentation, and coordination that keep freight moving — backed by formal training in customs and trade compliance.",
  tagline:
    "Helping logistics teams stay organized, responsive, and on schedule.",

  // Drop your own photo at: public/images/profile.png
  // `asset()` prefixes the deploy base path so images resolve both locally
  // and on GitHub Pages (which serves from a /repo-name/ subpath).
  photo: asset("images/profile.png"),
  // Secondary photo used in the About section (can be the same file)
  photoSecondary: asset("images/profile.png"),

  trustIndicators: [
    "Licensed Customs Broker (LCB)",
    "Logistics & Operations Support",
    "Remote & Reliable",
  ],
};

export const contact = {
  email: "mjarabe1418@gmail.com",
  linkedin: "https://www.linkedin.com/in/mary-shiena-jarabe-lcb-0150a9295/",
  location: "Philippines — Available for remote work",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/** Floating cards around the hero portrait */
export const heroCards = [
  { title: "Shipment Tracking", status: "Updated", icon: "Truck" },
  { title: "Documentation", status: "Organized", icon: "FileSpreadsheet" },
  { title: "Customer Support", status: "Responded", icon: "MessageSquare" },
];

export const about = {
  eyebrow: "About Me",
  headline: "Your Behind-the-Scenes Logistics Support.",
  paragraphs: [
    "I'm a licensed customs broker with hands-on experience across freight forwarding, customs, and brokerage — including process work at DHL Global Forwarding, training at the Bureau of Customs — Port of Batangas, and a rotation through import, export, warehouse, and customer service at a freight forwarder. That background shapes how I work: documentation has to be right the first time, because in customs a missing signature or a wrong classification code costs real money and real days.",
    "Day to day, I handle the work that keeps freight moving — tracking shipments and updating statuses, maintaining clean records, organizing shipping documents, and following up with carriers and customers before small delays turn into escalations.",
    "I plug into the tools your team already uses and keep the updates short and clear. Whether you need steady daily support or extra coverage during peak season, the goal is the same: fewer things for you to chase.",
  ],
  stats: [
    { value: null, display: "LCB", label: "Licensed", sublabel: "Customs Broker" },
    { value: 3, suffix: "", label: "Roles", sublabel: "Forwarding, Customs & Brokerage" },
    { value: null, display: "Remote", label: "Available", sublabel: "Across Time Zones" },
  ],
};

export const services = {
  eyebrow: "Services",
  headline: "How I Can Support Your Operations",
  intro:
    "Focused support across the administrative and coordination work that keeps logistics teams on schedule.",
  items: [
    {
      number: "01",
      icon: "Truck",
      title: "Shipment Tracking",
      description:
        "Tracking shipments, updating statuses, monitoring ETAs, and keeping records accurate.",
    },
    {
      number: "02",
      icon: "Database",
      title: "Logistics Data Entry",
      description:
        "Accurate entry and maintenance of shipment, order, customer, and transportation data.",
    },
    {
      number: "03",
      icon: "FileText",
      title: "Documentation",
      description:
        "Organizing invoices, bills of lading, proof of delivery, shipping documents, and other logistics paperwork.",
    },
    {
      number: "04",
      icon: "Headphones",
      title: "Customer & Carrier Communication",
      description:
        "Professional communication with customers, carriers, drivers, and logistics partners.",
    },
    {
      number: "05",
      icon: "CalendarClock",
      title: "Scheduling & Admin Support",
      description:
        "Coordinating pickups, deliveries, and appointments — plus email management, spreadsheets, reporting, and file organization.",
    },
    {
      number: "06",
      icon: "ShieldCheck",
      title: "Customs & Trade Documentation",
      description:
        "Reviewing and organizing import/export paperwork with a licensed customs broker's understanding of what each document needs to contain.",
    },
  ],
};

export const toolkit = {
  eyebrow: "Toolkit",
  headline: "My Logistics Toolkit",
  note: "Comfortable adapting to the tools and systems your team already uses.",
  // `logo` maps to a mark in src/components/BrandLogos.jsx.
  // Available keys: excel, sheets, workspace, office, outlook, slack, zoom,
  // trello, asana, gmail, drive, tms, crm, customs.
  // Only list tools you genuinely work with.
  tools: [
    { name: "Microsoft Excel", logo: "excel" },
    { name: "Google Sheets", logo: "sheets" },
    { name: "Google Workspace", logo: "workspace" },
    { name: "Microsoft Office", logo: "office" },
    { name: "Gmail", logo: "gmail" },
    { name: "Outlook", logo: "outlook" },
    { name: "Google Drive", logo: "drive" },
    { name: "Slack", logo: "slack" },
    { name: "Zoom", logo: "zoom" },
    { name: "Trello", logo: "trello" },
    { name: "TMS Platforms", logo: "tms" },
    { name: "Customs Systems", logo: "customs" },
  ],
};

export const skills = {
  eyebrow: "Skills",
  headline: "What I Bring to Your Team",
  groups: [
    {
      title: "Logistics & Customs",
      icon: "Truck",
      accent: "accent",
      items: [
        "Customs Documentation",
        "Import / Export Papers",
        "Shipment Tracking",
        "Carrier Communication",
        "Delivery Scheduling",
        "ETA Monitoring",
      ],
    },
    {
      title: "Administrative",
      icon: "ClipboardList",
      accent: "teal",
      items: [
        "Data Entry",
        "Spreadsheet Management",
        "Email Management",
        "File Organization",
        "Reporting",
        "Calendar Management",
      ],
    },
    {
      title: "Professional",
      icon: "Award",
      accent: "navy",
      items: [
        "Attention to Detail",
        "Communication",
        "Time Management",
        "Problem Solving",
        "Organization",
        "Reliability",
      ],
    },
  ],
};

export const workflow = {
  eyebrow: "Process",
  headline: "How I Keep Your Operations Organized",
  steps: [
    {
      number: "01",
      icon: "Inbox",
      title: "Receive",
      description:
        "Understand the task, shipment, request, or operational requirement.",
    },
    {
      number: "02",
      icon: "FolderTree",
      title: "Organize",
      description: "Collect information and organize it clearly.",
    },
    {
      number: "03",
      icon: "CheckCircle2",
      title: "Execute",
      description: "Complete the task accurately and efficiently.",
    },
    {
      number: "04",
      icon: "Send",
      title: "Update",
      description: "Keep clients and teams informed with clear updates.",
    },
  ],
};

export const whyMe = {
  eyebrow: "Why Work With Me",
  headline: "Reliable Support. Organized Operations. Less Stress.",
  paragraph:
    "The goal is straightforward: make your daily logistics operations easier by handling important tasks accurately and consistently. When tracking is current, documents are filed, and customers get answers on time, your team spends less time chasing information and more time moving freight.",
  benefits: [
    {
      icon: "ScanSearch",
      title: "Detail-Oriented",
      description:
        "Records are checked before they are filed. Small errors get caught before they become delayed shipments.",
    },
    {
      icon: "Clock",
      title: "Reliable & Responsive",
      description:
        "Predictable turnaround times and clear communication, so you always know where a task stands.",
    },
    {
      icon: "Workflow",
      title: "Organized Workflow",
      description:
        "A consistent system for tracking, documentation, and follow-up that anyone on your team can pick up.",
    },
    {
      icon: "Handshake",
      title: "Easy to Work With",
      description:
        "I adapt to your tools and processes, ask the right questions early, and keep updates short and useful.",
    },
  ],
};

export const experience = {
  eyebrow: "Experience",
  headline: "My Experience",
  items: [
    {
      period: "2026",
      role: "BWS — Process Associate",
      company: "DHL Global Forwarding · Full-time",
      location: "Philippines · On-site",
      current: false,
      responsibilities: [
        "Freight forwarding process support",
        "Shipment documentation and data encoding",
        "Records accuracy and validation",
        "Coordination with internal teams",
      ],
    },
    {
      period: "Nov 2024 – Jan 2025",
      role: "Internship Trainee",
      company: "Bureau of Customs · Port of Batangas",
      location: "Batangas, Calabarzon · On-site",
      current: false,
      responsibilities: [
        "Container inspections",
        "Report encoding",
        "Customs enforcement tasks",
        "Observed spot checks alongside field professionals",
      ],
    },
    {
      period: "Sep 2024 – Nov 2024",
      role: "Internship Trainee",
      company: "Pac-Atlantic Group",
      location: "Makati, NCR · On-site",
      current: false,
      responsibilities: [
        "Rotated across Customer Service, Import, Export, Warehouse, and Sales",
        "Shipping documentation",
        "Customs coordination",
        "Client relationship management",
      ],
    },
  ],
};

export const cta = {
  eyebrow: "Get In Touch",
  headline: "Ready to Make Your Logistics Operations Easier?",
  subheadline:
    "Let's talk about how I can support your team with reliable logistics and administrative assistance.",
};

export const footer = {
  links: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  year: 2026,
};
