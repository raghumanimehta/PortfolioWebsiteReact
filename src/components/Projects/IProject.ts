export interface Project {
    id: string;
    title: string;
    duration: string;
    technologies: string[];
    description: string[];
    links: ProjectLinks;
}

export interface ProjectLinks {
    github: string;
    demo: string;
}

export const projects: Project[] = [
    {
      id: "chat-app",
      title: "Chat App",
      duration: "June 2024 - October 2024",
      technologies: ["TypeScript", "Node.js", "Express", "WebSocket", "Nodemailer"],
      description: [
        "Web-based chat app providing secure and encrypted communication",
        "Engineered for concurrent load of up to 100 users",
        "Responsive user interface with friend invitation system",
        "Integrated privacy and encryption features"
      ],
      links: {
        github: "your-github-link",
        demo: "your-demo-link"
      }
    },
    {
      id: "sudoku-game",
      title: "Sudoku Game",
      duration: "August 2024 - September 2024",
      technologies: ["TypeScript", "HTML", "CSS", "Node.js"],
      description: [
        "Web-based Sudoku game with puzzle generation",
        "Collaborated with 2 UBC students",
        "Algorithm for generating and solving Sudoku puzzles",
        "Enhanced user interface with CSS"
      ],
      links: {
        github: "your-github-link",
        demo: ""
      }
    //   collaboration: true
    },
    {
      id: "weather-app",
      title: "Weather App",
      duration: "August 2024",
      technologies: ["JavaScript", "Node.js", "Express", "HTML", "CSS"],
      description: [
        "Full-stack weather application with real-time data",
        "Real-time weather data fetching",
        "Backend server using Express for API management",
        "Responsive user interface"
      ],
      links: {
        github: "your-github-link",
        demo: ""
      }
    },
    {
      id: "business-management",
      title: "Business Management App",
      duration: "September 2023 - December 2023",
      technologies: ["Java", "Swing", "JSON"],
      description: [
        "Regional business management application for operations tracking",
        "Revenue and expense tracking features",
        "Employee management across facilities",
        "Data persistence using JSON",
        "Graphical interface using Java Swing"
      ],
      links: {
        github: "your-github-link",
        demo: ""
      }
    }
  ];
  
  // export { projects };