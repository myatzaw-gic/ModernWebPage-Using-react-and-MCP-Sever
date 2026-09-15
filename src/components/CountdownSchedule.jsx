import { useEffect, useState } from 'react'
import { SCHEDULE, TOURNAMENT } from '../data/mockData'

function getTimeLeft(target) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now())
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target))

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000)
    return () => clearInterval(timer)
  }, [target])

  return timeLeft
}

function formatMatchDate(dateStr, timeStr) {
  const date = new Date(`${dateStr}T${timeStr}:00`)
  return date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  })
}

function getNextMatch() {
  const now = Date.now()
  const upcoming = SCHEDULE.filter((m) => new Date(`${m.date}T${m.time}:00`).getTime() > now).sort(
    (a, b) => new Date(`${a.date}T${a.time}:00`) - new Date(`${b.date}T${b.time}:00`),
  )
  return upcoming[0] ?? null
}

function CountdownSchedule() {
  const nextMatch = getNextMatch()
  const target = nextMatch ? `${nextMatch.date}T${nextMatch.time}:00` : TOURNAMENT.final
  const { days, hours, minutes, seconds } = useCountdown(target)

  return (
    <section className="countdown-schedule" id="schedule">
      <div className="container">
        <h2 className="section__title section__title--light">
          {nextMatch ? `Countdown to ${nextMatch.stage}` : 'Tournament Underway'}
        </h2>
        <p className="section__subtitle section__subtitle--light">
          {nextMatch
            ? `Time remaining until ${nextMatch.home} vs ${nextMatch.away} at ${nextMatch.venue}.`
            : 'The final has been played — check back for the next edition.'}
        </p>

        <div className="countdown">
          {[
            { label: 'Days', value: days },
            { label: 'Hours', value: hours },
            { label: 'Minutes', value: minutes },
            { label: 'Seconds', value: seconds },
          ].map((unit) => (
            <div className="countdown__unit" key={unit.label}>
              <span className="countdown__value">{String(unit.value).padStart(2, '0')}</span>
              <span className="countdown__label">{unit.label}</span>
            </div>
          ))}
        </div>

        <div className="schedule">
          <h3 className="schedule__title">Match Schedule</h3>
          <ul className="schedule__list">
            {SCHEDULE.map((match) => (
              <li className="schedule__item" key={match.id}>
                <span className="schedule__stage">{match.stage}</span>
                <span className="schedule__teams">
                  {match.home} <span className="schedule__vs">vs</span> {match.away}
                </span>
                <span className="schedule__date">{formatMatchDate(match.date, match.time)}</span>
                <span className="schedule__venue">{match.venue}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default CountdownSchedule
