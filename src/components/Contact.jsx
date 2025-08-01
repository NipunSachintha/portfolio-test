import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    }

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/NipunSachintha',
            icon: '📁',
            color: '#333'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/nipun-gunarathna',
            icon: '💼',
            color: '#0077b5'
        }
    ]

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Let's work together on your next project</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">📍</div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Badulla, Sri Lanka</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📧</div>
                                <div>
                                    <h4>Email</h4>
                                    <p>nipunsachintha.22@cse.mrt.ac.lk</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="contact-icon">📱</div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+94-713157791</p>
                                </div>
                            </div>
                        </div>

                        <div className="social-links">
                            <h4>Follow Me</h4>
                            <div className="social-icons">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        style={{ '--hover-color': social.color }}
                                    >
                                        <span>{social.icon}</span>
                                        <span className="social-name">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact 