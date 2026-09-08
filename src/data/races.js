// Each race is self-contained — update dates, links, and images here each
// season without touching any component code. `heroImage` paths point to
// /public/images/races/*, drop a new file in and update the path to refresh
// a race's look for its next run.
export const races = [
  {
    id: 'run-of-remembrance',
    status: 'upcoming',
    name: 'Run of Remembrance',
    tagline: 'A Día de los Muertos-themed run honoring who we carry with us.',
    date: 'October 31, 2026',
    location: 'Dallas, TX',
    distances: ['5K', '10K'],
    heroImage: '/images/races/run-of-remembrance.jpg',
    accent: 'marigold',
    description:
      "Our fall signature event. Runners are invited to run in honor of a loved one — with community altars, music, and a post-race festival that turns grief and gratitude into something shared.",
    signupUrl: 'https://runsignup.com/Race/TX/Dallas/JRSRunFest',
  },
  {
    id: 'run-fest',
    status: 'season-recap',
    name: 'Run Fest',
    tagline: "JRS's flagship summer festival race.",
    date: 'August 2026',
    location: 'Plano, TX',
    distances: ['5K', '10K', '15K'],
    heroImage: '/images/races/run-fest.jpg',
    accent: 'sunrise',
    description:
      'Our biggest race of the year — three distances, a full vendor village, and a shakeout run with Fleet Feet DFW the night before. Returning summer 2027.',
    signupUrl: 'https://runsignup.com/Race/TX/Plano/JRSRunFest',
  },
  {
    id: 'nations-run',
    status: 'season-recap',
    name: 'Nations Run & Festival',
    tagline: 'Celebrating the cultures that make DFW home.',
    date: 'Spring 2027 (returning)',
    location: 'Dallas, TX',
    distances: ['5K', '10K', 'Half Marathon'],
    heroImage: '/images/races/nations-run.jpg',
    accent: 'cobalt',
    description:
      'A spring celebration of DFW\'s global community — international food, music, and a course built for every pace. Details for the next edition are coming soon.',
    signupUrl: null,
  },
  {
    id: 'god-loves-dallas',
    status: 'coming-soon',
    name: 'God Loves Dallas',
    tagline: 'A new JRS x Social Dallas collaboration.',
    date: 'Date TBA',
    location: 'Dallas, TX',
    distances: ['TBA'],
    heroImage: '/images/races/god-loves-dallas.jpg',
    accent: 'plum',
    description:
      "In partnership with Social Dallas, we're building a brand-new community run in the heart of the city. Follow @johnsonrunseries for the announcement.",
    signupUrl: null,
  },
]

export const statusLabels = {
  upcoming: 'Sign Up Open',
  'season-recap': 'Returning Next Season',
  'coming-soon': 'Coming Soon',
}
