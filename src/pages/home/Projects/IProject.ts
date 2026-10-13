export interface Project {
    title: string;
    focus: string;
    duration: string;
    impact: string;
    problem: string;
    myWork: string[];
    technologies: string[];
    links: ProjectLink[];
    overview?: { caption: string; steps: { title: string; detail: string }[]; note?: string };
}

export interface ProjectLink {
    label: string;
    url: string;
}

export const projects: Project[] = [
    {
        title: "OCR Serverless Backend",
        overview: {
            caption: "Document processing at a glance",
            steps: [
                { title: "Upload", detail: "Receive documents" },
                { title: "Extract", detail: "Read text with OCR" },
                { title: "Process", detail: "Asynchronous work" },
                { title: "Store", detail: "Persist the results" }
            ]
        },
        focus: "Backend / Cloud",
        duration: "Jan 2025 - Apr 2025",
        impact: "Built a serverless document-processing backend for an 8-person engineering project.",
        problem: "Bank employees had to manually enter information from forms into a structured database. " +
            "We needed to automate extraction while validating the data and keeping each record linked to its original form. " +
            "The processing pipeline also needed to scale horizontally as more documents arrived.",
        myWork: [
            "Led a 3-person backend sub-team within an 8-person team and designed a serverless pipeline for processing bank forms.",
            "Connected S3 uploads, AWS Textract extraction, and Lambda processing through SNS/SQS to handle documents asynchronously and scale processing horizontally.",
            "Built the FastAPI and PostgreSQL backend for validating extracted form data and storing structured records with references to the original documents.",
            "Coordinated the data-review flow with frontend teammates and set up CI/CD for backend delivery."
        ],
        technologies: ["Python", "FastAPI", "AWS Lambda", "AWS S3", "AWS Textract", "AWS SQS/SNS", "PostgreSQL", "CI/CD"],
        links: [
            { label: "GitHub", url: "https://github.com/CPSC319-2025/Team-3-CCS" }
        ]
    },
    {
        title: "Reliable UDP",
        overview: {
            caption: "Reliable delivery over UDP",
            steps: [
                { title: "Sender", detail: "Sequence + checksum" },
                { title: "UDP packets", detail: "Transfer over the network" },
                { title: "Receiver", detail: "Check + order data" }
            ],
            note: "Acknowledgements return to the sender; missing packets are retransmitted."
        },
        focus: "Networking / Systems",
        duration: "Jun 2025 - Present",
        impact: "Implemented a reliable file transfer protocol over UDP with TCP-like delivery guarantees.",
        problem: "Sending a file over UDP can leave the receiver with missing, out-of-order, or corrupted data. " +
            "This project explores how to build reliable delivery at the application layer: track packets, recover missing data, and reconstruct the original file. " +
            "The protocol also needed to handle lost acknowledgements without mistaking an incomplete transfer for a successful one.",
        myWork: [
            "Built C/C++ sender and receiver components using POSIX UDP sockets and manual packet serialization.",
            "Implemented sequence numbers and checksums to track packet order and detect corrupted data.",
            "Added acknowledgements and retransmissions to recover missing packets and handle out-of-order delivery during file transfers."
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
        impact: "Expanded FreeRTOS scheduling options and explored real-time scheduling through implementation and testing on Raspberry Pi Pico H.",
        problem: "By default, FreeRTOS uses fixed-priority preemptive scheduling with round-robin time slicing for tasks of equal priority. " +
            "We wanted to give developers more options for deadline-based scheduling, resource access, and multicore execution. " +
            "The project also gave us a way to learn real-time scheduling by implementing EDF, SRP, CBS, Global EDF, and Partitioned EDF and observing their behavior on hardware.",
        myWork: [
            "Extended the FreeRTOS kernel with EDF scheduling, SRP resource access, and CBS bandwidth management, then added Global EDF and Partitioned EDF for multicore execution.",
            "Implemented runtime stack sharing for SRP to reduce task-stack memory overhead while preserving resource-access correctness.",
            "Checked task deadlines, resource-access traces, and multicore scheduling behavior on Raspberry Pi Pico H using task timelines and the Raspberry Pi Debug Probe."
        ],
        technologies: ["C", "FreeRTOS", "Real-Time Systems", "Raspberry Pi Pico H", "Embedded"],
        links: [
            { label: "GitHub", url: "https://github.com/alberto-escobar/CPSC538G" }
        ]
    },
    {
        title: "Rusty File System",
        focus: "Systems / Networking",
        duration: "Dec 2025 - Present",
        impact: "Designing a concurrent TCP file service in Rust, building on earlier file-system experiments.",
        problem: "The goal is to let multiple clients access a shared directory over TCP while the server manages the files. " +
            "Requests can arrive together or target the same file, so the design needs to coordinate file operations without letting a slow client stall everyone else. " +
            "It also needs to keep client-supplied paths inside the shared directory and limit how much disk work runs at once.",
        myWork: [
            "Refocusing earlier custom-storage experiments on a TCP service that uses the host file system for storage.",
            "Designing Tokio connection handling and request framing so multiple clients can share the server without a dedicated thread per connection.",
            "Planning coordination for overlapping file operations, validation of paths within the shared directory, and bounded disk work. The network service is in early development."
        ],
        technologies: ["Rust", "Tokio", "TCP", "File Systems", "Linux"],
        links: [
            { label: "GitHub", url: "https://github.com/raghumanimehta/Rusty-File-System-" }
        ]
    }
];
