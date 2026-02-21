import useMultiReveal from '../hooks/useMultiReveal';

const CERTS = [
    {
        provider: 'MongoDB',
        title: 'MongoDB for Students',
        desc: 'End-to-end analytics workflow: ask, prepare, process, analyze, share, act. Hands-on with SQL, spreadsheets, and R.',
    },
    {
        provider: 'Infosys Springboard',
        title: 'Introduction to Data Science',
        desc: 'Introduction to data science concepts with practical exposure to data handling, analysis techniques, and real-world problem-solving.',
    },
    {
        provider: 'HP',
        title: 'Data Science and Analytics',
        desc: 'Comprehensive understanding of data science and analytics, focusing on extracting insights from data using statistical and analytical methods.',
    },
    {
        provider: 'NPTEL',
        title: 'Introduction to Machine Learning',
        desc: 'Fundamental machine learning concepts including supervised and unsupervised learning, algorithms, and practical applications.',
    },
    {
        provider: 'NPTEL',
        title: 'The Joy of computing using Python',
        desc: 'Problem-solving and computational thinking using Python, with a strong emphasis on logic, patterns, and algorithmic thinking.',
    },
    {
        provider: 'NPTEL',
        title: 'Python for Data Science',
        desc: 'Python programming fundamentals, data structures, and libraries for data manipulation and analysis.',
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
