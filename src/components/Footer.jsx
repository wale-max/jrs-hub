import { IconInstagram, IconMail } from './icons.jsx'

const INSTAGRAM_HANDLE = 'johnsonrunseries'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#top" className="brand">
              <span className="brand-mark">JRS</span>
              Johnson Run Series
            </a>
            <p>
              A Dallas–Fort Worth 501(c)(3) nonprofit putting community over
              competition, one race at a time.
            </p>
            <div className="social-row">
              <a
                className="social-btn"
                href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`}
                target="_blank"
                rel="noreferrer"
                aria-label="JRS on Instagram"
              >
                <IconInstagram />
              </a>
              <a className="social-btn" href="mailto:wale@johnsonrunseries.com" aria-label="Email JRS">
                <IconMail />
              </a>
            </div>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h5>Explore</h5>
              <a href="#about">About Us</a>
              <a href="#races">Races</a>
              <a href="#plan">Plan Your Race</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <h5>Connect</h5>
              <a href={`https://www.instagram.com/${INSTAGRAM_HANDLE}/`} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href="mailto:wale@johnsonrunseries.com">Email Us</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} Johnson Run Series. All rights reserved.</span>
          <span>Johnson Run Series is a registered 501(c)(3) nonprofit organization.</span>
        </div>
      </div>
    </footer>
  )
}
