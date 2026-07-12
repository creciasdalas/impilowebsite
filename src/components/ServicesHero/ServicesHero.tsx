import backgroundImage from '../../assets/images/doc-p.webp'
import Button from '../Button/Button.tsx'
import Container from '../Container/Container.tsx'
import Reveal from '../Reveal/Reveal.tsx'
import Text from '../Text/Text.tsx'
import './ServicesHero.css'

function ServicesHero() {
  return (
    <section
      className="services-hero"
      style={{ backgroundImage: `linear-gradient(rgba(23, 143, 151, 0.82), rgba(23, 143, 151, 0.82)), url(${backgroundImage})` }}
    >
      <Container className="services-hero__inner">
        <Reveal>
          <Text
            variant="label"
            weight="var(--font-weight-medium)"
            color="var(--color-white)"
            className="services-hero__eyebrow"
          >
            Impilo Healthcare Programme
          </Text>

          <Text
            variant="h1"
            color="var(--color-white)"
            weight="var(--font-weight-bold)"
            className="services-hero__title"
          >
            Healthcare consultations, delivered wherever you are
          </Text>
        </Reveal>

        <Reveal delay={150}>
          <Text variant="body" color="var(--color-white)" className="services-hero__subtitle">
            The IMPILO Healthcare Programme provides vital healthcare access, support and emergency
            coordination for you and your family. Your wellbeing is our priority — we're here 24/7
            to support you when you need it most.
          </Text>
        </Reveal>

        <Reveal delay={300}>
          <div className="services-hero__actions">
            <Button variant="secondary">Get started</Button>
            <Button variant="tertiary">Contact us</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default ServicesHero
