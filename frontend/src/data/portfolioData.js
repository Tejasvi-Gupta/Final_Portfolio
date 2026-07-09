// ============================================================
//  portfolioData.js
//  Single source of truth — edit this file to update content
// ============================================================

export const personal = {
  name: "Tejasvi Gupta",
  tagline: "B.Tech · Computer Science & Engineering",
  subtitle:
    "A passionate CSE student exploring AI, Cloud, and Web — turning ideas into real-world tech solutions, one commit at a time.",
  photo: "Portfoolio_image.jpeg",        // place in /public
  status: "Open to internships",
  cgpa: "9.04",
  graduatingYear: "2028",
  resumeUrl: "#",                         // replace with your actual resume URL
  email: "tejasviigupta@gmail.com",       // replace with real email
  github: "https://github.com/Tejasvi-Gupta",
  linkedin: "https://www.linkedin.com/in/tejasvi-gupta08",
};

export const stats = [
  { num: "9.04", label: "Current CGPA" },
  { num: "2+",   label: "Years of coding" },
  { num: "3+",   label: "Projects built" },
  { num: "2028", label: "Graduating" },
];

export const aboutParagraphs = [
  `I'm <strong>Tejasvi Gupta</strong>, a B.Tech CSE student at <strong>KIET Deemed to Be University, Ghaziabad</strong>, currently in my 2nd year with a CGPA of 9.04.`,
  `I'm deeply passionate about <strong>Artificial Intelligence and emerging technologies</strong>. My focus areas span DevOps foundations, AWS & Google Cloud platforms, UI/UX design with Figma, full-stack web development, and competitive programming.`,
  `I believe in learning by building — whether it's an AI-powered tutor, a data visualization dashboard, or a real-world safety application. Always pushing my boundaries and open to meaningful collaboration.`,
];

export const focusTags = [
  "AI & ML Tools", "DevOps Foundations", "AWS Cloud",
  "Google Cloud", "UI/UX Design", "Web Development", "Competitive Coding",
];

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C++",        accent: true },
      { name: "Python",     accent: true },
      { name: "HTML / CSS", accent: false },
      { name: "JavaScript", accent: false },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS Cloud",    accent: true },
      { name: "Google Cloud", accent: true },
      { name: "Linux",        accent: false },
      { name: "Git Bash",     accent: false },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Figma",   accent: true },
      { name: "VS Code", accent: false },
      { name: "GitHub",  accent: false },
      { name: "Tableau", accent: false },
    ],
  },
];

export const skillBars = [
  { name: "C++ & Data Structures",  pct: 85 },
  { name: "Python & AI/ML tools",   pct: 78 },
  { name: "AWS Cloud foundations",  pct: 50 },
  { name: "Web development",        pct: 70 },
  { name: "Figma & UI/UX design",   pct: 68 },
  { name: "Linux & Git",            pct: 75 },
];

export const projects = [
  {
    id: "navrakshak",
    icon: "🛡️",
    type: "Safety & Navigation App",
    title: "NavRakshak",
    desc: 'A navigation and safety application — "Rakshak" meaning guardian. Built collaboratively to provide intelligent, safety-aware routing for real-world navigation needs.',
    stack: ["Python", "Collaborative"],
    liveUrl: null,
    githubUrl: "https://github.com/Subrat-Dwivedi-22/NavRakshak",
    colorClass: "proj-img-navrakshak",
  },
  {
    id: "tutor",
    icon: "🤖",
    type: "AI / EdTech",
    title: "Adaptive Learning Tutor",
    desc: "An AI-powered system that personalises educational content based on learner pace and performance, delivering a truly tailored study experience.",
    stack: ["Python", "AI / ML", "EdTech"],
    liveUrl: null,
    githubUrl: "https://github.com/Tejasvi-Gupta-08/Adaptive-learning-tutor",
    colorClass: "proj-img-tutor",
  },
  {
    id: "ev",
    icon: "⚡",
    type: "Data Visualisation · Web",
    title: "EV Charge & Range Analysis",
    desc: "An interactive analytics platform exploring India's EV market — state-wise adoption rates, market penetration, and growth trends via Tableau visualizations.",
    stack: ["Tableau", "Analytics", "Vercel", "HTML/CSS"],
    liveUrl: "https://visualizationtoolforevchargeandrang.vercel.app/",
    githubUrl: null,
    colorClass: "proj-img-ev",
  },
];

export const education = [
  {
    years: "2024 — Present",
    degree: "B.Tech in Computer Science & Engineering",
    school: "KIET Deemed to Be University, Ghaziabad",
    badge: "⭐ CGPA: 9.04 · 2nd Year, 4th Semester · 2028 Batch",
  },
  {
    years: "2021 — 2023",
    degree: "Class XII — Science (PCM + CS)",
    school: "Madhav Rao Scindia Public School",
    badge: "📊 88%",
  },
  {
    years: "Upto 2021",
    degree: "Class X",
    school: "Takshashila Public School",
    badge: "🏆 97.6%",
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services · Mar 2026",
    verifyUrl: "https://aws.amazon.com/verification",
    verifyLabel: "Verify credential ↗",
  },
  {
    name: "Networking Basics",
    issuer: "Cisco · 2025",
    verifyUrl: "https://www.credly.com/badges/8f49c4dc-b6d8-4759-998c-3382372ba3f9/linked_in_profile",
    verifyLabel: "View badge ↗",
  },
];

export const navLinks = [
  { label: "About",     href: "#about" },
  { label: "Skills",    href: "#skills" },
  { label: "Projects",  href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact",   href: "#contact" },
];
