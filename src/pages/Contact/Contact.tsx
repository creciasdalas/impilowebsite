import ContactForm from '../../components/ContactForm/ContactForm.tsx'
import ContactHero from '../../components/ContactHero/ContactHero.tsx'
import ContactMethods from '../../components/ContactMethods/ContactMethods.tsx'
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
      <ContactHero />
      <ContactMethods />
      <ContactForm />
    </div>
  )
}

export default Contact
