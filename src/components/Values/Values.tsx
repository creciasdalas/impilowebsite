import type { ReactNode } from 'react'
import Container from '../Container/Container.tsx'
import Reveal from '../Reveal/Reveal.tsx'
import Text from '../Text/Text.tsx'
import './Values.css'

interface Value {
  title: string
  description: string
  icon: ReactNode
}

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const values: Value[] = [
  {
    title: 'Compassion',
    description: 'We treat every member with dignity, respect and kindness.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 20s-7-4.4-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.6-9 9-9 9Z" />
      </svg>
    ),
  },
  {
    title: 'Integrity',
    description: 'We are honest, transparent and accountable in all we do.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 4 6v6c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V6Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Service',
    description: 'We are committed to delivering reliable and professional support.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 21c4.5-1.3 7-4.5 7-9V6l-7-3-7 3v6c0 4.5 2.5 7.7 7 9Z" />
        <path d="M9 12h6M12 9v6" />
      </svg>
    ),
  },
  {
    title: 'Community',
    description: 'We believe in the power of people supporting people.',
    icon: (
      <svg {...iconProps}>
        <circle cx="8" cy="9" r="2.5" />
        <circle cx="16" cy="9" r="2.5" />
        <path d="M3 19c0-2.8 2.2-5 5-5s5 2.2 5 5M11 19c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      </svg>
    ),
  },
  {
    title: 'Excellence',
    description: 'We strive for excellence in the quality of our services.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="9" r="5" />
        <path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7" />
      </svg>
    ),
  },
  {
    title: 'Reliability',
    description: 'A service you can count on, anytime you need us.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </svg>
    ),
  },
]

function Values() {
  return (
    <section className="values">
      <Container>
        <Reveal className="values__heading">
          <Text
            variant="h2"
            weight="var(--font-weight-bold)"
            align="center"
            className="values__title"
          >
            Our Values
          </Text>
          <Text variant="body" color="var(--text)" align="center">
            Our values guide everything we do. They reflect our commitment to our members, our
            partners, and the communities we serve.
          </Text>
        </Reveal>

        <div className="values__grid">
          {values.map(({ title, description, icon }, index) => (
            <Reveal delay={index * 60} className="value-card" key={title}>
              <span className="value-card__icon" aria-hidden="true">
                {icon}
              </span>
              <Text
                variant="label"
                weight="var(--font-weight-bold)"
                color="var(--text-h)"
                className="value-card__title"
              >
                {title}
              </Text>
              <Text variant="label" color="var(--text)" className="value-card__desc">
                {description}
              </Text>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Values
