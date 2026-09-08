import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Races from './components/Races.jsx'
import PlanYourRace from './components/PlanYourRace.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Races />
        <PlanYourRace />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
