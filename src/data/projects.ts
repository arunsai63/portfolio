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
        description: "A powerful chess engine built with Rust and WebAssembly",
        longDescription: "A chess engine implemented in Rust that runs in the browser using WebAssembly. Features include a sophisticated evaluation function, alpha-beta pruning, and multiple difficulty levels. The engine demonstrates advanced Rust programming concepts and high-performance computation in the browser.",
        tags: ["Rust", "WebAssembly", "Chess", "Algorithms"],
        githubUrl: "https://github.com/arunsai63/chess-engine-rust",
        demoUrl: "https://arunsai63.github.io/chess-engine-rust/",
        featured: true
    },
    {
        id: "smart-lift",
        title: "SmartLift",
        description: "A fitness tracking and workout planning application",
        longDescription: "SmartLift helps users track workouts, plan routines, and monitor progress with features like exercise logs, progress charts, and personalized workout recommendations.",
        tags: ["JavaScript", "Web", "Fitness"],
        githubUrl: "https://github.com/arunsai63/SmartLift",
        demoUrl: "https://arunsai63.github.io/SmartLift/"
    },
    {
        id: "pygames",
        title: "PyGames Collection",
        description: "A collection of games built with Python and Pygame",
        longDescription: "This repository contains several games made with Python and the Pygame library, demonstrating game development concepts like collision detection, scoring systems, and game loops.",
        tags: ["Python", "Games", "PyGame"],
        githubUrl: "https://github.com/arunsai63/PyGames"
    },
    {
        id: "tunnellite",
        title: "Tunnellite",
        description: "A lightweight alternative to ngrok for local server tunneling",
        longDescription: "Tunnellite provides secure public URLs for exposing local development servers to the internet, similar to ngrok but with a focus on performance and simplicity.",
        tags: ["Networking", "DevOps", "Tools"],
        githubUrl: "https://github.com/arunsai63/ngrok"
    },
    {
        id: "ssl-anywhere",
        title: "SSL Anywhere",
        description: "Easily add SSL/TLS encryption to any application",
        longDescription: "SSL Anywhere simplifies the process of adding SSL/TLS encryption to applications. It handles certificate generation, renewal, and configuration to make secure connections effortless.",
        tags: ["Security", "DevOps", "SSL/TLS"],
        githubUrl: "https://github.com/arunsai63/ssl-anywhere"
    },
    {
        id: "react-forms",
        title: "React Forms",
        description: "A simple yet powerful form handling library for React",
        longDescription: "One of my earliest projects, React Forms simplifies form handling in React applications with features like validation, error messages, and form state management.",
        tags: ["React", "Forms", "JavaScript"],
        githubUrl: "https://github.com/arunsai63/react-forms",
        demoUrl: "https://arunsai63.github.io/react-forms"
    }
]