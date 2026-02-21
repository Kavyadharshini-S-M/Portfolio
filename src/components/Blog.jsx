import useMultiReveal from '../hooks/useMultiReveal';

const POSTS = [
    {
        date: 'Feb 2026',
        title: 'Understanding ETL vs ELT: When to Use What',
        desc: 'A practical breakdown of ETL and ELT patterns with examples from my retail pipeline project. Covers trade-offs in cost, latency, and schema design.',
        tags: ['ETL', 'Data Pipeline', 'Architecture'],
    },
    {
        date: 'Feb 2026',
        title: 'SQL Query Optimization: 5 Things I Learned the Hard Way',
        desc: 'From index-blind WHERE clauses to unnecessary subqueries — practical SQL optimization lessons with EXPLAIN ANALYZE examples.',
        tags: ['SQL', 'PostgreSQL', 'Performance'],
    },
    {
        date: 'Feb 2026',
        title: 'Apache Spark for Beginners: RDDs, DataFrames, and When to Use Each',
        desc: "A beginner-friendly guide to Spark's core abstractions, with code examples in PySpark and performance comparisons.",
        tags: ['Spark', 'PySpark', 'Big Data'],
    },
];

export default function Blog() {
    const ref = useMultiReveal();

    return (
        <section id="blog" className="section" ref={ref}>
            <div className="container">
                <h2 className="section-title reveal">Blog &amp; Knowledge Sharing</h2>
                <p className="section-subtitle reveal">
                    I write to solidify my understanding. Here are some topics I've
                    documented and shared.
                </p>

                <div className="blog-grid">
                    {POSTS.map((post) => (
                        <article className="blog-card reveal" key={post.title}>
                            <div className="blog-date">{post.date}</div>
                            <h3>{post.title}</h3>
                            <p>{post.desc}</p>
                            <div className="blog-tags">
                                {post.tags.map((t) => (
                                    <span key={t}>{t}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
