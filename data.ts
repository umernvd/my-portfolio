import { PortfolioData } from './types';

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Muhammad Umer Naveed",
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
      skills: ["Next.js", "React", "HTML/CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Flutter"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Strapi (Headless CMS)", "RESTful APIs"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Kaggle"]
    },
    {
      title: "Languages",
      skills: ["JavaScript", "Python", "C++", "Dart"]
    }
  ],
  projects: [
    {
      title: "Diet Planner",
      link: "https://github.com/umernvd/Diet-Planner-App",
      tech: ["Flutter", "Dart", "Mobile Development"],
      description: [
        "Developed a cross-platform mobile app for BMI calculation and calorie tracking.",
        "Designed a responsive, seamless UI for Android and iOS using Flutter.",
        "Integrated meal planning logic to assist users with nutritional goals."
      ]
    },
    {
      title: "ProFein - E-Commerce Store",
      link: "https://github.com/umernvd/ProFein-Store",
      tech: ["Next.js", "Node.js", "Strapi"],
      description: [
        "Developed a full-stack e-commerce platform using Next.js, Node.js, and Strapi.",
        "Integrated Strapi as a headless CMS.",
        "Designed a dynamic, responsive, SEO-friendly frontend."
      ]
    },
    {
      title: "Outfit Recommender",
      link: "https://github.com/umernvd/Outfit-Recommender",
      tech: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
      description: [
        "Engineered a personalized outfit recommendation system using ML and weather data.",
        "Implemented content-based filtering to analyze clothing attributes for improved accuracy.",
        "Preprocessed and cleaned fashion datasets using Pandas for optimal model performance."
      ]
    },
    {
      title: "Video Game Store – C++ Console App",
      link: "https://github.com/umernvd/Video-Game-Store",
      tech: ["C++", "File Handling", "OOP"],
      description: [
        "Developed a console-based store using C++ with OOP principles.",
        "Implemented file handling to manage inventory and simulate purchases."
      ]
    }
  ],
  experience: [
    {
      company: "Aksperts Tech",
      role: "TeleSales Representative",
      period: "2022 - 2023",
      description: [
        "Communicated with clients to explain services and resolve queries.",
        "Improved customer engagement and satisfaction through effective dialogue.",
        "Developed strong interpersonal and problem-solving skills."
      ]
    }
  ],
  education: [
    {
      degree: "BS in Software Engineering",
      institution: "Superior University, Lahore",
      grade: "CGPA: 3.1/4.0",
      coursework: "Data Structures & Algorithms, Database Systems, Object Oriented Programming, Web Development, Machine Learning, Mobile Application Development"
    }
  ],
  certifications: [
    { name: "Python for Data Science, AI & Development", provider: "Coursera" },
    { name: "Machine Learning", provider: "Coursera" },
    { name: "Flutter and Dart", provider: "Coursera" },
    { name: "Git and GitHub", provider: "Coursera" },
    { name: "Software Quality Assurance", provider: "Coursera" },
    { name: "Programming with JavaScript", provider: "Coursera" },
    { name: "Artificial Intelligence", provider: "Coursera" },
    { name: "Introduction to SQL", provider: "SoloLearn" },
    { name: "Introduction to Web Development", provider: "SoloLearn" },
    { name: "Introduction to JavaScript", provider: "SoloLearn" },
    { name: "ML for Beginners", provider: "SoloLearn" },
    { name: "Fundamentals of Management", provider: "Coursera" }
  ]
};