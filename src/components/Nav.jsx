import { useState } from 'react'
import { IconMenu, IconClose } from './icons.jsx'

const links = [
  { href: '#about', label: 'About' },
  { href: '#races', label: 'Races' },
  { href: '#plan', label: 'Plan Your Race' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">JRS</span>
          Johnson Run Series
        </a>

        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="#races" className="btn btn-primary btn-sm">See Upcoming Races</a>
          <button
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href="#races" className="btn btn-primary" onClick={() => setOpen(false)}>
          See Upcoming Races
        </a>
      </div>
    </header>
  )
}
