import useMultiReveal from '../hooks/useMultiReveal';

const ITEMS = [
    {
        icon: '⟠',
        title: 'SQL Practice',
        desc: 'Solved <strong>150+ SQL problems</strong> on LeetCode and HackerRank covering joins, subqueries, window functions, CTEs, and optimization.',
    },
    {
        icon: '⬢',
        title: 'Smart India Hackathon',
        desc: 'Participated in SIH 2025 — built a <strong>data pipeline prototype</strong> for a government dataset. Reached internal college finals.',
    },
    {
        icon: '◈',
        title: 'College Data Project',
        desc: 'Led a team of 4 to build a <strong>student attendance analytics dashboard</strong> using Python, MySQL, and Streamlit for the department.',
    },
    {
        icon: '⎔',
        title: 'Open Source',
        desc: 'Contributed documentation fixes and test cases to <strong>2 open-source Python projects</strong> on GitHub. Learning to read and contribute to large codebases.',
    },
    {
        icon: '◇',
        title: 'DSA Practice',
        desc: 'Solved <strong>200+ problems</strong> on LeetCode (Arrays, Hashing, Trees, Graphs). Focus on writing clean, efficient code.',
    },
    {
        icon: '⬡',
        title: 'Technical Workshops',
        desc: 'Attended college workshops on <strong>Docker, Git, and Linux administration</strong>. Organized a peer session on SQL query optimization.',
    },
];

export default function Achievements() {
    const ref = useMultiReveal();

    return (
        <section id="achievements" className="section section-alt" ref={ref}>
            <div className="container">
                <h2 className="section-title reveal">Achievements &amp; Practice</h2>

                <div className="achievements-grid">
                    {ITEMS.map((item) => (
                        <div className="achievement-card reveal" key={item.title}>
                            <span className="achievement-icon">{item.icon}</span>
                            <h3>{item.title}</h3>
                            <p dangerouslySetInnerHTML={{ __html: item.desc }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
