import Container from '../Container/Container.tsx'
import Text from '../Text/Text.tsx'
import './Mission.css'

function Mission() {
  return (
    <section className="mission">
      <Container className="mission__inner">
        <svg className="mission__quote-mark" viewBox="0 0 32 24" aria-hidden="true">
          <path
            d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0L14.4 3.2C9.6 4.8 7.2 7.6 7.2 11.2H12.8V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.2 30.4 0L32 3.2C27.2 4.8 24.8 7.6 24.8 11.2H30.4V24H17.6Z"
            fill="currentColor"
          />
        </svg>

        <Text
          variant="h3"
          color="var(--color-white)"
          weight="var(--font-weight-medium)"
          className="mission__quote"
        >
          At IMPILO, we believe in people, caring for people and standing with people.
        </Text>

        <Text
          variant="label"
          weight="var(--font-weight-bold)"
          className="mission__tagline"
        >
          Humanity in Every Heartbeat.
        </Text>
      </Container>
    </section>
  )
}

export default Mission
