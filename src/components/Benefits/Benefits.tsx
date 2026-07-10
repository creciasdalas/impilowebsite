import type { ReactNode } from 'react'
import Container from '../Container/Container.tsx'
import Text from '../Text/Text.tsx'
import './Benefits.css'

interface Benefit {
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

const benefits: Benefit[] = [
  {
    title: 'Healthcare Consultations Included Monthly',
    description: 'Access to professional healthcare consultations with qualified healthcare professionals.',
    icon: (
      <svg {...iconProps}>
        <path d="M6 3v6a4 4 0 0 0 8 0V3" />
        <path d="M18 8v3a6 6 0 0 1-12 0V8" />
        <circle cx="19" cy="6" r="2" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp Healthcare Support',
    description: 'Get healthcare support, guidance and answers conveniently via WhatsApp.',
    icon: (
      <svg {...iconProps}>
        <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5Z" />
      </svg>
    ),
  },
  {
    title: 'Qualified Medical Practitioners',
    description: 'Consult with experienced and registered healthcare professionals.',
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
      </svg>
    ),
  },
  {
    title: 'Nursing Triage & Callback Support',
    description: 'Receive nursing advice, triage and a callback from a nurse when needed.',
    icon: (
      <svg {...iconProps}>
        <path d="M4 18v-3a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v3" />
        <path d="M9 11V7a3 3 0 0 1 6 0v4" />
        <path d="M4 18h16" />
      </svg>
    ),
  },
  {
    title: 'Emergency Medical Coordination',
    description: 'Emergency medical coordination to ensure you receive the care you need.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 21s-7-4.6-9.3-9A5.3 5.3 0 0 1 12 6a5.3 5.3 0 0 1 9.3 6c-2.3 4.4-9.3 9-9.3 9Z" />
      </svg>
    ),
  },
  {
    title: 'ER24 EMS Emergency Response',
    description: '24/7 emergency response through our partner ER24.',
    icon: (
      <svg {...iconProps}>
        <path d="M3 13h4l2-4 3 8 2-5h7" />
        <rect x="3" y="6" width="18" height="14" rx="2" />
      </svg>
    ),
  },
  {
    title: 'Healthcare Guidance & Follow-Up',
    description: 'Ongoing guidance and follow-up to support your health and wellness.',
    icon: (
      <svg {...iconProps}>
        <path d="M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1Z" />
        <rect x="5" y="6" width="14" height="15" rx="2" />
        <path d="M9 12h6M9 16h4" />
      </svg>
    ),
  },
  {
    title: 'Workforce Wellness Support',
    description: 'Support and resources to help you stay healthy, productive and protected.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 3 4 6v6c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V6Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Injury-on-Duty Assistance',
    description: 'Assistance and guidance for injury-on-duty incidents.',
    icon: (
      <svg {...iconProps}>
        <path d="M12 2a4 4 0 0 0-4 4v2H7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-1V6a4 4 0 0 0-4-4Zm0 2a2 2 0 0 1 2 2v2h-4V6a2 2 0 0 1 2-2Z" />
      </svg>
    ),
  },
]

function Benefits() {
  return (
    <section className="benefits">
      <Container>
        <div className="benefits__heading">
          <Text
            variant="h2"
            weight="var(--font-weight-bold)"
            align="center"
            className="benefits__title"
          >
            What members can expect
          </Text>
          <Text variant="body" color="var(--text)" align="center">
            Every membership includes access to the following services, delivered by qualified,
            registered healthcare professionals.
          </Text>
        </div>

        <div className="benefits__grid">
          {benefits.map(({ title, description, icon }) => (
            <div className="benefit-card" key={title}>
              <span className="benefit-card__icon" aria-hidden="true">
                {icon}
              </span>
              <Text
                variant="label"
                weight="var(--font-weight-bold)"
                color="var(--text-h)"
                className="benefit-card__title"
              >
                {title}
              </Text>
              <Text variant="label" color="var(--text)" className="benefit-card__desc">
                {description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Benefits
