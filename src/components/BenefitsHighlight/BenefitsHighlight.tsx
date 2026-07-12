import benefitsPhoto from '../../assets/images/p-benefits.webp'
import Container from '../Container/Container.tsx'
import Reveal from '../Reveal/Reveal.tsx'
import Text from '../Text/Text.tsx'
import './BenefitsHighlight.css'

function BenefitsHighlight() {
  return (
    <section className="benefits-highlight">
      <Container>
        <Reveal className="benefits-highlight__heading">
          <Text
            variant="label"
            weight="var(--font-weight-bold)"
            color="var(--color-primary)"
            align="center"
            className="benefits-highlight__eyebrow"
          >
            Our Benefits
          </Text>
          <Text
            variant="h2"
            weight="var(--font-weight-bold)"
            align="center"
            className="benefits-highlight__title"
          >
            Check what our clients are saying
          </Text>
        </Reveal>

        <div className="benefits-highlight__content">
          <Reveal delay={150} className="benefits-highlight__media">
            <img src={benefitsPhoto} alt="A healthcare professional consulting with a patient" className="benefits-highlight__image" />
          </Reveal>

          <Reveal delay={250} className="benefits-highlight__quote">
            <svg className="benefits-highlight__quote-mark" viewBox="0 0 32 24" aria-hidden="true">
              <path d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0L14.4 3.2C9.6 4.8 7.2 7.6 7.2 11.2H12.8V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.2 30.4 0L32 3.2C27.2 4.8 24.8 7.6 24.8 11.2H30.4V24H17.6Z" fill="currentColor" />
            </svg>

            <div className="benefits-highlight__stars" aria-hidden="true">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            <Text
              variant="h4"
              weight="var(--font-weight-medium)"
              color="var(--text-h)"
              className="benefits-highlight__text"
            >
              Every IMPILO membership includes monthly consultations, WhatsApp healthcare support,
              and access to qualified, registered medical practitioners.
            </Text>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default BenefitsHighlight
