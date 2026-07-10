import Button from '../Button/Button.tsx'
import Container from '../Container/Container.tsx'
import Field from '../Field/Field.tsx'
import Text from '../Text/Text.tsx'
import './ServicesCta.css'

function ServicesCta() {
  return (
    <section className="services-cta">
      <Container className="services-cta__inner">
        <div className="services-cta__copy">
          <Text
            variant="h2"
            color="var(--color-white)"
            weight="var(--font-weight-bold)"
            className="services-cta__title"
          >
            Ready to join
            <br />
            the programme?
          </Text>

          <Text variant="body" color="var(--color-white)" className="services-cta__subtitle">
            Register today and get access to healthcare support whenever you need it.
          </Text>
        </div>

        <form className="services-cta__form" onSubmit={(event) => event.preventDefault()}>
          <Field tone="dark" name="name" placeholder="Name" aria-label="Name" />
          <Field tone="dark" type="email" name="email" placeholder="Email Address" aria-label="Email Address" />
          <Button variant="primary" type="submit" className="services-cta__submit">
            Get started
          </Button>
        </form>
      </Container>
    </section>
  )
}

export default ServicesCta
