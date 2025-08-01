import React, { useState, useEffect } from 'react'
import './Navbar.css'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-logo">
                    <span className="logo-text">Portfolio</span>
                </div>

                        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-item" onClick={() => scrollToSection('hero')}>
            Home
          </div>
          <div className="nav-item" onClick={() => scrollToSection('about')}>
            About
          </div>
          <div className="nav-item" onClick={() => scrollToSection('skills')}>
            Skills
          </div>
          <div className="nav-item" onClick={() => scrollToSection('projects')}>
            Projects
          </div>
          <div className="nav-item" onClick={() => scrollToSection('contact')}>
            Contact
          </div>
          
        </div>

                <div
                    className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 