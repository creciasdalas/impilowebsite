import Container from '../Container/Container.tsx'
import Text from '../Text/Text.tsx'
import './Partnership.css'

const partners = [
  {
    name: 'Ubuntu Services Worker Co-operative Limited',
    role: 'Programme partner',
  },
  {
    name: 'ER24 Emergency Medical Care',
    role: '24/7 emergency response partner',
  },
]

function Partnership() {
  return (
    <section className="partnership">
      <Container>
        <Text
          variant="label"
          weight="var(--font-weight-bold)"
          color="var(--text)"
          align="center"
          className="partnership__eyebrow"
        >
          In Partnership With
        </Text>

        <div className="partnership__grid">
          {partners.map(({ name, role }) => (
            <div className="partnership__item" key={name}>
              <Text
                variant="h4"
                weight="var(--font-weight-bold)"
                color="var(--text-h)"
                align="center"
                className="partnership__name"
              >
                {name}
              </Text>
              <Text variant="label" color="var(--text)" align="center">
                {role}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Partnership
