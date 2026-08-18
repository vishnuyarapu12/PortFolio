export const personalInfo = {
  name: "Vishnu Yarapu",
  fullName: "YARAPU VISHNUVARDHAN",
  title: "Full-Stack Developer | Software Engineer | AI/ML Enthusiast",
  roles: [
    "Full-Stack Developer",
    "Software Engineer",
    "Python & Java Developer",
    "AI/ML Enthusiast",
    "Problem Solver"
  ],
  bio: "Enthusiastic Full Stack Developer with a strong understanding of frontend and backend technologies. Passionate about building scalable web applications, machine learning solutions, and continuously learning emerging technologies.",
  aboutDetailed: [
    "I am an Information Technology graduate from Vidya Jyothi Institute of Technology (8.21 CGPA) with a passion for engineering scalable, real-world software applications.",
    "My hands-on experience includes developing full-stack applications with React, Node.js, Python (FastAPI/Flask), relational databases with MySQL, machine learning models (TensorFlow/CNN), and LLM/NLP integrations with Whisper API and Groq (LLaMA).",
    "I continuously sharpen my problem-solving skills across Java, C, Python, JavaScript, and modern cloud deployment tools like Git, GitHub, Vercel, and Render."
  ],
  location: "Hyderabad, India",
  email: "vishnuyarapu6@gmail.com",
  phone: "+91 9014327768",
  github: "https://github.com/vishnuyarapu12",
  leetcode: "https://leetcode.com/u/vishnu_yarapu6/",
  linkedin: "https://linkedin.com/in/yarapu-vishnuvardhan",
  resumeUrl: "/resume.pdf",
  stats: [
    { label: "Engineering CGPA", value: "8.21", suffix: "/10" },
    { label: "Core Projects", value: "4+", suffix: "Built" },
    { label: "Technologies", value: "15+", suffix: "Tools" },
    { label: "Status", value: "B.Tech", suffix: "Graduate" }
  ]
};

export const skillsData = [
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Core languages for software development, systems, and algorithmic problem solving",
    skills: [
      { name: "Java", level: "Advanced", badge: "Core & OOP", iconName: "coffee" },
      { name: "Python", level: "Advanced", badge: "ML & Backend", iconName: "terminal" },
      { name: "JavaScript", level: "Advanced", badge: "ES6+ & Async", iconName: "file-code" },
      { name: "C", level: "Intermediate", badge: "Systems & DSA", iconName: "cpu" },
      { name: "SQL", level: "Proficient", badge: "Database Queries", iconName: "database" },
    ]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Modern, responsive, dynamic and accessible client-side interfaces",
    skills: [
      { name: "React", level: "Proficient", badge: "Hooks & SPA", iconName: "atom" },
      { name: "JavaScript", level: "Advanced", badge: "DOM & Fetch", iconName: "code" },
      { name: "HTML5", level: "Expert", badge: "Semantic Web", iconName: "file-text" },
      { name: "CSS3", level: "Advanced", badge: "Flex/Grid/Anim", iconName: "palette" },
      { name: "Tailwind CSS", level: "Proficient", badge: "Responsive UI", iconName: "wind" },
    ]
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    description: "Server runtimes, RESTful APIs, and asynchronous services",
    skills: [
      { name: "Node.js", level: "Proficient", badge: "Runtime", iconName: "server" },
      { name: "FastAPI", level: "Proficient", badge: "Async Python API", iconName: "rocket" },
      { name: "Python Backend", level: "Proficient", badge: "Microservices", iconName: "box" },
      { name: "REST APIs", level: "Advanced", badge: "API Integration", iconName: "globe" },
    ]
  },
  {
    category: "Databases",
    icon: "Database",
    description: "Structured relational data modeling and querying",
    skills: [
      { name: "MySQL", level: "Proficient", badge: "RDBMS", iconName: "database" },
      { name: "SQL Queries", level: "Advanced", badge: "Relational Design", iconName: "table" },
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: "Brain",
    description: "Deep learning models, CNNs, generative AI, speech recognition and NLP",
    skills: [
      { name: "Machine Learning", level: "Applied", badge: "TensorFlow", iconName: "cpu" },
      { name: "CNN Models", level: "Applied", badge: "Crop Disease Detection", iconName: "eye" },
      { name: "Whisper API", level: "Applied", badge: "Speech-to-Text", iconName: "mic" },
      { name: "Groq (LLaMA)", level: "Applied", badge: "NLP Summarization", iconName: "sparkles" },
      { name: "Google Gemini", level: "Applied", badge: "AI Advisory", iconName: "bot" },
    ]
  },
  {
    category: "Tools & Deployment Platforms",
    icon: "Cloud",
    description: "Version control, deployment pipelines, and developer environments",
    skills: [
      { name: "Git", level: "Advanced", badge: "Version Control", iconName: "git-branch" },
      { name: "GitHub", level: "Advanced", badge: "Collaboration & CI", iconName: "github" },
      { name: "Vercel", level: "Proficient", badge: "Frontend Deployment", iconName: "triangle" },
      { name: "Render", level: "Proficient", badge: "Backend Web Services", iconName: "activity" },
      { name: "Streamlit", level: "Proficient", badge: "Data / AI Apps", iconName: "package" },
      { name: "YouTubeTools", level: "Applied", badge: "Media Pipeline", iconName: "video" },
    ]
  }
];

