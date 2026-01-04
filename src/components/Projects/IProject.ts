export interface Project {
    title: string;
    duration: string;
    technologies: string[];
    description: string[];
    links: ProjectLinks;
    collaborator: string | null;
}

export interface ProjectLinks {
    github: string;
    demo: string;
}

export const projects: Project[] = [
    {
      title: "Rusty File System",
      duration: "Dec 2025 - Present",
      technologies: ["Rust", "FUSE", "File Systems", "Linux"],
      description: [
        "Developing a FUSE-based file system in Rust, implementing custom logic for allocating and freeing inodes and data blocks",
        "Engineering a hybrid index structure and traversing tree structures to efficiently locate and return data to the kernel",
        "Collaborating on integrating HTTPS/SSH protocols to allow remote file access with the performance of local storage",
        "Focused on memory safety and low-level hardware interactions inspired by CPSC 313 concepts",
        "In collaboration with Sean Donaghy"
      ],
      links: {
        github: "https://github.com/raghumanimehta/Rusty-File-System-", 
        demo: ""
      },
      collaborator: "https://www.linkedin.com/in/sean-donaghy/"
    },
    {
      title: "Reliable UDP",
      duration: "Jun 2025 - Present",
      technologies: ["C++", "Linux/Unix Sockets", "UDP", "POSIX"],
      description: [
        "Engineering a reliable data transfer layer over UDP to replicate TCP guarantees such as ACKs and sequence numbering",
        "Developing custom sender/receiver components utilizing low-level POSIX networking APIs for robust delivery",
        "Implementing manual packet serialization and deserialization while ensuring 100% data integrity against packet loss",
        "Adhering to modern C++ memory management practices, including smart pointers, to ensure code safety"
      ],
      links: {
        github: "https://github.com/raghumanimehta/ReliableUDP",
        demo: ""
      },
      collaborator: null
    },
    {
      title: "mycp Utility",
      duration: "May 2025 - Jun 2025",
      technologies: ["C", "POSIX System Calls", "Linux"],
      description: [
        "Recreated the Linux 'cp' utility using low-level POSIX system calls (read, write) and buffered I/O",
        "Managed file descriptors and permission flags to replicate OS-level error handling",
        "Deepened understanding of the interface between user-space applications and the Linux kernel"
      ],
      links: {
        github: "https://github.com/raghumanimehta/mycp",
        demo: ""
      },
      collaborator: null
    },
    {
      title: "OCR System",
      duration: "Jan 2025 - Apr 2025",
      technologies: ["Python", "AWS", "PostgreSQL", "Lambda", "SQS"],
      description: [
        "Designed a serverless backend pipeline using AWS Textract, Lambda, and SQS for high-speed parallel processing",
        "Architected a high-availability system supporting 50+ concurrent users with zero data loss",
        "Led a backend sub-team of 3 to facilitate collaboration across a larger 8-member engineering design group"
      ],
      links: {
        github: "https://github.com/CPSC319-2025/Team-3-CCS",
        demo: ""
      },
      collaborator: null
    },
    {
      title: "Chat App",
      duration: "Jun 2024 - Oct 2024 (Shelved)",
      technologies: ["TypeScript", "Node.js", "Express", "WebSocket"],
      description: [
        "Engineered a web-based chat application providing secure, encrypted communication for up to 100 concurrent users",
        "Implemented real-time bi-directional communication using WebSockets",
        "Resolved complex CI/CD and dependency issues using Yarn, a skill further refined as a CPSC 310 TA"
      ],
      links: {
        github: "your-github-link",
        demo: "your-demo-link"
      },
      collaborator: null
    },
    {
      title: "Sudoku Game",
      duration: "Aug 2024 - Sept 2024",
      technologies: ["TypeScript", "HTML", "CSS", "Node.js"],
      description: [
        "Developed a web-based Sudoku game featuring automated puzzle generation and solving algorithms",
        "Collaborated in a team of 3 students, managing tasks and version control via Git"
      ],
      links: {
        github: "https://github.com/raghumanimehta/Sudoku-game?tab=readme-ov-file",
        demo: "https://www.students.cs.ubc.ca/~aghadia/Sudoku/"
      },
      collaborator: null
    },
    {
      title: "Weather App (My first personal project)",
      duration: "Aug 2024",
      technologies: ["JavaScript", "Node.js", "Express", "HTML", "CSS"],
      description: [
        "Full-stack application utilizing real-time data fetching from external weather APIs",
        "Managed API endpoints and backend routing using Express"
      ],
      links: {
        github: "https://github.com/raghumanimehta/WeatherApp",
        demo: ""
      },
      collaborator: null
    },
    {
      title: "Business Management App",
      duration: "Sept 2023 - Dec 2023",
      technologies: ["Java", "Swing", "JSON"],
      description: [
        "Created a regional operations tracker with features for revenue, expense, and employee management",
        "Implemented data persistence using JSON to enable saving and loading of application states",
        "Developed a custom graphical user interface using the Java Swing framework"
      ],
      links: {
        github: "https://github.com/raghumanimehta/Regional-Business-Management-app",
        demo: ""
      },
      collaborator: null
    }
];