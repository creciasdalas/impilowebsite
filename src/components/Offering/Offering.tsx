import appScreenshot from '../../assets/images/image-2.webp'
import Container from '../Container/Container.tsx'
import Reveal from '../Reveal/Reveal.tsx'
import Text from '../Text/Text.tsx'
import './Offering.css'

function Offering() {
  return (
    <section className="offering">
      <Container className="offering__inner">
        <Reveal>
          <Text
            variant="h2"
            weight="var(--font-weight-bold)"
            align="center"
            className="offering__title"
          >
            Instant conference calls
          </Text>
        </Reveal>

        <Reveal delay={150}>
          <Text variant="body" color="var(--text)" align="center" className="offering__paragraph">
            Through the partnership between Ubuntu Services Worker Co-operative Limited and IMPILO
            Healthcare Services, members gain access to affordable healthcare support, emergency
            medical coordination, workforce wellness services, and Benefit Hub assistance designed
            to support you and your family.
          </Text>

          <Text variant="body" color="var(--text)" align="center" className="offering__paragraph">
            Our commitment is to provide reliable healthcare access, professional guidance, and
            responsive support whenever you need it most.
          </Text>
        </Reveal>

        <Reveal delay={300}>
          <img
            src={appScreenshot}
            alt="Impilo messaging app inbox and conversation preview"
            className="offering__screenshot"
          />
        </Reveal>
      </Container>
    </section>
  )
}

export default Offering
