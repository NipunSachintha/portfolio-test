import React, { useState, useEffect } from 'react'
import './Hero.css'
import profilePhoto from '../assets/2.jpg'

const Hero = () => {
    const [currentText, setCurrentText] = useState(0)
    const texts = [
        "Full-Stack Developer",
        "UI/UX Designer",
        "Problem Solver",
        "Creative Thinker"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % texts.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [texts.length])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="hero">
            {/* Shooting Stars */}
            <div className="shooting-stars">
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
                <div className="shooting-star"></div>
            </div>

            {/* Nebula effects */}
            <div className="nebula nebula-1"></div>
            <div className="nebula nebula-2"></div>
            <div className="nebula nebula-3"></div>

            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Nipun Gunarathna</span>
                    </h1>
                    <div className="hero-subtitle">
                        I'm a <span className="animated-text">{texts[currentText]}</span>
                    </div>
                    <p className="hero-description">
                        Passionate about creating beautiful, functional, and user-centered digital experiences.
                        Let's build something amazing together!
                    </p>

                    <div className="hero-buttons">
                        <button
                            className="btn btn-primary"
                            onClick={() => scrollToSection('projects')}
                        >
                            View My Work
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => scrollToSection('contact')}
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="profile-card">
                        <div className="profile-avatar">
                            <div className="avatar-placeholder">
                                <img
                                    src={profilePhoto}
                                    alt="Nipun Gunarathna"
                                    className="profile-image"
                                />
                            </div>
                        </div>
                        <div className="profile-stats">
                            <div className="stat">
                                <span className="stat-number">3+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-arrow"></div>
            </div>
        </section>
    )
}

export default Hero 