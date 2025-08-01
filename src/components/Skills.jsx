import React from 'react'
import './Skills.css'

const Skills = () => {
    const skillCategories = [
        {
            category: "Frontend",
            skills: [
                { name: "React", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "HTML/CSS", level: 95 },
                { name: "TypeScript", level: 80 },
                { name: "Next.js", level: 75 }
            ]
        },
        {
            category: "Backend",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Python", level: 80 },
                { name: "Express.js", level: 85 },
                { name: "MongoDB", level: 75 },
                { name: "PostgreSQL", level: 70 },
                { name: "MySQL", level: 85 }
            ]
        },
        {
            category: "Tools & Others",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 70 },
                { name: "AWS", level: 75 },
                { name: "Figma", level: 80 },
                { name: "Jest", level: 75 }
            ]
        }
    ]

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Skills & Expertise</h2>
                    <p className="section-subtitle">Technologies I work with</p>
                </div>

                <div className="skills-content">
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="skill-category">
                            <h3 className="category-title">{category.category}</h3>
                            <div className="skills-grid">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <div className="skill-header">
                                            <span className="skill-name">{skill.name}</span>
                                            <span className="skill-level">{skill.level}%</span>
                                        </div>
                                                            <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ '--progress-width': `${skill.level}%` }}
                      ></div>
                    </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="skills-highlights">
                    <div className="highlight-card">
                        <div className="highlight-icon">🎯</div>
                        <h4>Problem Solving</h4>
                        <p>Strong analytical skills to tackle complex challenges</p>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon">🚀</div>
                        <h4>Performance</h4>
                        <p>Optimized code for speed and efficiency</p>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon">🔒</div>
                        <h4>Security</h4>
                        <p>Best practices for secure applications</p>
                    </div>
                    <div className="highlight-card">
                        <div className="highlight-icon">📱</div>
                        <h4>Responsive</h4>
                        <p>Mobile-first design approach</p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Skills 