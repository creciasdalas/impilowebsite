import AboutHero from '../../components/AboutHero/AboutHero.tsx'
import Approach from '../../components/Approach/Approach.tsx'
import ImportantInfo from '../../components/ImportantInfo/ImportantInfo.tsx'
import Mission from '../../components/Mission/Mission.tsx'
import Partnership from '../../components/Partnership/Partnership.tsx'
import ServicesCta from '../../components/ServicesCta/ServicesCta.tsx'
import Values from '../../components/Values/Values.tsx'
import './About.css'

function About() {
  return (
    <div className="about">
      <AboutHero />
      <Partnership />
      <Approach />
      <Values />
      <ImportantInfo />
      <Mission />
      <ServicesCta />
    </div>
  )
}

export default About
