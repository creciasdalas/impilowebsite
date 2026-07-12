import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import Button from '../Button/Button.tsx'
import Container from '../Container/Container.tsx'
import Field from '../Field/Field.tsx'
import Reveal from '../Reveal/Reveal.tsx'
import Text from '../Text/Text.tsx'
import './ContactForm.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [feedback, setFeedback] = useState('')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = formRef.current
    if (!form) return

    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    setStatus('submitting')
    setFeedback('')

    try {
      const response = await fetch('/mail/contact.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const result = await response.json()

      if (response.ok && result.success) {
        setStatus('success')
        setFeedback(result.message)
        form.reset()
      } else {
        setStatus('error')
        setFeedback(result.message ?? 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setFeedback('Something went wrong. Please check your connection and try again.')
    }
  }

  return (
    <section className="contact-form-section">
      <Container className="contact-form-section__inner">
        <Reveal className="contact-form-section__intro">
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
        </Reveal>

        <Reveal as="form" delay={150} ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          {/* Honeypot field - hidden from real users, catches simple bots */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className="contact-form__honeypot"
            aria-hidden="true"
          />

          <div className="contact-form__row">
            <Field label="Name" name="name" placeholder="Your name" required disabled={status === 'submitting'} />
            <Field
              label="Email"
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              disabled={status === 'submitting'}
            />
          </div>

          <Field
            label="Phone"
            type="tel"
            name="phone"
            placeholder="Your phone number"
            disabled={status === 'submitting'}
          />

          <Field
            label="Message"
            name="message"
            placeholder="How can we help?"
            multiline
            rows={5}
            required
            disabled={status === 'submitting'}
          />

          {feedback && (
            <Text
              variant="label"
              color={status === 'success' ? 'var(--color-success)' : 'var(--color-error)'}
            >
              {feedback}
            </Text>
          )}

          <Button
            variant="primary"
            type="submit"
            className="contact-form__submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending...' : 'Send message'}
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}

export default ContactForm
