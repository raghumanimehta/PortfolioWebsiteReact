export interface Project {
    title: string;
    focus: string;
    duration: string;
    impact: string;
    problem: string;
    myWork: string[];
    technologies: string[];
    links: ProjectLink[];
}

export interface ProjectLink {
    label: string;
    url: string;
}

export const projects: Project[] = [
    {
      title: "OCR Serverless Backend",
      focus: "Backend / Cloud",
      duration: "Jan 2025 - Apr 2025",
      impact: "Built a serverless document-processing backend for an 8-person engineering project.",
      problem: "OCR work needed to move files through upload, extraction, asynchronous processing, and database persistence without losing user documents.",
      myWork: [
        "Led a backend sub-team of 3 within an 8-person team and designed the AWS serverless processing pipeline.",
        "Integrated AWS Textract, Lambda, S3, SNS/SQS, FastAPI, and PostgreSQL for asynchronous document ingestion and extraction.",
        "Set up backend reliability and delivery practices around API design, CI/CD, and handoffs with frontend and product teammates."
      ],
      technologies: ["Python", "FastAPI", "AWS Lambda", "AWS S3", "AWS Textract", "AWS SQS/SNS", "PostgreSQL", "CI/CD"],
      links: [
        { label: "GitHub", url: "https://github.com/CPSC319-2025/Team-3-CCS" }
      ]
    },
    {
      title: "Reliable UDP",
      focus: "Networking / Systems",
      duration: "Jun 2025 - Present",
      impact: "Implemented a reliable file transfer protocol over UDP with TCP-like delivery guarantees.",
      problem: "UDP does not provide ordering, retransmission, connection state, or data-integrity guarantees, so the protocol has to make loss and corruption explicit.",
      myWork: [
        "Implemented ACK handling, retransmissions, checksums, sequence numbers, and manual packet serialization over POSIX sockets.",
        "Built sender/receiver components that preserve file integrity under packet loss and out-of-order delivery.",
        "Kept the implementation close to the network stack to strengthen C/C++ systems debugging and protocol-design skills."
      ],
      technologies: ["C++", "C", "Linux/Unix Sockets", "UDP", "POSIX", "Checksums"],
      links: [
        { label: "GitHub", url: "https://github.com/raghumanimehta/ReliableUDP" }
      ]
    },
    {
      title: "FreeRTOS Scheduler Extensions",
      focus: "Embedded / Real-Time Systems",
      duration: "Feb 2026 - Apr 2026",
      impact: "Extended a FreeRTOS kernel with real-time scheduling policies and low-level validation on Raspberry Pi Pico H.",
      problem: "Real-time workloads need predictable scheduling, resource-access correctness, and multicore behavior that can be validated on constrained hardware.",
      myWork: [
        "Implemented EDF, SRP, CBS, Global EDF, and Partitioned EDF scheduling policies inside the FreeRTOS kernel.",
        "Added runtime stack sharing for SRP to reduce stack overhead while preserving resource-access correctness.",
        "Validated scheduler behavior with task timelines, resource-access traces, multicore tests, and Raspberry Pi Debug Probe debugging."
      ],
      technologies: ["C", "FreeRTOS", "Real-Time Systems", "Raspberry Pi Pico H", "Embedded"],
      links: [
        { label: "GitHub", url: "https://github.com/alberto-escobar/CPSC538G" }
      ]
    },
    {
      title: "Rusty File System",
      focus: "Systems / File Systems",
      duration: "Dec 2025 - Present",
      impact: "Developing a FUSE-based file system in Rust with custom allocation and indexing logic.",
      problem: "File systems require careful inode/block allocation, metadata traversal, and kernel-facing behavior while preserving memory safety.",
      myWork: [
        "Implementing custom allocation and freeing logic for inodes and data blocks.",
        "Engineering a hybrid index structure for locating file data and returning it through FUSE.",
        "Exploring remote access over HTTPS/SSH while keeping the developer experience close to local storage."
      ],
      technologies: ["Rust", "FUSE", "File Systems", "Linux"],
      links: [
        { label: "GitHub", url: "https://github.com/raghumanimehta/Rusty-File-System-" }
      ]
    }
];
