import React from 'react'
import './Projects.css'

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "Intelligent Resume Screening System",
            description: "Developed an AI-driven recruitment platform that automates resume parsing, candidate evaluation, and credential verification while delivering real-time insights to recruiters. Led backend development using FastAPI, MongoDB integration, and implemented real-time integration.",
            image: "🤖",
            category: "fullstack",
            technologies: ["FastAPI", "React.js", "Tailwind CSS", "MongoDB", "Docker"],
            liveUrl: "#",
            githubUrl: "https://github.com/NipunSachintha/Resume_Rover_Main.git",
            year: "2024"
        },
        {
            id: 2,
            title: "SmartStock: Optimized Store and Resource Management System",
            description: "A comprehensive software system designed to help local businesses efficiently manage inventory, suppliers, customers, and operations with real-time tracking and analytics. Designed backend API architecture and built interactive UI components.",
            image: "📊",
            category: "fullstack",
            technologies: ["Node.js", "Express.js", "React.js", "Tailwind CSS", "PostgreSQL"],
            liveUrl: "#",
            githubUrl: "#",
            year: "Ongoing"
        },
        {
            id: 3,
            title: "Smart Point of Sales (POS) Project",
            description: "Developed a smart POS system for small businesses with real-time billing, inventory synchronization, and reporting features. Handled full-stack development with real-time updates using socket.IO.",
            image: "💳",
            category: "fullstack",
            technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
            liveUrl: "#",
            githubUrl: "https://github.com/rashmikanaveen/Food-Ordering-System_2.git",
            year: "2025"
        },
        {
            id: 4,
            title: "Jupiter Apperals: Smart HRMS Project",
            description: "Designed and implemented a Human Resource Management System (HRMS) that supports Personal Information Management (PIM) and Absence Management for organizations. Developed core modules with secure authentication.",
            image: "👥",
            category: "fullstack",
            technologies: ["React", "Node.js", "Express.js", "MySQL", "JWT"],
            liveUrl: "#",
            githubUrl: "https://github.com/IllangasingheIMDP/Database_Project_Jupiter.git",
            year: "2025"
        },
        {
            id: 5,
            title: "UniNest: Smart Boarding Booking Application",
            description: "Developed a boarding place booking and advertisement hosting platform aimed at university students. Designed and implemented backend APIs in FastAPI and developed key frontend features including search and booking interface.",
            image: "🏠",
            category: "fullstack",
            technologies: ["React", "FastAPI", "MySQL"],
            liveUrl: "#",
            githubUrl: "#",
            year: "2025"
        },
        {
            id: 6,
            title: "4-bit Nano-Processor Project",
            description: "A 4-bit nano-processor project developed to demonstrate foundational digital design concepts. Designed the processor architecture, wrote VHDL modules for the ALU and control unit, and validated functionality using simulation tools.",
            image: "🔧",
            category: "hardware",
            technologies: ["VHDL"],
            liveUrl: "#",
            githubUrl: "https://github.com/NipunSachintha/4_bit_NanoProcessor.git",
            year: "2024"
        }
    ]

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">My Projects</h2>
                    <p className="section-subtitle">Some of my recent work and academic projects</p>
                </div>

                

                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <div className="project-icon">{project.image}</div>
                                <div className="project-year">{project.year}</div>
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.liveUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                                            <span>🌐</span> Live Demo
                                        </a>
                                        <a href={project.githubUrl} className="project-link" target="_blank" rel="noopener noreferrer">
                                            <span>📁</span> Code
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-technologies">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-cta">
                    <p>Interested in working together?</p>
                    <button className="btn btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                        Let's Talk
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Projects