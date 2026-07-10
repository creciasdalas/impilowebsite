import Button from '../Button/Button.tsx'
import Container from '../Container/Container.tsx'
import Text from '../Text/Text.tsx'
import './ServicesCta.css'

function ServicesCta() {
  return (
    <section className="services-cta">
      <Container className="services-cta__inner">
        <Text
          variant="h2"
          color="var(--color-white)"
          weight="var(--font-weight-bold)"
          className="services-cta__title"
        >
          Ready to join the programme?
        </Text>

        <Text variant="body" color="var(--color-white)" className="services-cta__subtitle">
          Register today and get access to healthcare support whenever you need it.
        </Text>

        <div className="services-cta__actions">
          <Button variant="secondary">Get started</Button>
          <Button variant="tertiary">Contact us</Button>
        </div>

        <div className="services-cta__contacts">
          <Text variant="label" color="var(--color-white)">
            24/7 Emergency: <strong>084 124</strong>
          </Text>
          <Text variant="label" color="var(--color-white)">
            WhatsApp us
          </Text>
          <Text variant="label" color="var(--color-white)">
            Request a callback
          </Text>
        </div>
      </Container>
    </section>
  )
}

export default ServicesCta
