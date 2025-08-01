import React from 'react'
import './About.css'

const About = () => {
    const experiences = [
        {
            year: "2023 - Present",
            title: "Computer Science & Engineering Undergraduate",
            company: "University of Moratuwa",
            description: ""
        },
        {
            year: "2019 - 2023",
            title: "Physical Science Student",
            company: "Bandarawela Central College",
            description: ""
        }
    ]

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Get to know me better</p>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <div className="about-intro">
                            <h3>Who I Am</h3>
                            <p>
                            Hello! I'm Nipun Gunarathna, a Computer Science and Engineering student at the University of Moratuwa, Sri Lanka, with a passion for designing innovative
                            solutions to real-world challenges.
                            </p>
                            <p>
                                I believe in writing clean, maintainable code and staying up-to-date with
                                the latest technologies and best practices. When I'm not coding, you can
                                find me exploring new technologies, contributing to open-source projects,
                                or sharing knowledge with the developer community.
                            </p>
                        </div>

                        <div className="about-stats">
                            <div className="stat-item">
                                <div className="stat-icon">🚀</div>
                                <div className="stat-content">
                                    <h4>Fast</h4>
                                    <p>Lightning fast load times and lag free interaction</p>
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">💡</div>
                                <div className="stat-content">
                                    <h4>Intuitive</h4>
                                    <p>Strong preference for easy to use, intuitive UX/UI</p>
                                </div>
                            </div>
                            <div className="stat-item">
                                <div className="stat-icon">🔧</div>
                                <div className="stat-content">
                                    <h4>Responsive</h4>
                                    <p>My layouts will work on any device, big or small</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-timeline">
                        <h3>Education</h3>
                        <div className="timedline">
                            {experiences.map((exp, index) => (
                                <div key={index} className="timeline-item">
                                    <div className="timeline-marmker"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-year">{exp.year}</div>
                                        <h4 className="timeline-title">{exp.title}</h4>
                                        <div className="timeline-company">{exp.company}</div>
                                        <p className="timeline-description">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

export default About 