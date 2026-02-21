import useMultiReveal from '../hooks/useMultiReveal';

const PROJECTS = [
    {
        num: '01',
        title: 'Basic CSV to Database ETL',
        stack: ['Python', 'SQLite'],
        problem:
            'Load simple CSV files, clean missing values, and store the processed data into a relational database for analysis.',
        architecture: [
            'CSV Files',
            'Python (Data Cleaning)',
            'SQLite Database',
            'SQL Queries',
        ],
        learnings: [
            'Read and process CSV files using Python',
            'Handled missing and incorrect data values',
            'Inserted cleaned data into a database',
            'Wrote basic SQL queries for analysis',
        ],
    },
    {
        num: '02',
        title: 'Web Log Analyzer (Beginner)',
        stack: ['Python', 'Regex'],
        problem:
            'Analyze simple web server log files to find request counts, error rates, and most visited pages.',
        architecture: [
            'Log Files',
            'Python (Parsing)',
            'In-Memory Analysis',
            'Summary Output',
        ],
        learnings: [
            'Parsed text files using regular expressions',
            'Extracted useful fields from unstructured data',
            'Computed basic metrics like counts and frequencies',
            'Improved problem-solving with real-world data',
        ],
    },
    {
        num: '03',
        title: 'Simple Event Stream Simulator',
        stack: ['Python'],
        problem:
            'Simulate user events such as clicks and page views to understand how streaming data is generated and consumed.',
        architecture: [
            'Event Generator',
            'In-Memory Queue',
            'Event Consumer',
            'Console Output',
        ],
        learnings: [
            'Generated fake event data programmatically',
            'Understood producer and consumer concepts',
            'Worked with timestamps and event types',
            'Built confidence with streaming fundamentals',
        ],
    },
    {
        num: '04',
        title: 'University Database Design',
        stack: ['PostgreSQL', 'SQL'],
        problem:
            'Design a simple database schema for a university system to track students, courses, and enrollments.',
        architecture: [
            'Normalized Tables',
            'Relational Database',
            'SQL Queries',
            'Analytical Outputs',
        ],
        learnings: [
            'Designed relational tables and relationships',
            'Applied primary and foreign keys correctly',
            'Wrote analytical SQL queries',
            'Learned core data modeling concepts',
        ],
    },
];

function ArchitectureFlow({ steps }) {
    return (
        <div className="architecture-flow">
            {steps.map((step, i) => (
                <span key={i}>
                    <span className="arch-node">{step}</span>
                    {i < steps.length - 1 && <span className="arch-arrow"> → </span>}
                </span>
            ))}
        </div>
    );
}

function ProjectCard({ project }) {
    return (
        <article className="project-card reveal">
            <div className="project-number">{project.num}</div>
            <div className="project-body">
                <h3 className="project-title">{project.title}</h3>

                <div className="project-meta">
                    {project.stack.map((t) => (
                        <span className="meta-tag" key={t}>{t}</span>
                    ))}
                </div>

                <div className="project-details">
                    <div className="detail-block">
                        <h4>Problem</h4>
                        <p>{project.problem}</p>
                    </div>

                    <div className="detail-block">
                        <h4>Architecture</h4>
                        <ArchitectureFlow steps={project.architecture} />
                    </div>

                    <div className="detail-block">
                        <h4>Key Learnings</h4>
                        <ul>
                            {project.learnings.map((l, i) => (
                                <li key={i}>{l}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </article>
    );
}

export default function Projects() {
    const ref = useMultiReveal();

    return (
        <section id="projects" className="section" ref={ref}>
            <div className="container">
                <h2 className="section-title reveal">Projects</h2>
                <p className="section-subtitle reveal">
                    Each project is built end-to-end with clear architecture, documented
                    code, and real learning outcomes.
                </p>

                {PROJECTS.map((p) => (
                    <ProjectCard project={p} key={p.num} />
                ))}
            </div>
        </section>
    );
}
