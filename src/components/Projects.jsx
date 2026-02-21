import useMultiReveal from '../hooks/useMultiReveal';

const PROJECTS = [
    {
        num: '01',
        title: 'Retail Sales Batch ETL Pipeline',
        stack: ['Python', 'PostgreSQL', 'Apache Airflow', 'Docker'],
        problem:
            'A simulated retail company generates daily CSV sales files that need to be cleaned, transformed, and loaded into a PostgreSQL data warehouse for weekly business reporting.',
        architecture: [
            'CSV Files (Source)',
            'Python (Clean + Transform)',
            'PostgreSQL (Star Schema)',
            'SQL Analytics Queries',
        ],
        learnings: [
            'Designed a star schema with fact and dimension tables for retail analytics',
            'Built idempotent DAGs in Airflow with proper error handling and retry logic',
            'Handled data quality issues: null values, duplicate records, type mismatches',
            'Containerized the entire pipeline using Docker Compose for reproducibility',
        ],
        github: 'https://github.com/kavyadharshini',
    },
    {
        num: '02',
        title: 'Web Server Log Processor with PySpark',
        stack: ['PySpark', 'HDFS', 'Python', 'Regex'],
        problem:
            'Analyze 2GB+ of raw Apache web server log files to extract traffic patterns, error rates, peak hours, and top endpoints — too large for single-machine processing with pandas.',
        architecture: [
            'Raw Log Files',
            'PySpark (Parse + Aggregate)',
            'Parquet on HDFS',
            'Jupyter Notebook (Analysis)',
        ],
        learnings: [
            'Parsed unstructured logs using regex in Spark — understood RDDs vs DataFrames',
            'Partitioned output by date for efficient downstream querying',
            'Compared Spark execution plans: narrow vs wide transformations',
            'Learned when distributed processing is actually necessary vs. overkill',
        ],
        github: 'https://github.com/kavyadharshini',
    },
    {
        num: '03',
        title: 'Real-Time Clickstream Ingestion Simulator',
        stack: ['Python', 'Apache Kafka', 'MongoDB', 'Flask'],
        problem:
            'Simulate a real-time e-commerce clickstream where user events (page views, clicks, add-to-cart) are produced, consumed, and stored — demonstrating streaming ingestion fundamentals.',
        architecture: [
            'Python Producer (Fake Events)',
            'Kafka Topic',
            'Consumer (Transform)',
            'MongoDB + Flask Dashboard',
        ],
        learnings: [
            "Understood Kafka's producer-consumer model, partitions, and consumer groups",
            'Designed JSON event schemas with timestamp, session ID, and event type',
            'Built a simple Flask dashboard to visualize events per minute in real-time',
            'Learned the difference between at-least-once vs. exactly-once semantics',
        ],
        github: 'https://github.com/kavyadharshini',
    },
    {
        num: '04',
        title: 'University Data Warehouse Schema Design',
        stack: ['PostgreSQL', 'SQL', 'dbdiagram.io', 'Data Modeling'],
        problem:
            'Design a data warehouse schema for a university administration system that supports analytical queries: enrollment trends, course performance, department-wise metrics, and faculty workload.',
        architecture: [
            'OLTP Tables (Normalized)',
            'SQL Transformations',
            'Star Schema (Fact + Dims)',
            'Analytical SQL Queries',
        ],
        learnings: [
            'Modeled fact tables (enrollments, grades) and dimension tables (students, courses, time)',
            'Implemented slowly changing dimensions (SCD Type 2) for faculty records',
            'Wrote complex analytical queries using window functions and CTEs',
            'Documented the entire schema with ER diagrams and data dictionary',
        ],
        github: 'https://github.com/kavyadharshini',
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

                <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View on GitHub <span className="arrow">→</span>
                </a>
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
