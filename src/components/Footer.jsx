function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__content">
        <div className="footer__brand">
          <span className="footer__logo">⚽ World Cup 2026</span>
          <p className="footer__tagline">One tournament. Three nations. A billion fans.</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <a href="#top">Home</a>
          <a href="#highlights">Highlights</a>
          <a href="#schedule">Schedule</a>
        </nav>

        <div className="footer__social" aria-label="Social media">
          <a href="#" aria-label="Twitter">
            𝕏
          </a>
          <a href="#" aria-label="Instagram">
            📷
          </a>
          <a href="#" aria-label="YouTube">
            ▶
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          &copy; {year} World Cup Fan Hub. Fixtures and rosters shown are illustrative sample
          data, not official FIFA fixtures.
        </p>
      </div>
    </footer>
  )
}

export default Footer
