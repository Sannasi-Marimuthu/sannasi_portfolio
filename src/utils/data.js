import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
  } from "react-icons/fa";
  import { BiLogoJavascript } from "react-icons/bi";
  import { SiExpress, SiMongodb, SiMysql, SiPhp, SiWebpack } from "react-icons/si";
  import {
    VscVscode,
    VscCommentUnresolved,
    VscTerminalPowershell,
  } from "react-icons/vsc";
  import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6";
  import { MdGroups3 } from "react-icons/md";
  
  import PROJECT_IMG_1 from "../assets/images/project-1.png";
  import PROJECT_IMG_2 from "../assets/images/project-2.png";
  import PROJECT_IMG_3 from "../assets/images/project-3.png";
  import PROJECT_IMG_4 from "../assets/images/project-4.png";
  import PROJECT_IMG_5 from "../assets/images/project-5.png";
  import PROJECT_IMG_6 from "../assets/images/project-6.png";
  
  export const MENU_LINKS = [
    { id: "01", label: "Home", offset: -100, to: "hero" },
    { id: "02", label: "Skills", offset: -80, to: "skills" },
    { id: "03", label: "About Me", offset: -80, to: "about" },
    { id: "04", label: "Projects", offset: -80, to: "projects" },
    { id: "05", label: "Contact", offset: -80, to: "contact" },
  ];
  
  export const STATS = [
    { id: "01", count: "3+", label: `Years of \nExperience` },
    { id: "02", count: "10", label: `Certifications \nCourses` },
    { id: "03", count: "43", label: `Projects \nCompleted` },
    { id: "04", count: "37+", label: `Happly \nClients` },
  ];
  
  export const SKILL_TABS = [
    { id: "01", label: "All", value: "all" },
    { id: "02", label: "Frontend", value: "frontend" },
    { id: "03", label: "Backend", value: "backend" },
    { id: "04", label: "Tools", value: "tools" },
    { id: "05", label: "Skills", value: "soft-skills" },
  ];
  
  export const SKILLS = [
    {
      id: "01",
      icon: FaReact,
      skill: "React JS",
      progress: 90,
      type: "frontend",
      description:
        "Experienced in building dynamic and scalable front-end interfaces using React.js and Redux. Implemented reusable components and optimized performance for SEO and accessibility.",
    },
    {
      id: "02",
      icon: FaHtml5,
      skill: "HTML",
      progress: 95,
      type: "frontend",
      description:
        "Structured semantic HTML to create accessible and SEO-optimized layouts for real-world web applications, with focus on clarity and maintainability.",
    },
    {
      id: "03",
      icon: FaCss3,
      skill: "CSS",
      progress: 95,
      type: "frontend",
      description:
        "Styled responsive user interfaces using Bootstrap and custom CSS. Handled layout structuring, responsiveness, and basic animations with cross-browser support.",
    },
    {
      id: "04",
      icon: BiLogoJavascript,
      skill: "JavaScript",
      progress: 85,
      type: "frontend",
      description:
        "Wrote clean, modular ES6+ code to implement interactive UI features, async data handling, and frontend logic with integration to backend APIs.",
    },
  
    {
      id: "05",
      icon: FaNodeJs,
      skill: "Node.js",
      progress: 80,
      type: "backend",
      description:
        "Developed robust backend systems using Node.js, focusing on event-driven logic, asynchronous operations, and scalable REST API development.",
    },
    {
      id: "06",
      icon: SiExpress,
      skill: "Express.js",
      progress: 85,
      type: "backend",
      description:
        "Created secure and modular RESTful APIs using Express.js, with middleware logic, route protection, and error handling for production-ready apps.",
    },
    {
      id: "07",
      icon: SiMongodb,
      skill: "MongoDB",
      progress: 85,
      type: "backend",
      description:
        "Designed NoSQL database schemas with indexing and aggregation pipelines. Ensured data consistency and fast query response for high-volume transactions.",
    },
    {
      id: "08",
      icon: SiMysql,
      skill: "MySQL",
      progress: 60,
      type: "backend",
      description:
        "Worked with MySQL to design and manage structured relational databases. Created normalized schemas, optimized queries, and implemented data validation for backend admin operations.",
    },
  
    {
      id: "09",
      icon: SiPhp,
      skill: "PhP",
      progress: 50,
      type: "backend",
      description:
        "Basic knowledge of PHP for server-side scripting and form handling. Used in simple backend tasks like database connections, session management, and form validations.",
    },
  
    {
      id: "10",
      icon: FaGitAlt,
      skill: "Git & GitHub",
      progress: 75,
      type: "tools",
      description:
        "Maintained version control across projects, managed branches, pull requests, and code history to support smooth team collaboration and CI/CD setup.",
    },
    {
      id: "11",
      icon: VscVscode,
      skill: "Visual Studio Code",
      progress: 95,
      type: "tools",
      description:
        "Used VS Code for daily development with debugging tools, live server extensions, and Git integration to streamline the workflow.",
    },
   
  
    {
      id: "12",
      icon: VscCommentUnresolved,
      skill: "Problem-Solving",
      progress: 85,
      type: "soft-skills",
      description:
        "Troubleshot bugs and optimized application flows across frontend and backend. Approached development challenges with structured logic and real-time debugging.",
    },
  ];
  
  export const ABOUT_ME = {
    content: `I'm a dedicated MERN Stack Developer with 3+ years of experience building scalable, secure, and user-friendly web applications. I specialize in crafting high-performance digital solutions using technologies like React.js, Node.js, Express, and MongoDB. My focus is on writing clean, maintainable code and creating responsive interfaces with tools like Tailwind CSS and Bootstrap. I enjoy turning ideas into practical, real-world applications that make a difference.

\nMy web development journey started with curiosity and turned into a full-time passion. Over the years, I’ve built e-commerce platforms, integrated third-party APIs, and implemented secure authentication systems. I’m always learning and evolving, aiming to deliver fast, reliable, and impactful solutions for modern web needs.`,

    socialLinks: [
      { id: "01", label: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/share/1AEpqeS55Q/" },
      { id: "02", label: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/sannasi_chottu?igsh=MXFiYmZmMHZpNDJ2Zg==&utm_source=ig_contact_invite" },
      { id: "04", label: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/sannasi-marimuthu-56872135a/" },
    ],
  
    email: "sannasimarimuthu21@gmail.com",
    phone: "+91 72720-76763",
    website: "https://sannasi-portfolio.netlify.app/",
  };
  
  export const PROJECTS = [
    {
      id: 1,
      title:
        "Full Stack Notes App using MERN | MongoDB, Express, React JS, Node JS",
      image: PROJECT_IMG_1,
      tags: ["React", "Express.js", "MongoDB", "Node.js"],
    },
    {
      id: 2,
      title:
        "Responsive Portfolio Website Using React JS | Portfolio Website in React",
      image: PROJECT_IMG_2,
      tags: ["React", "HTML", "CSS"],
    },
    {
      id: 3,
      title:
        "Full Stack Travel Story App Using MERN Stack | MongoDB, Express, React, Node.js | MERN Project",
      image: PROJECT_IMG_3,
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      id: 4,
      title:
        "Portfolio Website Using React JS and Tailwind CSS | Portfolio Website in React.Js",
      image: PROJECT_IMG_4,
      tags: ["React", "Tailwind CSS"],
    },
    {
      id: 5,
      title:
        "Full Stack Polling App using MERN Stack | MongoDB, Express, React, Node.js | MERN Project",
      image: PROJECT_IMG_5,
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
    },
    {
      id: 6,
      title: "Responsive Website Using React JS & Tailwind CSS",
      image: PROJECT_IMG_6,
      tags: ["React", "Tailwind CSS"],
    },
  ];
  