export const projectsData = [
  {
    id: "farmer-advisory",
    title: "Farmer Query Support & Advisory System using ML (AgriVerse)",
    shortTitle: "Farmer Advisory System",
    tagline: "CNN-based crop disease detection, recommendations, and real-time farmer advisory platform.",
    featured: true,
    category: "AI / ML & Full-Stack",
    github: "https://github.com/vishnuyarapu12/AgriVerse",
    liveDemo: null,
    description: "Developed an AI-powered agricultural web application utilizing CNN-based machine learning models for crop disease detection and agronomic recommendations. Built a responsive frontend with React and a scalable backend using FastAPI and Python for real-time farmer query handling and advisory services.",
    keyFeatures: [
      "Crop Disease Detection: CNN-based neural network model for leaf visual inference and disease diagnosis",
      "FastAPI Backend: High-speed asynchronous Python server handling real-time farmer query routing",
      "Responsive React Frontend: Clean intuitive user interface designed for accessible agricultural consultation",
      "Multimodal AI Advisory: Integrated advisory recommendations to support decision-making for farmers",
      "Machine Learning Pipeline: TensorFlow integration with structured preprocessing and inference"
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "CNN",
      "Machine Learning (TensorFlow)",
      "MySQL",
      "REST APIs"
    ],
    metrics: [
      { label: "Backend", val: "FastAPI / Python" },
      { label: "Model", val: "CNN (TensorFlow)" },
      { label: "Frontend", val: "React SPA" },
      { label: "Domain", val: "Agri-Tech AI" }
    ]
  },
  {
    id: "video-summarizer",
    title: "AI Video Summarizer — Speech-to-Text & NLP Insights",
    shortTitle: "AI Video Summarizer",
    tagline: "Automated Whisper speech-to-text conversion and NLP summarization using Groq (LLaMA).",
    featured: false,
    category: "AI / NLP & Video Processing",
    github: "https://github.com/vishnuyarapu12/VIDEO-SUMMARIZER",
    liveDemo: null,
    description: "Built an AI-powered video summarization tool to automatically extract key insights from video content. Implemented Whisper API for accurate speech-to-text conversion and applied NLP techniques for concise summarization. Developed an end-to-end system using React and Python to process videos, generate summaries, and enhance user accessibility.",
    keyFeatures: [
      "Speech-to-Text Conversion: Whisper API integration producing high-fidelity audio transcription",
      "NLP Summarization: Groq (LLaMA) powered semantic analysis extracting executive briefs and key takeaways",
      "Video Track Preprocessing: Seamless media parsing and YouTubeTools integration",
      "Streamlit & React UI: Responsive developer dashboard allowing instant upload and summary export",
      "Accessibility Focused: Enables rapid comprehension of long-form educational and technical lectures"
    ],
    technologies: [
      "React",
      "Python",
      "Streamlit",
      "Groq (LLaMA)",
      "Whisper API",
      "YouTubeTools",
      "Tailwind CSS"
    ],
    metrics: [
      { label: "Transcription", val: "Whisper API" },
      { label: "NLP Engine", val: "Groq (LLaMA)" },
      { label: "Frontend", val: "React / Streamlit" },
      { label: "Output", val: "Concise Insights" }
    ]
  },
  {
    id: "volley",
    title: "VolleyTrack — Smart Volleyball Presence Network",
    shortTitle: "VolleyTrack",
    tagline: "Real-time presence tracking, Haversine GPS proximity meter, and team management.",
    featured: false,
    category: "Full-Stack Web & Geolocation",
    github: "https://github.com/vishnuyarapu12/Volley",
    liveDemo: null,
    description: "Real-time volleyball team attendance and presence tracking web application built with a React frontend and Python Flask backend. Implements the Haversine GPS algorithm to track player distance from the court, live match readiness thresholds (Practice vs. Match), and an interactive court map.",
    keyFeatures: [
      "Live GPS Proximity Tracking: Real-time browser geolocation updates with distance thresholds",
      "Match Readiness Meter: Automated indicator for practice (6+) and full match (10+) thresholds",
      "Interactive Court Map: Multi-tile layers with geo-fence markers and active players",
      "Player Showcase: Rotating player gallery with custom display names and photo upload"
    ],
    technologies: [
      "React",
      "Python",
      "Node.js",
      "Geolocation API",
      "MySQL",
      "Tailwind CSS"
    ],
    metrics: [
      { label: "Architecture", val: "React + Python" },
      { label: "Geo Engine", val: "Haversine Math" },
      { label: "Database", val: "MySQL" },
      { label: "Design", val: "Responsive UI" }
    ]
  },
  {
    id: "intellichat",
    title: "IntelliChat — AI Conversational Assistant",
    shortTitle: "IntelliChat",
    tagline: "Real-time conversational interface with markdown formatting and clean cyber UI.",
    featured: false,
    category: "AI / Frontend Interface",
    github: "https://github.com/vishnuyarapu12/Intellichat",
    liveDemo: null,
    description: "An AI-powered conversational application featuring a responsive dark-mode cyber interface, real-time message streaming, and markdown parsing with syntax highlighting for code snippets.",
    keyFeatures: [
      "Conversational Interface: Real-time dialogue with state management",
      "Rich Content Formatting: Markdown parsing and code block highlighting",
      "Responsive Dark UI: High-performance interface for desktop and mobile"
    ],
    technologies: [
      "React",
      "JavaScript",
      "REST APIs",
      "Tailwind CSS",
      "Modern UI/UX"
    ],
    metrics: [
      { label: "Client", val: "React SPA" },
      { label: "Formatting", val: "Markdown & Code" },
      { label: "Design", val: "Dark Theme" },
      { label: "Platform", val: "Vercel Deploy" }
    ]
  }
];

