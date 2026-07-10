import Benefits from '../../components/Benefits/Benefits.tsx'
import BenefitsHighlight from '../../components/BenefitsHighlight/BenefitsHighlight.tsx'
import Pricing from '../../components/Pricing/Pricing.tsx'
import ServicesCta from '../../components/ServicesCta/ServicesCta.tsx'
import ServicesHero from '../../components/ServicesHero/ServicesHero.tsx'
import './Services.css'

function Services() {
  return (
    <div className="services">
      <ServicesHero />
      <Benefits />
      <BenefitsHighlight />
      <Pricing />
      <ServicesCta />
    </div>
  )
}

export default Services
