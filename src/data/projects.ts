// src/data/projects.ts
export interface Project {
    id: string
    title: string
    description: string
    longDescription?: string
    tags: string[]
    githubUrl: string
    demoUrl?: string
    featured?: boolean
}

export const projects: Project[] = [
    {
        id: "chess-engine",
        title: "Chess Engine (Rust)",
        description: "An interactive chess game with Rust + WebAssembly for native-like speed",
        longDescription: "A performant, interactive chess game where the heavy-lifting game logic runs via compiled WebAssembly, bringing native-like speed to the browser. Built with Rust and compiled to WebAssembly, it provides efficient move evaluation, pruning strategies, and browser-side performance.",
        tags: ["Rust", "WebAssembly", "Chess", "Game Development", "Performance"],
        githubUrl: "https://github.com/arunsai63/chess-engine-rust",
        demoUrl: "https://arunsai63.github.io/chess-engine-rust/",
        featured: true
    },
    {
        id: "smart-lift",
        title: "SmartLift",
        description: "Simulated smart lift system with custom dispatch algorithms",
        longDescription: "A simulated smart lift system with a React-based UI and custom dispatch algorithms. Visualize, test, and optimize elevator logic for multi-floor, multi-lift environments. Great for showcasing algorithmic logic and real-time simulation.",
        tags: ["React", "Simulation", "Algorithms", "UI", "JavaScript"],
        githubUrl: "https://github.com/arunsai63/SmartLift",
        demoUrl: "https://arunsai63.github.io/SmartLift/"
    },
    {
        id: "pygames",
        title: "PyGames Collection",
        description: "Classic games like Chess, Sudoku – plus an automatic Sudoku solver",
        longDescription: "Classic games implemented in Python using Pygame – including chess, sudoku, and more. Highlights include an automatic Sudoku solver, clean code structure, and solid grasp of game dev fundamentals like loops, collision detection, and UI feedback.",
        tags: ["Python", "Pygame", "Games", "Sudoku", "Chess"],
        githubUrl: "https://github.com/arunsai63/PyGames"
    },
    {
        id: "tunnellite",
        title: "Tunnellite",
        description: "Barebones ngrok clone with optimized chunked transmission",
        longDescription: "Tunnellite is a lightweight implementation of ngrok. It allows tunneling to local development servers with chunking logic built-in for optimized data transmission. Minimal, fast, and a great learning tool for reverse proxy concepts.",
        tags: ["Networking", "DevOps", "Reverse Proxy", "Node.js"],
        githubUrl: "https://github.com/arunsai63/ngrok",
        featured: true
    },
    {
        id: "ssl-anywhere",
        title: "SSL Anywhere",
        description: "Redirect HTTPS to HTTP using a tiny, deployable service",
        longDescription: "Need to redirect from an HTTPS URL to an HTTP server? Deploy SSL Anywhere on a small server to handle SSL termination and rerouting to your internal apps or services. Simple and effective for quick deployments.",
        tags: ["Security", "SSL/TLS", "DevOps", "Networking"],
        githubUrl: "https://github.com/arunsai63/ssl-anywhere"
    },
    {
        id: "react-forms",
        title: "React Forms",
        description: "Google Forms clone built with React + Bootstrap + JSON Server",
        longDescription: "A throwback to my early dev days – a Google Forms clone built with React and Bootstrap. Supports form creation, Google Sign-In, and uses a local JSON server as backend. Still standing strong (on Node 12 😅).",
        tags: ["React", "Forms", "Bootstrap", "JavaScript", "Beginner"],
        githubUrl: "https://github.com/arunsai63/react-forms",
        demoUrl: "https://arunsai63.github.io/react-forms"
    }
]