export const experienceJourney = [
  {
    year: "2022 – 2026",
    title: "B.Tech in Information Technology",
    subtitle: "Vidya Jyothi Institute of Technology • Graduated (8.21 CGPA)",
    badge: "B.Tech Graduate",
    description: "Completed undergraduate degree in Information Technology with an 8.21 CGPA. Mastered Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks, and Machine Learning.",
    highlights: [
      "Maintained an 8.21 CGPA across the engineering curriculum",
      "Built major capstone projects in Machine Learning and Full-Stack Web Development",
      "Mastered Java, Python, C, JavaScript, and MySQL relational database systems",
      "Earned recognized industry certifications from Cisco and GeeksForGeeks"
    ]
  },
  {
    year: "2025",
    title: "Salesforce Developer Agentblazer Champion Program",
    subtitle: "SmartBridge | Salesforce | AICTE Virtual Internship",
    badge: "Virtual Internship",
    description: "Completed an intensive 8-week virtual developer program covering Salesforce cloud architecture, Apex backend logic, and Lightning Web Components (LWC).",
    highlights: [
      "Enterprise backend business logic development with Apex",
      "Modular component UI design with Lightning Web Components (LWC)",
      "Database queries with SOQL and Salesforce platform fundamentals"
    ]
  }
];

export const certificationsData = [
  {
    title: "Python Certification",
    issuer: "Cisco",
    type: "Industry Certification",
    period: "Verified",
    description: "Certified proficiency in Python programming fundamentals, data structures, and object-oriented programming.",
    skillsLearned: ["Python", "OOP", "Data Structures", "Scripting"],
    verified: true
  },
  {
    title: "C++ Certification",
    issuer: "Cisco",
    type: "Industry Certification",
    period: "Verified",
    description: "Certified proficiency in C++ systems programming, memory management, and algorithmic problem solving.",
    skillsLearned: ["C++", "Pointers", "Memory Management", "Algorithms"],
    verified: true
  },
  {
    title: "Java Certification",
    issuer: "GeeksForGeeks",
    type: "Industry Certification",
    period: "Verified",
    description: "Certified competence in Core Java, Object-Oriented Architecture, Collections framework, and Multithreading.",
    skillsLearned: ["Java", "OOP Design", "Collections Framework", "Problem Solving"],
    verified: true
  },
  {
    title: "Salesforce Developer Agentblazer Champion Program",
    issuer: "SmartBridge • Salesforce • AICTE",
    type: "Virtual Internship Program",
    period: "2025",
    description: "Enterprise software engineering program focusing on Salesforce Cloud, Apex backend logic, and Lightning Web Components.",
    skillsLearned: ["Apex", "Lightning Web Components (LWC)", "SOQL", "Cloud Architecture"],
    verified: true
  }
];

