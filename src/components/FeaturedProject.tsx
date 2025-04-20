// src/components/FeaturedProject.tsx
import { Project } from '../data/projects'

interface FeaturedProjectProps {
    project: Project
}

export const FeaturedProject = ({ project }: FeaturedProjectProps) => {
    return (
        <div className="bg-[var(--card-background)] p-8 rounded-lg shadow-lg border border-[var(--primary-color)] mb-12">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                    <div className="flex items-center mb-4">
                        <span className="text-[var(--terminal-green)] font-mono mr-2">$</span>
                        <h2 className="text-3xl font-bold text-[var(--primary-color)]">{project.title}</h2>
                    </div>
                    <p className="text-[var(--text-color)] mb-4">{project.description}</p>
                    <p className="text-[var(--text-color)] mb-6">{project.longDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                            <span key={tag} className="bg-[var(--highlight-color)] text-[var(--muted-text-color)] px-3 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--primary-color)] text-[var(--background-color)] px-4 py-2 rounded font-bold hover:bg-[var(--secondary-color)] transition-colors text-center"
                        >
                            <span className="mr-2">&#60;/&#62;</span> View Source Code
                        </a>
                        {project.demoUrl && (
                            <a
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent border border-[var(--primary-color)] text-[var(--primary-color)] px-4 py-2 rounded font-bold hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] transition-all text-center"
                            >
                                <span className="mr-2">▶</span> Try Live Demo
                            </a>
                        )}
                    </div>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0">
                    {project.demoUrl && (
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)] opacity-70 blur rounded"></div>
                            <iframe
                                src={project.demoUrl}
                                className="relative w-full h-96 rounded border border-[var(--border-color)]"
                                title={`${project.title} demo`}
                                sandbox="allow-scripts allow-same-origin"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}