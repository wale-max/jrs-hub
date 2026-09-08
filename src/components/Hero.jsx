import { IconArrow } from './icons.jsx'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-glow" />
      <div className="wrap hero-inner">
        <span className="eyebrow">Dallas–Fort Worth · 501(c)(3) Nonprofit</span>
        <h1>Community over competition. Every race is a festival.</h1>
        <p className="hero-sub">
          Johnson Run Series curates culture-first race experiences across DFW —
          5Ks to half marathons built around the people, food, and music that
          make this city home. Not just another race.
        </p>

        <div className="hero-actions">
          <a href="#races" className="btn btn-primary">
            See Upcoming Races <IconArrow />
          </a>
          <a href="#plan" className="btn btn-ghost-light">
            Let JRS Plan Your Race
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <b>5K–15K</b>
            <span>Distances hosted every season</span>
          </div>
          <div className="hero-stat">
            <b>DFW-Wide</b>
            <span>Dallas, Plano &amp; beyond</span>
          </div>
          <div className="hero-stat">
            <b>501(c)(3)</b>
            <span>Nonprofit, community-first</span>
          </div>
        </div>
      </div>
    </section>
  )
}
