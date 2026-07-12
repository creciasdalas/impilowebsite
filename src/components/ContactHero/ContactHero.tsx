import Container from '../Container/Container.tsx'
import Reveal from '../Reveal/Reveal.tsx'
import Text from '../Text/Text.tsx'
import './ContactHero.css'

function ContactHero() {
  return (
    <section className="contact-hero">
      <Container className="contact-hero__inner">
        <Reveal>
          <span className="contact-hero__line" aria-hidden="true" />

          <Text
            variant="label"
            weight="var(--font-weight-medium)"
            color="var(--color-white)"
            className="contact-hero__eyebrow"
          >
            Contact Us
          </Text>

          <Text
            variant="h1"
            color="var(--color-white)"
            weight="var(--font-weight-bold)"
            className="contact-hero__title"
          >
            We're here whenever you need us
          </Text>
        </Reveal>

        <Reveal delay={150}>
          <Text variant="body" color="var(--color-white)" className="contact-hero__subtitle">
            Reach out with questions about membership, support with your account, or urgent care
            coordination — our team responds 24/7.
          </Text>
        </Reveal>
      </Container>
    </section>
  )
}

export default ContactHero
