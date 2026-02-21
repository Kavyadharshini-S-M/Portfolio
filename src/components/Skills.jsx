import useMultiReveal from '../hooks/useMultiReveal';

const CATEGORIES = [
    {
        icon: '⟨/⟩',
        title: 'Programming',
        tags: [
            { label: 'Python', type: 'primary' },
            { label: 'SQL', type: 'primary' },
            { label: 'Java', type: 'secondary' },
            { label: 'Bash Scripting', type: 'secondary' },
        ],
    },
    {
        icon: '⛁',
        title: 'Databases',
        tags: [
            { label: 'MySQL', type: 'primary' },
            { label: 'PostgreSQL', type: 'primary' },
            { label: 'MongoDB', type: 'secondary' },
        ],
    },
    {
        icon: '⬡',
        title: 'Big Data',
        tags: [
            { label: 'Apache Spark', type: 'primary' },
            { label: 'Hadoop (HDFS, MapReduce)', type: 'secondary' },
            { label: 'PySpark', type: 'secondary' },
        ],
    },
    {
        icon: '⇶',
        title: 'Data Pipelines',
        tags: [
            { label: 'ETL / ELT Concepts', type: 'primary' },
            { label: 'Apache Airflow', type: 'primary' },
            { label: 'Cron-based Scheduling', type: 'secondary' },
        ],
    },
    {
        icon: '☁',
        title: 'Cloud Platforms',
        tags: [
            { label: 'AWS (S3, EC2)', type: 'primary' },
            { label: 'GCP (BigQuery)', type: 'secondary' },
            { label: 'Cloud Fundamentals', type: 'secondary' },
        ],
    },
    {
        icon: '⚙',
        title: 'DevOps & Tools',
        tags: [
            { label: 'Git & GitHub', type: 'primary' },
            { label: 'Linux CLI', type: 'primary' },
            { label: 'Docker', type: 'secondary' },
            { label: 'VS Code', type: 'secondary' },
        ],
    },
];

const CONCEPTS = [
    'Data Modeling (Star / Snowflake)',
    'Indexing & Partitioning',
    'Batch vs Streaming',
    'Normalization & Denormalization',
    'Query Optimization',
    'Data Warehousing',
];

export default function Skills() {
    const ref = useMultiReveal();

    return (
        <section id="skills" className="section section-alt" ref={ref}>
            <div className="container">
                <h2 className="section-title reveal">Technical Skills</h2>

                <div className="skills-grid">
                    {CATEGORIES.map((cat) => (
                        <div className="skill-category reveal" key={cat.title}>
                            <div className="skill-header">
                                <span className="skill-icon">{cat.icon}</span>
                                <h3>{cat.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {cat.tags.map((t) => (
                                    <span className={`tag tag-${t.type}`} key={t.label}>
                                        {t.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Wide concepts row */}
                    <div className="skill-category skill-category-wide reveal">
                        <div className="skill-header">
                            <span className="skill-icon">◈</span>
                            <h3>Core Concepts</h3>
                        </div>
                        <div className="skill-tags">
                            {CONCEPTS.map((c) => (
                                <span className="tag tag-accent" key={c}>
                                    {c}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
