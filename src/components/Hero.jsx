import { TOURNAMENT } from '../data/mockData'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container hero__content">
        <span className="hero__eyebrow">{TOURNAMENT.hosts.join(' · ')} 2026</span>
        <h1 className="hero__title">
          FIFA <span className="hero__title-accent">World Cup</span> 2026
        </h1>
        <p className="hero__subtitle">
          The world's biggest football tournament arrives with {TOURNAMENT.teamsCount} nations,{' '}
          {TOURNAMENT.matchesCount} matches, and {TOURNAMENT.venuesCount} stadiums across three
          countries. Kickoff is coming — get ready.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#schedule">
            View Schedule
          </a>
          <a className="btn btn--ghost" href="#highlights">
            Tournament Highlights
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
