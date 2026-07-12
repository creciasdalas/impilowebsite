import Button from '../Button/Button.tsx'
import Container from '../Container/Container.tsx'
import Reveal from '../Reveal/Reveal.tsx'
import Text from '../Text/Text.tsx'
import './ImportantInfo.css'

const items = [
  {
    title: 'Membership',
    description:
      'Membership is for the member only and is valid while your monthly fees are paid and up to date.',
  },
  {
    title: 'Consultations',
    description:
      'You are entitled to 2 healthcare consultations per month. Unused consultations do not roll over.',
  },
  {
    title: 'Emergency Support',
    description: 'Emergency services are available 24/7, including weekends and public holidays.',
  },
  {
    title: 'Not an Insurance Product',
    description: 'This programme is not an insurance product.',
  },
  {
    title: 'Confidentiality',
    description: 'All information is treated confidentially in accordance with data protection laws.',
  },
  {
    title: 'Keep Your Details Updated',
    description:
      'Keep your contact details up to date to ensure uninterrupted service and important communication.',
  },
]

function ImportantInfo() {
  return (
    <section className="important-info">
      <Container className="important-info__inner">
        <Reveal className="important-info__intro">
          <Text
            variant="h3"
            weight="var(--font-weight-bold)"
            color="var(--text-h)"
            className="important-info__title"
          >
            What to Know Before You Join
          </Text>

          <Text variant="body" color="var(--text)" className="important-info__subtitle">
            A few key things about how Impilo membership works.
          </Text>

          <Button variant="primary">Get started</Button>
        </Reveal>

        <ul className="important-info__list">
          {items.map(({ title, description }, index) => (
            <Reveal
              as="li"
              className="important-info__row"
              delay={index * 60}
              key={title}
            >
              <div>
                <Text
                  variant="label"
                  weight="var(--font-weight-bold)"
                  color="var(--text-h)"
                  className="important-info__row-title"
                >
                  {title}
                </Text>
                <Text variant="label" color="var(--text)">
                  {description}
                </Text>
              </div>
              <svg
                className="important-info__row-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 7 17 17M11 17h6v-6" />
              </svg>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export default ImportantInfo
