import heroImage from '../../assets/images/image-1.webp'
import Button from '../Button/Button.tsx'
import Container from '../Container/Container.tsx'
import Text from '../Text/Text.tsx'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <Container className="hero__inner">
        <div className="hero__content">
          <span className="hero__line" aria-hidden="true" />

          <Text
            variant="h1"
            color="var(--color-white)"
            weight="var(--font-weight-bold)"
            className="hero__title"
          >
            Have your Doctor
          </Text>

          <Text variant="body" color="var(--color-white)" className="hero__subtitle">
            Our commitment is to provide reliable healthcare
access, professional guidance, and responsive support
whenever you need it most.
          </Text>

          <div className="hero__actions">
            <Button variant="secondary">Explore</Button>
            <Button variant="tertiary">Contact us</Button>
          </div>
        </div>

        <div className="hero__media">
          <img src={heroImage} alt="Doctors available for video consultation" className="hero__image" />
        </div>
      </Container>
    </section>
  )
}

export default Hero