export const educationData = [
  {
    institution: "Vidya Jyothi Institute of Technology",
    degree: "B.Tech in Information Technology",
    location: "Hyderabad, India",
    period: "2022 – 2026",
    score: "8.21 / 10.0 CGPA",
    status: "Graduated",
    isPrimary: true,
    focusAreas: [
      "Data Structures & Algorithms (Java / C / C++)",
      "Database Management Systems (MySQL / SQL)",
      "Machine Learning & Artificial Intelligence (Python / TensorFlow)",
      "Web Technologies (React / JavaScript / Node.js)",
      "Operating Systems & Computer Networks"
    ]
  },
  {
    institution: "TSMS & Junior College",
    degree: "Intermediate (MPC — Mathematics, Physics, Chemistry)",
    location: "Namapur, India",
    period: "2020 – 2022",
    score: "74.9%",
    status: "Completed",
    isPrimary: false,
    focusAreas: ["Mathematics", "Physics", "Chemistry"]
  },
  {
    institution: "TSMS & Junior College",
    degree: "Secondary School Certificate (SSC)",
    location: "Namapur, India",
    period: "2020",
    score: "9.8 / 10.0 GPA",
    status: "Completed",
    isPrimary: false,
    focusAreas: ["General Science", "Mathematics", "Social Studies"]
  }
];

export const codingProfiles = [
  {
    platform: "GitHub",
    username: "vishnuyarapu12",
    url: "https://github.com/vishnuyarapu12",
    badge: "Active Repositories",
    description: "Open-source projects spanning AI/ML, Full-Stack applications, computer vision, and NLP summarization.",
    highlights: ["Farmer Advisory System (FastAPI + ML)", "AI Video Summarizer (Whisper + Groq)", "VolleyTrack (GPS Presence)", "IntelliChat"],
    icon: "github"
  },
  {
    platform: "LeetCode",
    username: "vishnu_yarapu6",
    url: "https://leetcode.com/u/vishnu_yarapu6/",
    badge: "Problem Solving",
    description: "Algorithmic problem-solving practice in Java, C, and Python covering data structures and efficient time complexity.",
    highlights: ["Java & C Problem Solving", "Arrays, Strings, Trees & Sorting", "Algorithmic Efficiency", "Clean OOP Principles"],
    icon: "code"
  }
];
