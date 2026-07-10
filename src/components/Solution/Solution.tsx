import solutionPhoto from '../../assets/images/image-3.webp'
import Button from '../Button/Button.tsx'
import Text from '../Text/Text.tsx'
import './Solution.css'

function Solution() {
  return (
    <section className="solution">
      <div className="solution__media">
        <img
          src={solutionPhoto}
          alt="Health specialist taking a call with a patient"
          className="solution__image"
        />
      </div>

      <div className="solution__panel">
        <div className="solution__panel-inner">
          <Text
            variant="h2"
            color="var(--color-white)"
            weight="var(--font-weight-bold)"
            className="solution__title"
          >
            Perfect Solution for Health specialists and Patients
          </Text>

          <Text variant="body" color="var(--color-white)" className="solution__subtitle">
            Perfect pricing that fit like a glove
          </Text>

          <div className="solution__actions">
            <Button variant="secondary">Explore</Button>
            <Button variant="tertiary">Contact us</Button>
          </div>

          <div className="solution__stats">
            <div className="solution__stars" aria-hidden="true">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="solution__star--faded">★</span>
            </div>

            <Text variant="body" color="var(--color-white)" className="solution__stats-text">
              <strong>4 Million calls</strong> completed with a 96% star rating
            </Text>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solution
