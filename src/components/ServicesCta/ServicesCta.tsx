import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import Button from '../Button/Button.tsx'
import Container from '../Container/Container.tsx'
import Field from '../Field/Field.tsx'
import Reveal from '../Reveal/Reveal.tsx'
import Text from '../Text/Text.tsx'
import './ServicesCta.css'

type Status = 'idle' | 'submitting' | 'success' | 'error'

function ServicesCta() {
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
    <section className="services-cta">
      <Container className="services-cta__inner">
        <Reveal className="services-cta__copy">
          <Text
            variant="h2"
            color="var(--color-white)"
            weight="var(--font-weight-bold)"
            className="services-cta__title"
          >
            Ready to join
            <br />
            the programme?
          </Text>

          <Text variant="body" color="var(--color-white)" className="services-cta__subtitle">
            Register today and get access to healthcare support whenever you need it.
          </Text>
        </Reveal>

        <Reveal delay={150}>
          <form ref={formRef} className="services-cta__form" onSubmit={handleSubmit}>
            <input type="hidden" name="source" value="Join the Programme" />

            {/* Honeypot field - hidden from real users, catches simple bots */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="services-cta__honeypot"
              aria-hidden="true"
            />

            <Field
              tone="dark"
              name="name"
              placeholder="Name"
              aria-label="Name"
              required
              disabled={status === 'submitting'}
            />
            <Field
              tone="dark"
              type="email"
              name="email"
              placeholder="Email Address"
              aria-label="Email Address"
              required
              disabled={status === 'submitting'}
            />

            {feedback && (
              <Text
                variant="label"
                color={status === 'success' ? '#6fe3b4' : '#ff8a80'}
                className="services-cta__feedback"
              >
                {feedback}
              </Text>
            )}

            <Button
              variant="primary"
              type="submit"
              className="services-cta__submit"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Sending...' : 'Get started'}
            </Button>
          </form>
        </Reveal>
      </Container>
    </section>
  )
}

export default ServicesCta
