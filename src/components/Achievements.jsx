import useMultiReveal from '../hooks/useMultiReveal';

const ITEMS = [
    {
        icon: '⟠',
        title: 'SQL Practice',
        desc: 'Practicing SQL on a daily basis',
    },
    {
        icon: '⬢',
        title: 'Smart India Hackathon',
        desc: 'Participated in SIH 2025 Grand Finale @ IIT Roorkee, Uttarakhand',
    },
    {
        icon: '◈',
        title: 'College Project',
        desc: 'Leading a team to build a <strong>Robotic Wrist Hand Orthosis</strong> for the partially paralysed people for doing independant daily activities',
    },
    {
        icon: '⎔',
        title: 'Open Source',
        desc: 'Cooking something',
    },
    {
        icon: '◇',
        title: 'DSA Practice',
        desc: 'Solving Leetcode problems on a daily basis',
    },
    {
        icon: '⬡',
        title: 'Technical Workshops',
        desc: 'Attended college workshops on <strong>AI, Git, and Linux administration</strong>.',
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
