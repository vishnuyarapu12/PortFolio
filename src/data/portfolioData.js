export const personalInfo = {
  name: "Vishnu Yarapu",
  fullName: "YARAPU VISHNUVARDHAN",
  title: "Software Developer | Full-Stack & AI/ML Enthusiast",
  roles: [
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "Software Engineer",
    "Java Developer",
    "Problem Solver"
  ],
  bio: "Information Technology engineering student passionate about building scalable web applications, AI-powered solutions, and practical software systems. I enjoy working across frontend, backend, databases, cloud technologies, and AI/ML to turn ideas into useful products.",
  aboutDetailed: [
    "I am an Information Technology engineering student with a deep passion for building practical, high-impact software systems. My core interest lies at the intersection of modern full-stack web architectures and intelligent AI/ML solutions.",
    "Through hands-on engineering, I have developed full-scale applications spanning responsive React frontends, robust Python (FastAPI/Flask) and Node.js backends, relational databases with MySQL, computer vision with TensorFlow/Keras, and real-time LLM integrations like Google Gemini.",
    "I approach software with strong curiosity, disciplined problem-solving, and a dedication to writing clean, maintainable, and scalable code."
  ],
  location: "Hyderabad, India",
  email: "vishnuyarapu.dev@gmail.com", // easily customizable
  github: "https://github.com/vishnuyarapu12",
  leetcode: "https://leetcode.com/u/vishnu_yarapu6/",
  linkedin: "https://linkedin.com/in/vishnu-yarapu", // placeholder
  resumeUrl: "/resume.pdf",
  stats: [
    { label: "Engineering GPA", value: "8.16", suffix: "/10" },
    { label: "Core Projects", value: "4+", suffix: "Built" },
    { label: "Tech Stack", value: "20+", suffix: "Tools" },
    { label: "Continuous", value: "100%", suffix: "Driven" }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Core languages for systems, algorithmic problem solving & web applications",
    skills: [
      { name: "Java", level: "Advanced", badge: "Core & OOP", iconName: "coffee" },
      { name: "Python", level: "Advanced", badge: "ML & Backend", iconName: "terminal" },
      { name: "JavaScript", level: "Advanced", badge: "ES6+ & Async", iconName: "file-code" },
      { name: "C", level: "Intermediate", badge: "Systems", iconName: "cpu" },
      { name: "C++", level: "Intermediate", badge: "DSA & STL", iconName: "binary" },
    ]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Modern, responsive, dynamic and accessible client-side interfaces",
    skills: [
      { name: "React", level: "Proficient", badge: "Hooks & SPA", iconName: "atom" },
      { name: "Vite", level: "Proficient", badge: "Build Tool", iconName: "zap" },
      { name: "Tailwind CSS", level: "Proficient", badge: "Modern Styling", iconName: "wind" },
      { name: "HTML5", level: "Expert", badge: "Semantic Web", iconName: "file-text" },
      { name: "CSS3", level: "Advanced", badge: "Flex/Grid/Anim", iconName: "palette" },
      { name: "JavaScript (DOM)", level: "Advanced", badge: "Interactive UI", iconName: "code" },
    ]
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    description: "High-performance server runtimes, RESTful APIs, and microservices",
    skills: [
      { name: "FastAPI", level: "Proficient", badge: "Async Python", iconName: "rocket" },
      { name: "Node.js", level: "Proficient", badge: "Runtime", iconName: "server" },
      { name: "Express.js", level: "Proficient", badge: "API Framework", iconName: "network" },
      { name: "Flask", level: "Proficient", badge: "Micro-framework", iconName: "box" },
      { name: "REST APIs", level: "Advanced", badge: "Architecture", iconName: "globe" },
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    description: "Deep learning models, CNNs, generative AI, and intelligent APIs",
    skills: [
      { name: "TensorFlow", level: "Applied", badge: "Deep Learning", iconName: "cpu" },
      { name: "Keras", level: "Applied", badge: "Neural Nets", iconName: "layers" },
      { name: "CNN & MobileNetV2", level: "Applied", badge: "Vision / Transfer", iconName: "eye" },
      { name: "Generative AI", level: "Applied", badge: "LLM Systems", iconName: "sparkles" },
      { name: "Google Gemini API", level: "Proficient", badge: "Multimodal AI", iconName: "bot" },
      { name: "Speech-to-Text (STT)", level: "Applied", badge: "Voice AI", iconName: "mic" },
      { name: "Text-to-Speech (TTS)", level: "Applied", badge: "Audio Synthesis", iconName: "volume-2" },
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    description: "Structured data storage, querying optimization, and schema design",
    skills: [
      { name: "MySQL", level: "Proficient", badge: "RDBMS", iconName: "database" },
      { name: "SQL", level: "Advanced", badge: "Complex Queries", iconName: "table" },
    ]
  },
  {
    category: "Cloud, DevOps & Tools",
    icon: "Cloud",
    description: "Containerization, cloud deployments, version control, and build pipelines",
    skills: [
      { name: "Git", level: "Advanced", badge: "VCS", iconName: "git-branch" },
      { name: "GitHub", level: "Advanced", badge: "Collaboration", iconName: "github" },
      { name: "Docker", level: "Familiar", badge: "Containers", iconName: "container" },
      { name: "AWS S3", level: "Familiar", badge: "Cloud Storage", iconName: "cloud" },
      { name: "Vercel", level: "Proficient", badge: "Deployment", iconName: "triangle" },
      { name: "Render", level: "Proficient", badge: "Web Services", iconName: "activity" },
      { name: "Maven / Gradle", level: "Intermediate", badge: "Java Builds", iconName: "package" },
    ]
  },
  {
    category: "Architecture & Other",
    icon: "Cpu",
    description: "Industry patterns, progressive web applications, and security fundamentals",
    skills: [
      { name: "PWA", level: "Proficient", badge: "Offline & Service Worker", iconName: "smartphone" },
      { name: "API Integration", level: "Advanced", badge: "Third-party APIs", iconName: "plug" },
      { name: "JWT & Auth", level: "Proficient", badge: "Web Security", iconName: "shield-check" },
      { name: "Responsive Design", level: "Expert", badge: "Mobile First", iconName: "monitor" },
    ]
  }
];

export const projectsData = [
  {
    id: "agriverse",
    title: "AgriVerse — AI-Powered Agricultural Advisory Platform",
    shortTitle: "AgriVerse",
    tagline: "Intelligent farming assistant with computer vision crop disease detection and multimodal advisory.",
    featured: true,
    category: "AI / ML & Full-Stack",
    github: "https://github.com/vishnuyarapu12/AgriVerse",
    liveDemo: null, // Ready for deployment link
    description: "AgriVerse is a comprehensive AI-powered agricultural advisory platform designed to assist farmers with real-time crop disease diagnosis, climate insights, and automated agronomic recommendations. Combining a responsive React frontend with a high-speed Python FastAPI backend, it utilizes TensorFlow/Keras MobileNetV2 transfer learning for precision disease detection and Google Gemini API for context-aware multilingual advisory.",
    keyFeatures: [
      "Crop Disease Detection: MobileNetV2 CNN model trained for rapid leaf visual inference and disease classification",
      "Multimodal Advisory: Integrated Google Gemini API delivering contextual, step-by-step treatment guidance",
      "Multilingual Voice Assistance: Speech-to-Text (STT) and Text-to-Speech (TTS) integration for accessible farmer interaction",
      "Climate & Weather Forecasts: Real-time meteorological data integration for precision irrigation and harvest scheduling",
      "PWA Architecture: Lightweight offline-ready web application designed for low-bandwidth rural environments"
    ],
    technologies: [
      "React",
      "FastAPI",
      "Python",
      "TensorFlow",
      "Keras",
      "MobileNetV2",
      "Google Gemini API",
      "REST APIs",
      "PWA",
      "Tailwind CSS"
    ],
    metrics: [
      { label: "Backend", val: "FastAPI Async" },
      { label: "Vision Model", val: "MobileNetV2 CNN" },
      { label: "AI Engine", val: "Google Gemini" },
      { label: "Client", val: "React + PWA" }
    ],
    accentColor: "from-emerald-500/20 via-cyan-500/20 to-blue-600/20"
  },
  {
    id: "volley",
    title: "VolleyTrack — Smart Volleyball Presence Network",
    shortTitle: "VolleyTrack",
    tagline: "Real-time geolocation presence tracking, match readiness meter, and interactive court map.",
    featured: false,
    category: "Full-Stack Web & Geolocation",
    github: "https://github.com/vishnuyarapu12/Volley",
    liveDemo: null,
    description: "VolleyTrack is a specialized real-time presence tracking and team management web application built with a React frontend and Python Flask backend. It calculates exact player distances to the home volleyball court using the Haversine GPS algorithm, maintains live match readiness thresholds (Practice vs. Full Match), renders an interactive tile map, and features an auto-rotating player photo carousel.",
    keyFeatures: [
      "Live GPS Proximity Tracking: Real-time browser geolocation tracking with distance thresholds (At Ground, Nearby, Away)",
      "Match Readiness Meter: Automated status indicator dynamically tracking practice (6+ players) and full match (10+ players) readiness",
      "Interactive Court Map: Multi-layer map (Dark, Satellite, Hybrid) displaying ground geo-fence markers and active players",
      "Player Showcase Carousel: Smooth auto-rotating player photo gallery with custom display names and photo upload",
      "Player Profiles & Attendance: Attendance streak tracker, visit counters, and arrival logging"
    ],
    technologies: [
      "React",
      "Python",
      "Flask",
      "Geolocation API",
      "Haversine Algorithm",
      "Tailwind CSS",
      "PWA",
      "REST APIs"
    ],
    metrics: [
      { label: "Architecture", val: "React + Flask" },
      { label: "Geo Engine", val: "Haversine Math" },
      { label: "Map Views", val: "Dark / Sat / Hybrid" },
      { label: "Platform", val: "Installable PWA" }
    ],
    accentColor: "from-blue-600/20 via-cyan-500/20 to-indigo-600/20"
  },
  {
    id: "video-summarizer",
    title: "AI Video Summarizer — Intelligent Video Transcription & Briefs",
    shortTitle: "AI Video Summarizer",
    tagline: "Automated speech-to-text transcription and generative AI semantic video condensation.",
    featured: false,
    category: "AI / ML & Video Processing",
    github: "https://github.com/vishnuyarapu12/VIDEO-SUMMARIZER",
    liveDemo: null,
    description: "An AI-powered video summarization application engineered to eliminate the manual overhead of watching long-form educational and technical videos. It automates audio stream extraction, leverages high-accuracy speech-to-text models for transcription, and executes semantic summarization to extract executive briefs, timestamped milestones, and bulleted takeaways.",
    keyFeatures: [
      "Audio Stream Ingestion: Automated extraction and preprocessing of audio tracks from video files",
      "Speech-to-Text Pipeline: High-fidelity speech recognition producing timestamped transcripts",
      "Intelligent Summarization: Generative AI semantic analysis condensing long recordings into executive summaries",
      "Key Takeaway Extraction: Automated extraction of action items, core concepts, and key definitions",
      "Modern Web UI: Clean dark-themed dashboard allowing quick media upload and transcript export"
    ],
    technologies: [
      "Python",
      "FastAPI / Flask",
      "Speech-to-Text",
      "LLM API",
      "Video Processing",
      "JavaScript",
      "Tailwind CSS"
    ],
    metrics: [
      { label: "Core Task", val: "Audio/Video AI" },
      { label: "Transcription", val: "Speech-to-Text" },
      { label: "Summary", val: "Generative AI" },
      { label: "Output", val: "Actionable Briefs" }
    ],
    accentColor: "from-cyan-500/20 via-sky-500/20 to-blue-600/20"
  },
  {
    id: "intellichat",
    title: "IntelliChat — AI-Powered Conversational Assistant",
    shortTitle: "IntelliChat",
    tagline: "Real-time AI conversational interface with custom personality presets and markdown rendering.",
    featured: false,
    category: "AI / Full-Stack Interface",
    github: "https://github.com/vishnuyarapu12/Intellichat",
    liveDemo: null,
    description: "IntelliChat is a modern, responsive conversational AI application designed for smooth real-time dialogue. Built with a sleek dark cyber interface, it integrates AI endpoints to handle multi-turn conversational context, provides code syntax formatting, and allows seamless user prompting across desktop and mobile devices.",
    keyFeatures: [
      "Conversational AI Interface: Intuitive chat layout with real-time prompt-response streaming and history",
      "Rich Content Formatting: Markdown parsing with syntax highlighting for code snippets and formatted lists",
      "Session & State Management: Clean client-side conversation state keeping chat flow responsive",
      "Adaptive Cyber Aesthetics: Dark glassmorphic design optimized for night-time developer usage",
      "Cross-Platform Responsive: Smooth fluid layout across smartphones, tablets, and wide monitors"
    ],
    technologies: [
      "React",
      "JavaScript",
      "LLM API Integration",
      "REST APIs",
      "Tailwind CSS",
      "Modern UI / UX"
    ],
    metrics: [
      { label: "Frontend", val: "React SPA" },
      { label: "AI Integration", val: "LLM API" },
      { label: "Formatting", val: "Markdown & Code" },
      { label: "Design", val: "Cyber Dark Mode" }
    ],
    accentColor: "from-indigo-600/20 via-blue-500/20 to-cyan-500/20"
  }
];

export const experienceJourney = [
  {
    year: "2026",
    title: "AI/ML Systems & Intelligent Applications",
    subtitle: "Advanced Deep Learning & Multimodal Integration",
    badge: "Current Focus",
    description: "Deepening practical engineering in applied machine learning, computer vision (CNNs, MobileNetV2), and multimodal generative AI. Architected end-to-end AI applications like AgriVerse and AI Video Summarizer with FastAPI and Google Gemini.",
    highlights: [
      "TensorFlow/Keras model deployment and transfer learning",
      "Multimodal AI integration using Google Gemini API",
      "High-throughput asynchronous backends with FastAPI",
      "Speech-to-text and real-time audio processing pipelines"
    ]
  },
  {
    year: "2025–2026",
    title: "Full-Stack Software Engineering",
    subtitle: "Modern Web Architectures & RESTful Systems",
    badge: "Architecture & Scale",
    description: "Engineered scalable full-stack web applications utilizing React, Node.js, Python (FastAPI/Flask), and MySQL. Focused on real-time data flows, progressive web apps (PWAs), and geolocation algorithms.",
    highlights: [
      "Production-ready React SPA development with Vite & Tailwind CSS",
      "Database schema modeling, indexing, and SQL optimization with MySQL",
      "Geolocation processing algorithms (Haversine math in VolleyTrack)",
      "PWA service worker caching and offline-ready architectures"
    ]
  },
  {
    year: "2025",
    title: "Salesforce Developer Agentblazer Champion Program",
    subtitle: "SmartBridge | Salesforce | AICTE Virtual Internship",
    badge: "Internship & Program",
    description: "Completed an intensive 8-week virtual developer program recognized by SmartBridge, Salesforce, and AICTE. Mastered enterprise cloud development, backend Apex programming, and modern UI components.",
    highlights: [
      "Enterprise backend business logic implementation with Apex",
      "Component-driven modular frontend with Lightning Web Components (LWC)",
      "Salesforce cloud data architecture, triggers, and SOQL queries",
      "Earned official Trailhead badges, developer credentials and superbadges"
    ]
  }
];

export const certificationsData = [
  {
    title: "Salesforce Developer Agentblazer Champion Program",
    issuer: "SmartBridge • Salesforce • AICTE",
    type: "8-Week Virtual Internship / Developer Program",
    period: "2025",
    description: "Comprehensive enterprise software engineering program focusing on cloud architecture, Apex backend logic, and Lightning Web Components (LWC).",
    skillsLearned: ["Apex", "Lightning Web Components (LWC)", "SOQL", "Trailhead Superbadges", "Enterprise Cloud Architecture"],
    verified: true
  }
];

export const educationData = {
  institution: "Vidya Jyothi Institute of Technology (VJIT)",
  degree: "Bachelor of Technology (B.Tech)",
  field: "Information Technology",
  gpa: "8.16 / 10.0",
  status: "Undergraduate Engineering Student",
  focusAreas: [
    "Data Structures & Algorithms (DSA)",
    "Object-Oriented Programming (Java/Python/C++)",
    "Database Management Systems (MySQL/SQL)",
    "Operating Systems & Computer Networks",
    "Machine Learning & Artificial Intelligence",
    "Web Technologies & Software Engineering"
  ]
};

export const codingProfiles = [
  {
    platform: "GitHub",
    username: "vishnuyarapu12",
    url: "https://github.com/vishnuyarapu12",
    badge: "Active Repositories",
    description: "Open-source projects spanning AI/ML, Full-Stack applications, computer vision, and geolocation tools.",
    highlights: ["AgriVerse (FastAPI + AI)", "VolleyTrack (GPS Presence)", "Video Summarizer", "IntelliChat"],
    icon: "github"
  },
  {
    platform: "LeetCode",
    username: "vishnu_yarapu6",
    url: "https://leetcode.com/u/vishnu_yarapu6/",
    badge: "Problem Solving",
    description: "Consistent practice in algorithmic problem solving, data structures, dynamic programming, and systems logic.",
    highlights: ["Java & C++ Problem Solving", "Arrays, Strings, Trees & Graphs", "Algorithmic Efficiency", "Clean OOP Principles"],
    icon: "code"
  }
];
