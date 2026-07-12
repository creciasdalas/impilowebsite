import approachPhoto from '../../assets/images/patient-d.webp'
import Container from '../Container/Container.tsx'
import Reveal from '../Reveal/Reveal.tsx'
import Text from '../Text/Text.tsx'
import './Approach.css'

function Approach() {
  return (
    <section className="approach">
      <Container className="approach__inner">
        <Reveal className="approach__card">
          <Text
            variant="h2"
            weight="var(--font-weight-bold)"
            color="var(--text-h)"
            className="approach__title"
          >
            Our Approach
          </Text>

          <Text variant="body" color="var(--text)" className="approach__text">
            At IMPILO, our approach is simple: make healthcare access seamless, reliable, and
            human. We work hand-in-hand with Ubuntu Services Worker Co-operative Limited to bring
            affordable healthcare consultations, emergency coordination, and financial support
            directly to our members.
          </Text>

          <Text variant="body" color="var(--text)" className="approach__text">
            From qualified medical practitioners to our ER24 emergency response partnership,
            every part of our model is built around being there when it matters most — for you
            and your family.
          </Text>
        </Reveal>

        <Reveal delay={150} className="approach__media">
          <img src={approachPhoto} alt="An Impilo member on a healthcare call" className="approach__image" />
        </Reveal>
      </Container>
    </section>
  )
}

export default Approach
