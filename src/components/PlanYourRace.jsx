const steps = [
  {
    title: 'Course &amp; Permits',
    body: 'We help design a route that fits your distance and venue, then walk you through city permitting, road closures, and insurance so nothing catches you off guard.',
  },
  {
    title: 'Timing &amp; Registration',
    body: 'From chip timing to a clean RunSignup setup, we help you get runners registered and results out without a spreadsheet headache.',
  },
  {
    title: 'Vendors &amp; Sponsors',
    body: 'Drawing on our own sponsor network across DFW, we help line up water stops, local vendors, and brand partners for your event.',
  },
  {
    title: 'Race-Day Festival',
    body: "A JRS-style race doesn't end at the finish line — we help you build the post-race experience that keeps runners coming back.",
  },
]

export default function PlanYourRace() {
  return (
    <section className="section" id="plan">
      <div className="wrap plan-grid">
        <div>
          <div className="section-head" style={{ marginBottom: 32 }}>
            <span className="eyebrow">Let JRS Help</span>
            <h2>Let JRS help you plan your race.</h2>
            <p>
              Planning a 5K, 10K, or bigger for your organization, school, church,
              or business? JRS has run the DFW playbook — permits, timing, vendors,
              and the festival touch — and we can help you plan yours.
            </p>
          </div>

          <div className="plan-steps">
            {steps.map((s, i) => (
              <div className="plan-step" key={s.title}>
                <div className="plan-step-num">{i + 1}</div>
                <div>
                  <h4 dangerouslySetInnerHTML={{ __html: s.title }} />
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="plan-panel">
          <span className="eyebrow" style={{ color: 'var(--marigold)' }}>Distances We Plan For</span>
          <h3>From a first 5K to a full festival race.</h3>
          <div className="plan-range">
            5K <span>→</span> 10K <span>→</span> 15K+
          </div>
          <p>
            Whether it's a first-time community fun run or a multi-distance event
            with a half marathon, we'll help you scope a course and a day that
            actually fits your organization's size and budget.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ marginTop: 8, background: '#fff', color: 'var(--cobalt)' }}>
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  )
}
