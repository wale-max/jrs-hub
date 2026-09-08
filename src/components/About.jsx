const pillars = [
  {
    icon: '🏃🏾',
    bg: '#fdece3',
    title: 'Culture First',
    body: "Every JRS race is built as a festival, not just a start line — local food, music, and vendors that reflect DFW's own culture.",
  },
  {
    icon: '🤝',
    bg: '#eaf1e8',
    title: 'Community Over Competition',
    body: 'From race-day volunteers to our runner ambassadors, JRS is built with the community it runs through, not just for them.',
  },
  {
    icon: '🌱',
    bg: '#eaeef4',
    title: 'Built to Grow',
    body: "We're a nonprofit reinvesting in DFW — new race cities, deeper local partnerships, and training support are on the way for 2027.",
  },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">About JRS</span>
          <h2>A Dallas–Fort Worth running culture, built one race at a time.</h2>
          <p>
            Johnson Run Series started with a simple idea: DFW runners deserve races
            that feel like a celebration of the city, not a logistics exercise. Today
            that means multiple races a year, a growing ambassador program, and
            partnerships with local businesses who believe in the same thing.
          </p>
        </div>

        <div className="pillars">
          {pillars.map((p) => (
            <div className="pillar" key={p.title}>
              <div className="pillar-icon" style={{ background: p.bg }}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mission-card">
          <span className="eyebrow" style={{ color: 'var(--marigold)' }}>Our Mission</span>
          <p className="mission-quote">
            &ldquo;Johnson Run Series is a 501(c)(3) nonprofit with a simple mission: to
            create culture-first race series that puts community over competition by
            curating an experience and festival, not just another race.&rdquo;
          </p>
          <div className="mission-meta">
            <span className="badge">📍 Dallas &amp; Plano, TX</span>
            <span className="badge">🎗️ 501(c)(3) Nonprofit</span>
            <span className="badge">📈 Expanding races through 2027</span>
          </div>
        </div>
      </div>
    </section>
  )
}
