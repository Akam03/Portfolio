/*
 * ============================================================
 *  EDIT THIS FILE — all of your portfolio content lives here.
 * ============================================================
 *  Delete any item you don't need; empty sections are hidden
 *  automatically.
 */
window.PORTFOLIO = {
  name: "Akampreet Singh Sandhu",
  role: "Full-Stack Engineer — Backend Systems & API Design",
  tagline:
    "I build enterprise features end to end — from SQL schema and APIs to the interface — with a focus on performance at scale.",
  location: "Gurgaon, Haryana, India",
  email: "akampreetsandhu03@gmail.com",
  resumeUrl: "assets/Akampreet_Singh_Sandhu_Resume.pdf", // e.g. "assets/resume.pdf" — leave empty to hide the button
  photo: "assets/photo.jpg", // e.g. "assets/photo.jpg" — leave empty to show your initials

  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/akampreet-singh-089150192" },
    // { label: "GitHub", url: "https://github.com/your-username" },
  ],

  about: [
    "I’m a full-stack engineer at Publicis, where I work on Starscape, a media planning and execution platform handling large volumes of transactional data. I like owning a whole slice of a feature — the database, the API, and the screen — because it lets me solve a problem wherever it actually lives instead of handing it off at a layer boundary.",
    "Most of my work sits on the backend: tuning SQL Server, designing modular APIs, and keeping high-volume modules fast and maintainable. I care about writing things the next engineer can follow without me in the room — a habit that comes partly from running a tuition centre on the side, where if you can’t explain something simply, you don’t really understand it yet.",
    "I graduated in Software Engineering from Delhi Technological University in 2024 and am now looking for remote roles where I can own more and keep growing.",
  ],

  highlights: [
    { value: "2+ yrs", label: "Building production systems" },
    { value: "Up to 70%", label: "Query execution time cut" },
    { value: "Millions", label: "Of records managed with partitioning & archival" },
    { value: "B.Tech", label: "Software Engineering, DTU" },
  ],

  skills: [
    { group: "Languages", items: ["C#", "C++", "JavaScript"] },
    { group: "Backend & APIs", items: ["ASP.NET", "Web API", "REST API design"] },
    { group: "Frontend", items: ["AngularJS", "HTML5", "CSS3", "Bootstrap"] },
    { group: "Databases", items: ["SQL Server", "T-SQL", "MySQL", "MongoDB"] },
    {
      group: "Performance & data",
      items: ["Query optimization", "Indexing", "Table partitioning", "Data archival", "Stored procedures"],
    },
    { group: "Cloud & tooling", items: ["Azure Blob Storage", "Git", "CI/CD", "Visual Studio"] },
    {
      group: "Fundamentals",
      items: ["Data Structures & Algorithms", "OOP", "System Design", "DBMS"],
    },
  ],

  experience: [
    {
      title: "Associate L1, General Technology",
      company: "Publicis Resources",
      period: "May 2024 — Present",
      location: "",
      achievements: [
        "Owned the Media Placement feature end to end: SQL schema and taxonomy, stored procedures, C# API/manager layers, AngularJS screens across Planning and Execution, and client-facing PDF templates wired into a metadata-driven report engine.",
        "Diagnosed and fixed a production slowdown on a core screen by inlining a scalar UDF’s logic that was blocking parallelism and index seeks — part of query work cutting execution time up to 70% on large datasets.",
        "Migrated attachment storage from an on-prem file server to Azure Blob Storage across five modules (Plan, Deal, Deviation, Credit Note, Client Invoice).",
        "Built an automated vendor-invoice reminder system (SQL Agent jobs + Database Mail) that queues orders, resolves recipients by priority rules, and sends scheduled reminders — cutting manual follow-up.",
        "Implemented role-based navigation and Quick Search features, improving record-access speed and reducing navigation time significantly.",
      ],
    },
  ],

  projects: [],

  education: [
    {
      degree: "B.Tech, Software Engineering",
      school: "Delhi Technological University (DTU)",
      period: "2020 — 2024",
      highlights: [
        "JEE Main 2020 — All India Rank 6922 (top percentile nationwide)",
        "Joint Cultural Secretary, Engifest Cultural Council — led a 1,000+ volunteer team across 100+ colleges",
      ],
    },
  ],

  interests: [
    { emoji: "⚽", name: "Football", description: "Represented at SGFI National and State tournaments." },
    {
      emoji: "🎮",
      name: "Gaming",
      description: "FIFA, GTA, God of War and Ghost of Tsushima on PS5.",
    },
  ],
};
