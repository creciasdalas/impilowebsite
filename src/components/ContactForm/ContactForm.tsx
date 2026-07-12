import Button from '../Button/Button.tsx'
import Container from '../Container/Container.tsx'
import Field from '../Field/Field.tsx'
import Text from '../Text/Text.tsx'
import './ContactForm.css'

function ContactForm() {
  return (
    <section className="contact-form-section">
      <Container className="contact-form-section__inner">
        <div className="contact-form-section__intro">
          <Text
            variant="h2"
            weight="var(--font-weight-bold)"
            color="var(--text-h)"
            className="contact-form-section__title"
          >
            Send us a message
          </Text>
          <Text variant="body" color="var(--text)">
            Fill out the form and a member of our team will get back to you as soon as possible.
          </Text>
        </div>

        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <div className="contact-form__row">
            <Field label="Name" name="name" placeholder="Your name" required />
            <Field label="Email" type="email" name="email" placeholder="you@example.com" required />
          </div>

          <Field label="Phone" type="tel" name="phone" placeholder="Your phone number" />

          <Field
            label="Message"
            name="message"
            placeholder="How can we help?"
            multiline
            rows={5}
            required
          />

          <Button variant="primary" type="submit" className="contact-form__submit">
            Send message
          </Button>
        </form>
      </Container>
    </section>
  )
}

export default ContactForm
