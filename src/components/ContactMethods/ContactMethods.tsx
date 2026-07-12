import Container from '../Container/Container.tsx'
import Text from '../Text/Text.tsx'
import './ContactMethods.css'

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const methods = [
  {
    title: 'Call Us',
    detail: '0861 000 123',
    href: 'tel:0861000123',
    icon: (
      <svg {...iconProps}>
        <path d="M4 5c0 8.3 6.7 15 15 15l2-3.5-5-2-1.5 1.5A11 11 0 0 1 8 9.5L9.5 8l-2-5Z" />
      </svg>
    ),
  },
  {
    title: 'Email Us',
    detail: 'info@impilohealth.co.za',
    href: 'mailto:info@impilohealth.co.za',
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp',
    detail: 'Message us for fast, convenient healthcare support.',
    href: undefined,
    icon: (
      <svg {...iconProps}>
        <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4.2-1.1L3 20l1.1-5.3A8.5 8.5 0 1 1 21 11.5Z" />
      </svg>
    ),
  },
]

function ContactMethods() {
  return (
    <section className="contact-methods">
      <Container>
        <div className="contact-methods__grid">
          {methods.map(({ title, detail, href, icon }) => {
            const content = (
              <>
                <span className="contact-method__icon" aria-hidden="true">
                  {icon}
                </span>
                <Text
                  variant="label"
                  weight="var(--font-weight-bold)"
                  color="var(--text-h)"
                  className="contact-method__title"
                >
                  {title}
                </Text>
                <Text variant="label" color="var(--text)" className="contact-method__detail">
                  {detail}
                </Text>
              </>
            )

            return href ? (
              <a href={href} className="contact-method" key={title}>
                {content}
              </a>
            ) : (
              <div className="contact-method" key={title}>
                {content}
              </div>
            )
          })}
        </div>

        <div className="contact-emergency">
          <span className="contact-emergency__icon" aria-hidden="true">
            <svg {...iconProps}>
              <path d="M12 21s-7-4.6-9.3-9A5.3 5.3 0 0 1 12 6a5.3 5.3 0 0 1 9.3 6c-2.3 4.4-9.3 9-9.3 9Z" />
            </svg>
          </span>
          <div>
            <Text
              variant="label"
              weight="var(--font-weight-bold)"
              color="var(--color-white)"
              className="contact-emergency__title"
            >
              24/7 Emergency Medical Assistance
            </Text>
            <Text variant="label" color="var(--color-white)" className="contact-emergency__desc">
              Through ER24 EMS support and coordination services.
            </Text>
          </div>
          <a href="tel:084124" className="contact-emergency__number">
            084 124
          </a>
        </div>
      </Container>
    </section>
  )
}

export default ContactMethods
