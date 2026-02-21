import { useState, useEffect } from 'react';

const NAV_ITEMS = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#blog', label: 'Blog' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navHeight = document.getElementById('main-nav')?.offsetHeight || 64;
            window.scrollTo({
                top: target.offsetTop - navHeight - 16,
                behavior: 'smooth',
            });
        }
        setMenuOpen(false);
    };

    return (
        <nav id="main-nav" className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <a
                href="#hero"
                className="nav-logo"
                onClick={(e) => handleNavClick(e, '#hero')}
            >
                <span className="logo-bracket">&lt;</span>Kavyadharshini S M
                <span className="logo-bracket"> /&gt;</span>
            </a>

            <button
                className="nav-toggle"
                aria-label="Toggle navigation"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span /><span /><span />
            </button>

            <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
                {NAV_ITEMS.map(({ href, label }) => (
                    <li key={href}>
                        <a href={href} onClick={(e) => handleNavClick(e, href)}>
                            {label}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        href="#contact"
                        className="nav-cta"
                        onClick={(e) => handleNavClick(e, '#contact')}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
