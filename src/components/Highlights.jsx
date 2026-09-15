import { HIGHLIGHTS, TEAMS } from '../data/mockData'

function Highlights() {
  return (
    <section className="highlights" id="highlights">
      <div className="container">
        <h2 className="section__title">Tournament Highlights</h2>
        <p className="section__subtitle">
          Everything that makes World Cup 2026 the most ambitious edition yet.
        </p>

        <div className="highlights__grid">
          {HIGHLIGHTS.map((item) => (
            <article className="highlight-card" key={item.id}>
              <span className="highlight-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3 className="highlight-card__title">{item.title}</h3>
              <p className="highlight-card__desc">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="teams">
          <h3 className="teams__title">Teams to Watch</h3>
          <ul className="teams__list">
            {TEAMS.map((team) => (
              <li className="teams__item" key={team.code}>
                <span className="teams__code">{team.code}</span>
                <span className="teams__name">{team.name}</span>
                <span className="teams__group">Group {team.group}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Highlights
