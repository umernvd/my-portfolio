import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Umer Naveed",
    title: "Software Engineer",
    phone: "+92-3044780586",
    email: "muhammadumernaveed1234@gmail.com",
    linkedin: "https://linkedin.com/in/umer-naveed",
    github: "https://github.com/umernvd",
    location: "Lahore, Pakistan"
  },
  skills: [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Zustand", "Responsive Web Design"]
    },
    {
      title: "Mobile",
      skills: ["Flutter", "Dart", "Provider", "Hive", "Firebase", "Offline-First Architecture", "Google Drive API"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "RESTful APIs", "JWT Authentication", "OAuth2", "Appwrite"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "SQL", "Firebase Firestore"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel"]
    },
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "Dart", "HTML5", "CSS3"]
    }
  ],
  projects: [
    {
      title: "Interview Pro – AI Powered Interview Management Platform",
      link: "https://github.com/umernvd/interview-pro",
      tech: ["Flutter", "Dart", "Next.js", "TypeScript", "Appwrite", "Google Drive API", "Hive"],
      description: [
        "Full-stack SaaS platform: Flutter mobile app for conducting and recording interviews plus Next.js web dashboard for managing interviewers, question banks, and candidate pipelines.",
        "Streamed large audio files to Google Drive via chunked HTTP requests, bypassing serverless payload limits.",
        "Gemini AI transcription cut candidate evaluation time by 40% across 50+ sessions."
      ]
    },
    {
      title: "ProFein – Full-Stack E-Commerce Platform",
      link: "https://github.com/umernvd/ProFein-Store",
      tech: ["Next.js", "TypeScript", "Node.js", "REST APIs", "Strapi", "Tailwind CSS"],
      description: [
        "Built a responsive, SEO-optimized e-commerce frontend using Next.js, improving page load speed by 40%.",
        "Integrated Strapi as headless CMS to manage products, orders, and user data dynamically.",
        "Implemented RESTful APIs for user authentication, product filtering, and checkout processes."
      ]
    },
    {
      title: "Diet Planner – Cross-Platform Fitness App",
      link: "https://github.com/umernvd/Diet-Planner-App",
      tech: ["Flutter", "Dart", "Firebase", "REST API"],
      description: [
        "Flutter app for BMI tracking, calorie logging, and personalized meal planning adopted by 500+ test users on Android and iOS.",
        "UI designed for full responsiveness with 30% faster onboarding.",
        "Personalized meal planning logic improved user goal completion rates by 25%."
      ]
    },
    {
      title: "Xpresso – Cross-Platform Coffee Ordering App",
      link: "https://github.com/umernvd/Xpresso-App",
      tech: ["Flutter", "Dart", "Provider", "SharedPreferences", "UI/UX Design"],
      description: [
        "Constructed a dynamic shopping interface with advanced category filtering and catalog of 40+ items, reducing checkout navigation by 30%.",
        "Engineered local data persistence for seamless 100% offline cart recovery across user sessions."
      ]
    }
  ],
  experience: [
    {
      company: "Speedforce Digital",
      role: "Software Engineer Intern (Full Stack & Mobile)",
      period: "January 2026 – April 2026",
      description: [
        "Architected and developed Interview Pro, a comprehensive SaaS management platform with Next.js 16 admin dashboard and Flutter mobile application.",
        "Designed secure REST API routes and Flutter offline-first synchronization queue (Hive) for resilient audio uploads to Google Drive via OAuth2.",
        "Implemented RBAC using Appwrite for multi-tenant data isolation, integrated Gemini AI for audio transcription, reducing evaluation time by 40%."
      ]
    }
  ],
  education: [
    {
      degree: "BS in Software Engineering",
      institution: "Superior University, Lahore",
      grade: "CGPA: 3.1/4.0",
      coursework: "Data Structures & Algorithms, Database Systems, Object Oriented Programming, Web Development, Machine Learning, Mobile Application Development, Software Quality Engineering"
    }
  ],
  certifications: [
    { name: "Flutter and Dart", provider: "Coursera" },
    { name: "Programming with JavaScript", provider: "Coursera" },
    { name: "Machine Learning", provider: "Coursera" },
    { name: "Software Quality Assurance", provider: "Coursera" },
    { name: "Artificial Intelligence", provider: "Coursera" },
    { name: "Git and GitHub", provider: "Coursera" },
    { name: "Python for Data Science, AI & Development", provider: "Coursera" }
  ]
};
