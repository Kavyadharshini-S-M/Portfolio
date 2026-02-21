import useMultiReveal from '../hooks/useMultiReveal';

const HIGHLIGHTS = [
    {
        icon: '⎔',
        title: 'Pipeline Thinking',
        desc: 'Source → Transform → Load → Serve. I design with the full data lifecycle in mind.',
    },
    {
        icon: '⬡',
        title: 'Fundamentals First',
        desc: 'Strong in DBMS, SQL, OS, and networking — the bedrock of resilient data systems.',
    },
    {
        icon: '◇',
        title: 'Builder Mindset',
        desc: 'I learn by building. Every concept gets a project, every project gets documented.',
    },
];

export default function About() {
    const ref = useMultiReveal();

    return (
        <section id="about" className="section" ref={ref}>
            <div className="container">
                <h2 className="section-title reveal">About Me</h2>

                <div className="about-grid">
                    <div className="about-text reveal">
                        <p>
                            I'm a <strong>3rd-year B.Tech student</strong> majoring in
                            Computer Science, with a deep interest in the infrastructure that
                            sits behind every data-driven product. While most people see
                            dashboards and reports, I'm fascinated by the{' '}
                            <strong>pipelines, schemas, and distributed systems</strong> that
                            make them possible.
                        </p>
                        <p>
                            My focus areas include building{' '}
                            <strong>ETL/ELT pipelines</strong>, writing efficient SQL,
                            understanding <strong>batch vs. streaming architectures</strong>,
                            and working with tools like Spark, Airflow, and cloud services. I
                            approach every project with the goal of learning how
                            production-grade data systems actually work — not just in theory,
                            but by building and breaking things hands-on.
                        </p>
                        <p>
                            What excites me most about Data Engineering is the challenge of
                            making messy, real-world data{' '}
                            <strong>reliable, accessible, and fast</strong>. Whether it's
                            designing a star schema, optimizing a slow query, or setting up a
                            simple DAG in Airflow — I genuinely enjoy the problem-solving
                            involved.
                        </p>
                    </div>

                    <div className="about-highlights">
                        {HIGHLIGHTS.map((h) => (
                            <div className="highlight-card reveal" key={h.title}>
                                <span className="highlight-icon">{h.icon}</span>
                                <h3>{h.title}</h3>
                                <p>{h.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
