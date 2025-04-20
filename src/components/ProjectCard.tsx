// src/components/ProjectCard.tsx
import { Project } from '../data/projects'

interface ProjectCardProps {
    project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-md hover:shadow-[var(--shadow-color)] transition-all duration-300 border border-[var(--border-color)] h-full flex flex-col">
            <div className="font-mono text-xs text-[var(--terminal-green)] mb-2 flex items-center">
                <span className="mr-1">$</span> project --name="{project.id}"
            </div>
            <h3 className="text-xl font-bold mb-2 text-[var(--primary-color)]">{project.title}</h3>
            <p className="text-[var(--text-color)] mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-[var(--highlight-color)] text-[var(--muted-text-color)] px-2 py-1 text-xs rounded">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex gap-4 mt-auto pt-4 border-t border-[var(--border-color)]">
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors flex items-center"
                >
                    <span className="mr-1">&#60;/&#62;</span> Code
                </a>
                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors flex items-center"
                    >
                        <span className="mr-1">▶</span> Demo
                    </a>
                )}
            </div>
        </div>
    )
}