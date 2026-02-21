import { useState } from 'react';
import useMultiReveal from '../hooks/useMultiReveal';

const LINKS = [
    {
        id: 'contact-github',
        href: 'https://github.com/Kavyadharshini-S-M',
        label: 'GitHub',
        value: 'Kavyadharshini-S-M',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
        ),
    },
    {
        id: 'contact-linkedin',
        href: 'https://www.linkedin.com/in/kavyadharshini-s-m-a03505293',
        label: 'LinkedIn',
        value: 'Kavyadharshini-S-M',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
    },
    {
        id: 'contact-email',
        href: 'mailto:smkavyadharshini@email.com',
        label: 'Email',
        value: 'smkavyadharshini@email.com',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
        ),
    },
    {
        id: 'contact-resume',
        href: '/resume.pdf',
        label: 'Resume',
        value: 'Kavyadharshini_Resume.pdf',
        download: true,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
        ),
    },
];

export default function Contact() {
    const ref = useMultiReveal();
    const [status, setStatus] = useState(null); // 'sending', 'success', 'error'

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/mqedyayb", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section section-alt" ref={ref}>
            <div className="container">
                <h2 className="section-title centered reveal">Get In Touch</h2>
                <p className="section-subtitle centered reveal">
                    I'm currently looking for <strong>Data Engineering internships</strong>.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="contact-container reveal">
                    {/* Left: Contact Info */}
                    <div className="contact-info">
                        {LINKS.map((link) => (
                            <a
                                key={link.id}
                                id={link.id}
                                href={link.href}
                                className="contact-card"
                                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                download={link.download ? link.value : undefined}
                            >
                                <div className="contact-icon">{link.icon}</div>
                                <div className="contact-details">
                                    <span className="contact-label">{link.label}</span>
                                    <span className="contact-value">{link.value}</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Right: Contact Form */}
                    <div className="contact-form-card">
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-input"
                                        placeholder="Your Name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-input"
                                        placeholder="your@email.com"
                                        required
                                    />
                                </div>
                                <div className="form-group full-width">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="form-input"
                                        placeholder="What's this about?"
                                        required
                                    />
                                </div>
                                <div className="form-group full-width">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        className="form-textarea"
                                        placeholder="Your message here..."
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary form-submit"
                                disabled={status === 'sending'}
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <div className="form-status success">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="form-status error">
                                    Something went wrong. Please try again or use the email link.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
