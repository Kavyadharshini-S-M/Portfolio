import PipelineCanvas from './PipelineCanvas';

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <PipelineCanvas />

            <div className="hero-container container">
                <div className="hero-content">
                    <p className="hero-tag fade-up">Aspiring Data Engineer</p>

                    <h1 className="hero-title fade-up delay-1">
                        Hi, I'm <span className="highlight">Kavyadharshini S M</span>
                    </h1>

                    <p className="hero-subtitle fade-up delay-2">
                        A 3rd-year engineering student passionate about building reliable data
                        pipelines, scalable backend systems, and turning raw data into
                        actionable insights.
                    </p>

                    <p className="hero-goal fade-up delay-3">
                        <span className="goal-icon">◈</span> Goal: Build and optimize
                        production-grade data infrastructure that powers smart, data-driven
                        decisions.
                    </p>

                    <div className="hero-cta fade-up delay-4">
                        <a
                            href="/resume.pdf"
                            className="btn btn-primary btn-resume"
                            download="Kavyadharshini_SM_Resume.pdf"
                        >
                            <svg
                                className="btn-icon"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            Download Resume
                        </a>
                        <a href="#projects" className="btn btn-outline">
                            View Projects
                        </a>
                    </div>
                </div>

                <div className="hero-image-wrapper fade-up delay-2">
                    <div className="hero-image-glow"></div>
                    <div className="hero-image-border">
                        <img
                            src="/profile.jpg"
                            alt="Kavyadharshini S M"
                            className="hero-image"
                        />
                    </div>
                    <div className="hero-image-badge">
                        <span className="badge-dot"></span>
                        Available for Internships
                    </div>
                </div>
            </div>

            <div className="scroll-indicator fade-up delay-4">
                <span>Scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    );
}
