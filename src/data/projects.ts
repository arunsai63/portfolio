// src/data/projects.ts
export interface Project {
    id: string
    title: string
    description: string
    longDescription?: string
    tags: string[]
    githubUrl?: string | null
    alternativeLinks?: string[] | null
    demoUrl?: string
    featured?: boolean
}

export const personalProjects: Project[] = [
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

export const professionalProjects: Project[] = [
    {
        id: "landwey",
        title: "Landwey Real Estate Platform",
        description: "Real estate platform with accounting and internal dashboards",
        longDescription: "A comprehensive platform for Landwey, a real estate investment company, featuring a public-facing website and internal tools. Includes custom accounting systems and data-driven dashboards for property management, investor tracking, and financial reporting, optimizing operational efficiency.",
        tags: ["Real Estate", "Dashboards", "Accounting", "Web Development", "Professional"],
        demoUrl: "https://www.landwey.in/",
        featured: true
    },
    {
        id: "physioage",
        title: "PhysioAge Analytics",
        description: "Health analytics platform for personalized aging insights",
        longDescription: "A professional project for PhysioAge, providing a web-based platform for health analytics and personalized aging metrics. Features include data visualization dashboards and secure user data handling, designed to empower users with actionable health insights.",
        tags: ["HealthTech", "Analytics", "Web Development", "Data Visualization", "Professional"],
        demoUrl: "https://analytics.physioage.com/demo_1",
        alternativeLinks: [
            "https://www.physioage.com/"
        ],
        featured: true
    },
    {
        id: "cryptopatel",
        title: "CryptoPatel",
        description: "Platform for crypto education and portfolio tracking",
        longDescription: "CryptoPatel is a web platform offering tools for cryptocurrency education and portfolio management. It provides users with market insights, price tracking, and resources to navigate the crypto space, built with a focus on user-friendly design and real-time data.",
        tags: ["Crypto", "Web3", "Portfolio", "Education", "JavaScript"],
        demoUrl: "https://cryptopatel.com/"
    },
    {
        id: "growindigo-app",
        title: "GrowIndigo Retail App",
        description: "Mobile app for agricultural retail and farmer services",
        longDescription: "A mobile application developed for GrowIndigo, enabling farmers and retailers to access agricultural products, services, and market insights. Built with a focus on usability and scalability, it supports seamless transactions and real-time data for rural users.",
        tags: ["Mobile", "Agriculture", "React Native", "E-Commerce", "Professional"],
        demoUrl: "https://play.google.com/store/apps/details?id=com.mahyco.retail.online",
        alternativeLinks: [
            "https://www.growindigo.co.in/"
        ]
    },
    {
        id: "xellwallet",
        title: "XellWallet",
        description: "Decentralized wallet for secure crypto transactions",
        longDescription: "XellWallet is a decentralized cryptocurrency wallet integrated with the Trie Network testnet. It enables secure storage and transfer of digital assets, with a focus on user control and blockchain interoperability, ideal for Web3 enthusiasts.",
        tags: ["Crypto", "Web3", "Wallet", "Blockchain", "Decentralized"],
        demoUrl: "https://xellwallet.com/",
        featured: true
    },
]
