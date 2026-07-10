import Hero from '../../components/Hero/Hero.tsx'
import Offering from '../../components/Offering/Offering.tsx'
import Solution from '../../components/Solution/Solution.tsx'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      <Offering />
      <Solution />
    </div>
  )
}

export default Home
