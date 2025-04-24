// src/components/ProfessionalProject.tsx
import { Project } from '../data/projects';

interface ProfessionalProjectProps {
    project: Project;
}

export const ProfessionalProject = ({ project }: ProfessionalProjectProps) => {
    return (
        <div className="bg-[var(--card-background)] p-6 rounded-lg shadow-md border border-[var(--border-color)] hover:shadow-[var(--shadow-color)] transition-all duration-300">
            {/* Project header with terminal style */}
            <div className="flex items-center mb-4">
                <span className="text-[var(--terminal-green)] font-mono mr-2">$</span>
                <h3 className="text-2xl font-bold text-[var(--primary-color)]">{project.title}</h3>
            </div>

            {/* Project overview */}
            <div className="font-mono text-[var(--text-color)] mb-6">
                <div className="flex items-start mb-6">
                    <span className="text-[var(--terminal-green)] font-mono mr-2 mt-1">{">"}</span>
                    <p>{project.description}</p>
                </div>

                {/* Project details section - Always visible */}
                <div className="mt-6 mb-6">
                    <div className="font-mono text-[var(--muted-text-color)] mb-2">
                        <span className="text-[var(--terminal-green)]">$</span> cat details.txt
                    </div>
                    <div className="bg-[rgba(0,0,0,0.3)] p-4 rounded border border-[var(--border-color)] mb-6">
                        <p className="text-[var(--text-color)] whitespace-pre-line">
                            {project.longDescription || "No detailed information available."}
                        </p>
                    </div>
                </div>

                {/* Tech Stack tags */}
                <div className="my-6">
                    <div className="font-mono text-[var(--muted-text-color)] mb-2">
                        <span className="text-[var(--terminal-green)]">$</span> cat tech_stack.json
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4 pl-4">
                        {project.tags.map(tag => (
                            <span key={tag} className="bg-[var(--highlight-color)] text-[var(--primary-color)] px-3 py-1 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 border-t border-[var(--border-color)] pt-4">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors flex items-center"
                    >
                        <span className="mr-1">&#60;/&#62;</span> Code
                    </a>
                )}
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
                {project.alternativeLinks && project.alternativeLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors flex items-center"
                    >
                        <span className="mr-1">🔗</span> Link {index + 1}
                    </a>
                ))}
            </div>
        </div>
    );
};