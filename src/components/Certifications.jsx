import useMultiReveal from '../hooks/useMultiReveal';

const CERTS = [
    {
        provider: 'Coursera',
        title: 'Google Data Analytics Professional Certificate',
        desc: 'End-to-end analytics workflow: ask, prepare, process, analyze, share, act. Hands-on with SQL, spreadsheets, and R.',
    },
    {
        provider: 'Udemy',
        title: 'Apache Spark with Python — PySpark',
        desc: 'RDDs, DataFrames, Spark SQL, and hands-on processing of large datasets in a local cluster setup.',
    },
    {
        provider: 'YouTube + Docs',
        title: 'Apache Airflow — Self-Taught',
        desc: 'Built DAGs from scratch following the official Airflow documentation and community tutorials. Learned operators, hooks, and XCOM.',
    },
    {
        provider: 'Coursera',
        title: 'Introduction to Big Data — UC San Diego',
        desc: 'Foundations of Hadoop ecosystem, MapReduce paradigm, and distributed computing concepts.',
    },
    {
        provider: 'AWS',
        title: 'AWS Cloud Practitioner Essentials',
        desc: 'Core AWS services (S3, EC2, IAM, RDS), cloud architecture fundamentals, and pricing models.',
    },
    {
        provider: 'Self-Paced',
        title: 'Docker for Beginners',
        desc: 'Containerization basics, writing Dockerfiles, multi-container apps with Docker Compose for local dev environments.',
    },
];

export default function Certifications() {
    const ref = useMultiReveal();

    return (
        <section id="certifications" className="section" ref={ref}>
            <div className="container">
                <h2 className="section-title reveal">Certifications &amp; Learning</h2>
                <p className="section-subtitle reveal">
                    I believe in learning by doing. Every course listed here has a
                    companion project or hands-on exercise.
                </p>

                <div className="cert-grid">
                    {CERTS.map((cert) => (
                        <div className="cert-card reveal" key={cert.title}>
                            <div className="cert-provider">{cert.provider}</div>
                            <h3>{cert.title}</h3>
                            <p>{cert.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
