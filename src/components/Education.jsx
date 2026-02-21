import useMultiReveal from '../hooks/useMultiReveal';

const COURSES = [
    'Database Management Systems',
    'Operating Systems',
    'Computer Networks',
    'Data Structures & Algorithms',
    'Big Data Analytics',
    'Object-Oriented Programming',
    'Software Engineering',

];

export default function Education() {
    const ref = useMultiReveal();

    return (
        <section id="education" className="section section-alt" ref={ref}>
            <div className="container">
                <h2 className="section-title reveal">Education</h2>

                <div className="education-card reveal">
                    <div className="edu-dot" />
                    <div className="edu-content">
                        <h3>Integrated M.Tech in Computer Science &amp; Engineering (5 Years)</h3>
                        <p className="edu-institution">Sri Sai Ram Engineering College, Chennai, India</p>
                        <p className="edu-year">
                            2023 – 2028  &nbsp;|&nbsp; 3rd Year
                        </p>

                        <div className="edu-coursework">
                            <h4>Relevant Coursework</h4>
                            <div className="coursework-tags">
                                {COURSES.map((c) => (
                                    <span key={c}>{c}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
