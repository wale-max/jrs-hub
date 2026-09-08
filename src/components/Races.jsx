import { useState } from 'react'
import { races, statusLabels } from '../data/races.js'
import { IconCalendar, IconPin, IconArrow } from './icons.jsx'

const accentGradients = {
  sunrise: 'linear-gradient(135deg, #e8552a, #f0a537)',
  marigold: 'linear-gradient(135deg, #f0a537, #7a4a6e)',
  cobalt: 'linear-gradient(135deg, #26415c, #3c6e52)',
  plum: 'linear-gradient(135deg, #7a4a6e, #e8552a)',
}

function RaceMedia({ race }) {
  const [broken, setBroken] = useState(false)
  const gradient = accentGradients[race.accent] || accentGradients.sunrise

  return (
    <div className="race-media">
      {!broken && (
        <img
          src={race.heroImage}
          alt={`${race.name} race scene`}
          onError={() => setBroken(true)}
        />
      )}
      {broken && (
        <div className="race-media-fallback" style={{ background: gradient }} />
      )}
      <span className="race-status">{statusLabels[race.status]}</span>
    </div>
  )
}

export default function Races() {
  return (
    <section className="section section-alt" id="races">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Race Calendar</span>
          <h2>Every race, updated season to season.</h2>
          <p>
            Each JRS race gets its own page and sign-up link — swapped in fresh as
            dates, courses, and themes change from one season to the next.
          </p>
        </div>

        <div className="race-grid">
          {races.map((race) => (
            <article className="race-card" key={race.id}>
              <RaceMedia race={race} />
              <div className="race-body">
                <h3>{race.name}</h3>
                <p className="race-tagline">{race.tagline}</p>

                <div className="race-meta">
                  <span><IconCalendar /> {race.date}</span>
                  <span><IconPin /> {race.location}</span>
                </div>

                <div className="race-distances">
                  {race.distances.map((d) => (
                    <span className="chip" key={d}>{d}</span>
                  ))}
                </div>

                <p className="race-desc">{race.description}</p>

                <div className="race-actions">
                  {race.signupUrl ? (
                    <a
                      href={race.signupUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Sign Up <IconArrow />
                    </a>
                  ) : (
                    <button className="btn btn-disabled btn-sm" disabled>
                      Sign-Up Not Yet Open
                    </button>
                  )}
                  <a href="#contact" className="btn btn-ghost btn-sm">
                    Ask a Question
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
