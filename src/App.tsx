// src/App.tsx
import { useState, useEffect } from 'react'
import { personalProjects, professionalProjects } from './data/projects'
import { ProjectCard } from './components/ProjectCard'
import { FeaturedProject } from './components/FeaturedProject'
import { ProfessionalProject } from './components/ProfessionalProject'
import { Terminal } from './components/Terminal'
import { TechSkill } from './components/TechVisualizations'

export default function App() {
  const featuredPersonalProjects = personalProjects.filter(project => project.featured)
  const otherPersonalProjects = personalProjects.filter(project => !project.featured)
  const featuredProfessionalProjects = professionalProjects.filter(project => project.featured)
  const otherProfessionalProjects = professionalProjects.filter(project => !project.featured)

  const [typedText, setTypedText] = useState('')
  const textToType = "Full Stack && AWS && DevOps && Blockchain"

  const [activeProjectType, setActiveProjectType] = useState('professional') // 'professional' or 'personal'
  const [isCommandVisible, setIsCommandVisible] = useState(false)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setTypedText(textToType.substring(0, index))
      index++
      if (index > textToType.length) {
        clearInterval(timer)
        // setTimeout(() => setIsCommandVisible(true), 500)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-color)]">
      {/* Header/navbar */}
      <header className="py-6 border-b border-[var(--border-color)] sticky top-0 bg-[var(--background-color)] z-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-[var(--primary-color)] font-mono font-bold text-xl md:text-2xl">
              <span className="text-[var(--terminal-green)]">$ </span>arun@munaganti:~$
            </div>
            <nav>
              <ul className="flex gap-4 md:gap-6 text-sm md:text-base">
                <li>
                  <a href="#" className="hover:text-[var(--primary-color)] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-[var(--primary-color)] transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="https://github.com/arunsai63" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://arunsai63.github.io/blogs" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero section */}
      <section className="py-4 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-1/2">
              <div className="font-mono text-[var(--muted-text-color)] mb-2">
                <span className="text-[var(--terminal-green)]">$ </span>whoami
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[var(--text-color)]">Hi, I'm </span>
                <span className="text-[var(--primary-color)]">Arun Munaganti</span>
              </h1>
              <div className="font-mono text-[var(--muted-text-color)] mb-4">
                <span className="text-[var(--terminal-green)]">$ </span>
                {typedText}<span className="inline-block w-2 h-5 bg-[var(--primary-color)] ml-1 animate-pulse"></span>
              </div>
              <p className="text-lg md:text-xl mb-8">
                Solutions Architect with 6+ years of experience.
                <br />
                Building scalable backend solutions and leading engineering teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/arunsai63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[var(--primary-color)] text-[var(--background-color)] px-6 py-3 rounded font-bold hover:bg-[var(--secondary-color)] transition-colors text-center"
                >
                  <span className="mr-2">&#60;/&#62;</span> View My GitHub
                </a>
                <a
                  href="#projects"
                  className="bg-transparent border border-[var(--primary-color)] text-[var(--primary-color)] px-6 py-3 rounded font-bold hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] transition-all text-center"
                >
                  <span className="mr-2">▶</span> Explore Projects
                </a>
              </div>

              {isCommandVisible && (
                <div className="mt-8 p-4 bg-[var(--card-background)] border border-[var(--border-color)] rounded-lg fade-in">
                  <div className="font-mono text-[var(--muted-text-color)]">
                    <span className="text-[var(--terminal-green)]">$ </span>
                    <span className="typing-effect">cat /etc/skills.conf</span>
                  </div>
                  <pre className="mt-2 text-xs md:text-sm overflow-x-auto">
                    {`{
  "languages": ["JavaScript", "TypeScript", "Python", "Java", "Go"],
  "cloud": ["AWS", "Azure", "GCP"],
  "devops": ["Docker", "Kubernetes", "CI/CD", "Terraform"],
  "databases": ["MongoDB", "PostgreSQL", "Redis", "DynamoDB"],
  "frameworks": ["React", "Node.js", "Express", "Spring Boot"]
}`}
                  </pre>
                </div>
              )}
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <Terminal />
            </div>
          </div>
        </div>
      </section>

      {/* Projects section - No tabs, show all */}
      <section className="py-4 bg-[rgba(0,0,0,0.3)]" id="projects">
        <div className="container mx-auto px-4">
          <div className="font-mono text-[var(--muted-text-color)] mb-4">
            <span className="text-[var(--terminal-green)]">$ </span>cd ./projects && ls -la
          </div>
          <h2 className="text-3xl font-bold mb-8 inline-block border-b-2 border-[var(--primary-color)] pb-2 glow-effect">
            My Projects
          </h2>

          {/* Directory section with folder icons - visual only */}
          <div className="mb-6 overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--card-background)] w-full md:w-2/3 max-w-2xl">
            <div className="flex">
              <div className="px-4 py-2 font-mono text-lg flex-1 bg-[var(--primary-color)] text-[var(--background-color)]">
                <span className="mr-2">📁</span> professional/
              </div>
              <div className="px-4 py-2 font-mono text-lg flex-1 bg-[var(--card-background)] text-[var(--muted-text-color)]">
                <span className="mr-2">📁</span> personal/
              </div>
            </div>
          </div>

          {/* Professional Projects - ALWAYS VISIBLE */}
          <div className="mb-20">
            {/* Professional timeline */}
            <div className="relative pb-12">
              {featuredProfessionalProjects.map((project, index) => (
                <div key={project.id} className="mb-16 relative timeline-container">
                  {/* Timeline connector */}
                  {index < featuredProfessionalProjects.length - 1 && (
                    <div className="timeline-connector"></div>
                  )}

                  {/* Project dot */}
                  <div className="timeline-dot"></div>

                  {/* Project content */}
                  <div className="ml-10">
                    <ProfessionalProject project={project} />
                  </div>
                </div>
              ))}
            </div>

            {/* Other professional projects */}
            {otherProfessionalProjects.length > 0 && (
              <div>
                <div className="font-mono text-[var(--muted-text-color)] mb-6 mt-12">
                  <span className="text-[var(--terminal-green)]">$ </span>ls -la ./more_professional_projects/
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherProfessionalProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Separator between professional and personal projects */}
          <div className="border-t border-[var(--border-color)] w-full my-16 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[rgba(0,0,0,0.3)] px-6 py-1">
              <div className="font-mono text-[var(--muted-text-color)]">
                <span className="text-[var(--terminal-green)]">$ </span>cd ../personal/
              </div>
            </div>
          </div>

          {/* Personal Projects Section - ALWAYS VISIBLE BELOW PROFESSIONAL */}
          <div>
            {/* Directory header for personal projects */}
            <div className="mb-8 overflow-hidden rounded-lg border border-[var(--border-color)] bg-[var(--card-background)] w-full md:w-2/3 max-w-2xl"
              style={{ display: 'none' }}>
              <div className="px-8 py-4 font-mono text-xl bg-[var(--primary-color)] text-[var(--background-color)]">
                <span className="mr-2">📁</span> personal/
              </div>
            </div>

            {/* Featured personal projects */}
            {featuredPersonalProjects.length > 0 && (
              <div className="mb-16">
                <div className="font-mono text-[var(--muted-text-color)] mb-6">
                  <span className="text-[var(--terminal-green)]">$ </span>cat featured_projects.json
                </div>
                {featuredPersonalProjects.map((project) => (
                  <FeaturedProject key={project.id} project={project} />
                ))}
              </div>
            )}

            {/* Other personal projects */}
            {otherPersonalProjects.length > 0 && (
              <div>
                <div className="font-mono text-[var(--muted-text-color)] mb-6">
                  <span className="text-[var(--terminal-green)]">$ </span>ls -la ./personal_projects/
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherPersonalProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enhanced Tech Visualization section */}
      <section className="py-16 bg-[rgba(0,0,0,0.3)]">
        <div className="container mx-auto px-4 text-center">
          <div className="font-mono text-[var(--muted-text-color)] mb-4">
            <span className="text-[var(--terminal-green)]">$ </span>visualize --skills="development"
          </div>
          <h2 className="text-3xl font-bold mb-8 glow-effect inline-block">Tech Stack Visualization</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <TechSkill
              category="Frontend"
              skills={["React", "TypeScript", "HTML/CSS", "Tailwind", "Bootstrap"]}
              animationType="code"
            />
            <TechSkill
              category="Backend"
              skills={["Node.js", "Python", "C# .Net", "Grpc", "Rest Api"]}
              animationType="matrix"
            />
            <TechSkill
              category="DevOps"
              skills={["Docker", "Serverless", "CI/CD", "IaC", "Nginx"]}
              animationType="pulse"
            />
            <TechSkill
              category="Cloud"
              skills={["AWS", "Azure", "Digital Ocean", "Firebase", "Supabase"]}
              animationType="radar"
            />
          </div>
        </div>
      </section>


      {/* Contact section */}
      <section className="py-16 bg-[rgba(0,0,0,0.3)]">
        <div className="container mx-auto px-4 text-center">
          <div className="font-mono text-[var(--muted-text-color)] mb-4">
            <span className="text-[var(--terminal-green)]">$ </span>contact --init
          </div>
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg">
            Interested in working together or have questions about my projects? Feel free to reach out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:arunsai63@gmail.com"
              className="bg-[var(--primary-color)] text-[var(--background-color)] px-6 py-3 rounded font-bold hover:bg-[var(--secondary-color)] transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/arunmunaganti"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border border-[var(--primary-color)] text-[var(--primary-color)] px-6 py-3 rounded font-bold hover:bg-[var(--primary-color)] hover:text-[var(--background-color)] transition-all"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--border-color)]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-[var(--muted-text-color)] mb-4">
            <span className="text-[var(--terminal-green)]">$ </span>
            echo "© {new Date().getFullYear()} Arun Munaganti. All rights reserved."
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/arunsai63"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-text-color)] hover:text-[var(--primary-color)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/arunmunaganti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-text-color)] hover:text-[var(--primary-color)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://arunsai63.github.io/blogs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--muted-text-color)] hover:text-[var(--primary-color)] transition-colors"
            >
              Blog
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}