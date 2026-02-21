import PipelineCanvas from './PipelineCanvas';

export default function Hero() {
    return (
        <section id="hero" className="hero">
            <PipelineCanvas />

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
                    <a href="#projects" className="btn btn-primary">
                        View Projects
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Get in Touch
                    </a>
                </div>
            </div>

            <div className="scroll-indicator fade-up delay-4">
                <span>Scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    );
}
