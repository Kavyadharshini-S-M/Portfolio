import useMultiReveal from '../hooks/useMultiReveal';

const CATEGORIES = [
    {
        icon: '⟨/⟩',
        title: 'Programming & Core Concepts',
        tags: [
            { label: 'Python', type: 'primary' },
            { label: 'Java', type: 'primary' },
            { label: 'C++', type: 'primary' },
            { label: 'SQL', type: 'primary' },
            { label: 'Data Structures', type: 'primary' },
            { label: 'Algorithms', type: 'secondary' },
            { label: 'Basic Statistics', type: 'secondary' },
        ],
    },
    {
        icon: '📊',
        title: 'Data Science & ML Libraries',
        tags: [
            { label: 'NumPy', type: 'primary' },
            { label: 'Pandas', type: 'primary' },
            { label: 'Scikit-learn', type: 'primary' },
        ],
    },
    {
        icon: '🧠',
        title: 'Machine Learning Concepts',
        tags: [
            { label: 'Supervised Learning', type: 'primary' },
            { label: 'Unsupervised Learning', type: 'primary' },
            { label: 'Regression', type: 'secondary' },
            { label: 'Classification', type: 'secondary' },
            { label: 'Model Evaluation', type: 'secondary' },
        ],
    },
    {
        icon: '⚙',
        title: 'Tools & Platforms',
        tags: [
            { label: 'Git & GitHub', type: 'primary' },
            { label: 'Linux', type: 'primary' },
            { label: 'Jupyter Notebook', type: 'secondary' },
            { label: 'Google Colab', type: 'secondary' },
        ],
    },
];

const SOFT_SKILLS = [
    'Problem-Solving',
    'Analytical Thinking',
    'Collaboration',
    'Adaptability',
    'Fast Learner',
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

                    {/* LeetCode Widget */}
                    <div className="leetcode-widget reveal">
                        <div className="leetcode-card">
                            <div className="leetcode-header">
                                <div className="leetcode-title">
                                    <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="LeetCode" />
                                    <h3>LeetCode Stats</h3>
                                </div>
                                <a href="https://leetcode.com/u/Kavyadharshini-S-M/" target="_blank" rel="noopener noreferrer" className="leetcode-link">
                                    Profile ↗
                                </a>
                            </div>
                            <div className="leetcode-content">
                                <img
                                    src="https://leetcard.jacoblin.cool/Kavyadharshini-S-M?theme=dark&font=Inter"
                                    alt="LeetCode Stats"
                                    className="leetcode-stats-img"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Wide Soft Skills row */}
                    <div className="skill-category skill-category-wide reveal">
                        <div className="skill-header">
                            <span className="skill-icon">◈</span>
                            <h3>Soft Skills</h3>
                        </div>
                        <div className="skill-tags">
                            {SOFT_SKILLS.map((s) => (
                                <span className="tag tag-accent" key={s}>
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
