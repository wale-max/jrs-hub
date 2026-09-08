import { useState } from 'react'
import { IconMail, IconPhone, IconPin, IconInstagram } from './icons.jsx'

const CONTACT_EMAIL = 'wale@johnsonrunseries.com'
const INSTAGRAM_HANDLE = 'johnsonrunseries'

const reasons = [
  'General Question',
  'Race Planning Help',
  'Sponsorship / Partnership',
  'Vendor Interest',
  'Volunteer',
  'Something Else',
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: reasons[0],
    message: '',
  })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent(`JRS Website — ${form.reason} (${form.name})`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nReason: ${form.reason}\n\n${form.message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="section section-dark" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info">
          <div className="section-head" style={{ marginBottom: 0 }}>
            <span className="eyebrow">Get In Touch</span>
            <h2>Questions, sponsorships, or race planning — reach out.</h2>
            <p>
              Whether you're signing up for a race, want to bring JRS to your
              organization, or you're a brand looking to partner, we read every
              message.
            </p>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><IconMail /></div>
            <div>
              <h4>Email</h4>
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><IconPin /></div>
            <div>
              <h4>Where We Run</h4>
              <p>Dallas &amp; Plano — and expanding across DFW</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon"><IconPhone /></div>
            <div>
              <h4>Founder</h4>
              <p>Wale Johnson, Founder &amp; Race Director</p>
            </div>
          </div>

          <div className="ig-card">
            <span style={{ fontSize: 13, opacity: 0.85 }}>Follow the community</span>
            <a href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`} target="_blank" rel="noreferrer">
              <IconInstagram /> @{INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="form-card">
          {sent ? (
            <div className="form-success">
              <h3>Your email app should be open now.</h3>
              <p>
                If it didn't launch, email us directly at{' '}
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--sunrise-dark)' }}>
                  {CONTACT_EMAIL}
                </a>. We'll get back to you soon.
              </p>
              <button className="btn btn-ghost btn-sm" style={{ width: 'fit-content' }} onClick={() => setSent(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" required value={form.name} onChange={update('name')} placeholder="Your name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="you@email.com" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="reason">What's this about?</label>
                <select id="reason" value={form.reason} onChange={update('reason')}>
                  {reasons.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  value={form.message}
                  onChange={update('message')}
                  placeholder="Tell us a bit about what you need — race distance, timeline, organization, etc."
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Send Message
              </button>
              <p className="form-note">
                Submitting opens your email app with this message pre-filled to {CONTACT_EMAIL}.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
