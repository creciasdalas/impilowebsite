import Button from '../Button/Button.tsx'
import Container from '../Container/Container.tsx'
import Text from '../Text/Text.tsx'
import './Pricing.css'

interface FeeRow {
  label: string
  value: string
}

const fees: FeeRow[] = [
  { label: 'Once-off registration fee', value: 'R300' },
  { label: 'Monthly membership fee', value: 'R100' },
  { label: 'Monthly consultations included', value: '2 per month' },
  { label: 'Additional consultation fee', value: 'R150' },
]

function Pricing() {
  return (
    <section className="pricing">
      <Container className="pricing__split">
        <div className="pricing-card">
          <Text
            variant="label"
            weight="var(--font-weight-bold)"
            color="var(--color-primary)"
            className="pricing-card__eyebrow"
          >
            Membership
          </Text>

          <Text
            variant="h1"
            weight="var(--font-weight-bold)"
            color="var(--text-h)"
            className="pricing-card__price"
          >
            R100
            <span className="pricing-card__price-suffix">/month</span>
          </Text>

          <Text variant="body" color="var(--text)" className="pricing-card__note">
            One affordable fee. Comprehensive healthcare support for you and your family.
          </Text>

          <ul className="pricing-table">
            {fees.map(({ label, value }) => (
              <li className="pricing-table__row" key={label}>
                <Text variant="label" color="var(--text)">
                  {label}
                </Text>
                <Text
                  variant="label"
                  weight="var(--font-weight-bold)"
                  color="var(--text-h)"
                  className="pricing-table__value"
                >
                  {value}
                </Text>
              </li>
            ))}
          </ul>

          <Button variant="primary" className="pricing-card__cta">
            Get started
          </Button>
        </div>

        <div className="hub-card">
          <Text
            variant="label"
            weight="var(--font-weight-medium)"
            color="var(--color-white)"
            className="hub-card__label"
          >
            Benefit Hub
          </Text>

          <Text
            variant="h1"
            weight="var(--font-weight-bold)"
            color="var(--color-white)"
            size={56}
            className="hub-card__amount"
          >
            R50,000
          </Text>

          <Text variant="body" color="var(--color-white)" className="hub-card__desc">
            Financial assistance for nominated beneficiaries of qualifying members in the event of
            death — a community-based support initiative built on solidarity and care.
          </Text>

          <Text
            variant="label"
            color="var(--color-white)"
            size={14}
            className="hub-card__disclaimer"
          >
            Benefit Hub is a member support initiative and is not an insurance product.
          </Text>
        </div>
      </Container>
    </section>
  )
}

export default Pricing
