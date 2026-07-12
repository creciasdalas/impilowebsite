import solutionPhoto from '../../assets/images/solution-image.webp'
import Button from '../Button/Button.tsx'
import Reveal from '../Reveal/Reveal.tsx'
import Text from '../Text/Text.tsx'
import './Solution.css'

function Solution() {
  return (
    <section className="solution">
      <Reveal className="solution__media">
        <img
          src={solutionPhoto}
          alt="A healthcare professional reviewing patient records on a tablet"
          className="solution__image"
        />
      </Reveal>

      <div className="solution__panel">
        <div className="solution__panel-inner">
          <Reveal delay={100}>
            <Text
              variant="h2"
              color="var(--color-white)"
              weight="var(--font-weight-bold)"
              className="solution__title"
            >
              Healthcare You Can Trust
            </Text>
          </Reveal>

          <Reveal delay={200}>
            <Text variant="body" color="var(--color-white)" className="solution__subtitle">
              Quality care and reliable health solutions you can count on — with 24/7 support and a
              community built on unity, so you're never on this journey alone.
            </Text>
          </Reveal>

          <Reveal delay={300}>
            <div className="solution__actions">
              <Button variant="secondary">Explore</Button>
              <Button variant="tertiary">Contact us</Button>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <Text
              variant="label"
              weight="var(--font-weight-bold)"
              color="var(--color-white)"
              className="solution__tagline"
            >
              Simple. Affordable. Healthy. Together.
            </Text>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Solution
