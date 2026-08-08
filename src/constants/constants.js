import { FaCode, FaGraduationCap, FaLaptopCode, FaReact, FaLaravel, FaPhp, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMysql, SiLaravel } from "react-icons/si";

export const aboutInfo = [
  {
    icon: FaCode,
    title: "Full-Stack Development",
    description: "Building scalable web applications using the React & Laravel.",
  },
  {
    icon: FaGraduationCap,
    title: "BCA Student",
    description: "Strong foundation in Computer Applications, Data Structures, and Software Engineering.",
  },
  {
    icon: FaLaptopCode,
    title: "UI/UX & Modern Web",
    description: "Crafting responsive, clean user interfaces with React, Vite, and Tailwind CSS.",
  },
];

export const skills =[
    {
        icon: FaReact,
        title: "React JS",
        description: "Frontend UI & State Management with React, Vite, and Tailwind CSS.",
    },
    {
        icon: FaLaravel,
        title: "Laravel",
        description: "Backend Development with Laravel, RESTful APIs, and MVC architecture.",
    },
    {
        icon: SiLaravel,
        title: "Filament PHP",
        description: "Admin Dashboard & CRUD Operations with Filament PHP.",
    },
    { 
        icon: SiTailwindcss,
        title: "Tailwind CSS",
        description: "Styling and responsive design with Tailwind CSS." 
    },
    {
        icon: SiJavascript,
        title: "Javascript",
        description: "Programming language for creating dynamic web applications."
    },
    {
        icon: FaPhp,
        title: "PHP",
        description: "Server-side scripting language for web development."
    },
    {
        icon: SiMysql,
        title: "MySQL",
        description: "Database Design & Query Optimization."
    },
    {
        icon: FaGitAlt,
        title: "Git",
        description: "Version control and collaboration using Git."
    },
    {
        icon: FaGithub,
        title: "GitHub",
        description: "Code hosting platform for version control and collaboration."
    },
];

export const projects = [
    {
        title: "E-Commerce Web Application",
        description: "A Full-Featured shopping platform with google authentication, interactive shopping cart,and secure Khalti payment integration",
        image: "/project1.jpg",
        tech: ["Laravel", "Filament PHP", "Tailwind Css", "MySQL", "Khalti Payment Gateway"],
        github: "https://github.com/sagardacharya2000-w/ecommerce",
    },
    {
        title: "Exam Management System",
        description: "An Internship project for managing online exams, with features like question bank, exam scheduling, and result generation.",
        image: "/project2.jpg",
        tech: ["Laravel", "Filament PHP", "Tailwind Css", "MySQL"],
        github: "https://github.com/sagardacharya2000-w/laravel-intern",
    },
    {
        title: "Filament Admin Dashboard Panel",
        description: "A Customization administrative back-office dashboard for managing data record, user permission, and CRUD operation",
        image: "/project3.jpg",
        tech: ["Laravel", " Filament PHP", "MySQL"],

    },
    {
        title: "Internet Banking Web App",
        description: "A college project simulating core digital banking workflows including user accounts, fund transfers, and balance management",
        image: "/project5.jpg",
        tech: ["PHP", "Javascript", "HTML5", "CSS", "MySQL"],
    },
    {
        title: "Interactive Valentine Web App",
        description: "A fun side to impress my love with food and date and time for dating",
        image: "/project4.jpg",
        tech: ["Javascript", "HTML5", "CSS"],
        github: "https://github.com/sagardacharya2000-w/valentine-site",
        demo: "https://transcendent-concha-ed3655.netlify.app",
    },
]