import backgroundImage from '../../assets/images/doc-p.webp'
import Button from '../Button/Button.tsx'
import Container from '../Container/Container.tsx'
import Text from '../Text/Text.tsx'
import './AboutHero.css'

function AboutHero() {
  return (
    <section
      className="about-hero"
      style={{ backgroundImage: `linear-gradient(rgba(23, 143, 151, 0.82), rgba(23, 143, 151, 0.82)), url(${backgroundImage})` }}
    >
      <Container className="about-hero__inner">
        <Text
          variant="label"
          weight="var(--font-weight-medium)"
          color="var(--color-white)"
          className="about-hero__eyebrow"
        >
          About Impilo
        </Text>

        <Text
          variant="h1"
          color="var(--color-white)"
          weight="var(--font-weight-bold)"
          className="about-hero__title"
        >
          Healthcare built on trust, care, and community
        </Text>

        <Text variant="body" color="var(--color-white)" className="about-hero__subtitle">
          In partnership with Ubuntu Services Worker Co-operative Limited, we provide affordable
          healthcare access, emergency coordination, and Benefit Hub support for members and
          their families.
        </Text>

        <div className="about-hero__actions">
          <Button variant="secondary">Our Services</Button>
          <Button variant="tertiary">Contact us</Button>
        </div>
      </Container>
    </section>
  )
}

export default AboutHero
