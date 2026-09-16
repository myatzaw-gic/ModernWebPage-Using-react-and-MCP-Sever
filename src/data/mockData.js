export const TOURNAMENT = {
  name: 'FIFA World Cup 2026',
  hosts: ['United States', 'Mexico', 'Canada'],
  kickoff: '2026-06-11T19:00:00-05:00',
  final: '2026-07-19T15:00:00-05:00',
  teamsCount: 48,
  matchesCount: 104,
  venuesCount: 16,
}

export const HIGHLIGHTS = [
  {
    id: 'expanded-format',
    icon: '🌍',
    title: '48 Teams, Biggest Ever',
    description:
      'The tournament expands from 32 to 48 nations for the first time, spread across 12 groups in the group stage.',
  },
  {
    id: 'tri-host',
    icon: '🏟️',
    title: 'Three Host Nations',
    description:
      'For the first time, the World Cup is jointly hosted across the United States, Mexico, and Canada in 16 world-class venues.',
  },
  {
    id: 'matches',
    icon: '⚽',
    title: '105 Matches',
    description:
      'A record number of matches will be played over five weeks, culminating in the final on July 19, 2026.',
  },
  {
    id: 'legacy',
    icon: '🏆',
    title: 'A Storied Legacy',
    description:
      'From Uruguay 1930 to Qatar 2022, the World Cup has crowned champions and produced unforgettable moments for nearly a century.',
  },
]

export const TEAMS = [
  { code: 'USA', name: 'United States', group: 'A' },
  { code: 'MEX', name: 'Mexico', group: 'B' },
  { code: 'CAN', name: 'Canada', group: 'C' },
  { code: 'BRA', name: 'Brazil', group: 'D' },
  { code: 'ARG', name: 'Argentina', group: 'E' },
  { code: 'FRA', name: 'France', group: 'F' },
  { code: 'ENG', name: 'England', group: 'G' },
  { code: 'GER', name: 'Germany', group: 'H' },
  { code: 'ESP', name: 'Spain', group: 'I' },
  { code: 'JPN', name: 'Japan', group: 'J' },
  { code: 'GHA', name: 'Ghana', group: 'K' },
  { code: 'AUS', name: 'Australia', group: 'L' },
]

export const SCHEDULE = [
  {
    id: 'm1',
    stage: 'Opening Match',
    home: 'Mexico',
    away: 'TBD',
    date: '2026-06-11',
    time: '19:00',
    venue: 'Estadio Azteca, Mexico City',
  },
  {
    id: 'm2',
    stage: 'Group A',
    home: 'United States',
    away: 'TBD',
    date: '2026-06-12',
    time: '17:00',
    venue: 'MetLife Stadium, New Jersey',
  },
  {
    id: 'm3',
    stage: 'Group C',
    home: 'Canada',
    away: 'TBD',
    date: '2026-06-13',
    time: '15:00',
    venue: 'BMO Field, Toronto',
  },
  {
    id: 'm4',
    stage: 'Group D',
    home: 'Brazil',
    away: 'TBD',
    date: '2026-06-14',
    time: '18:00',
    venue: 'AT&T Stadium, Dallas',
  },
  {
    id: 'm5',
    stage: 'Group F',
    home: 'France',
    away: 'TBD',
    date: '2026-06-15',
    time: '12:00',
    venue: 'SoFi Stadium, Los Angeles',
  },
  {
    id: 'm6',
    stage: 'Final',
    home: 'TBD',
    away: 'TBD',
    date: '2026-07-19',
    time: '15:00',
    venue: 'MetLife Stadium, New Jersey',
  },
]
