import { Link } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'
import Container from '../Container/Container.tsx'
import Text from '../Text/Text.tsx'
import './Footer.css'

interface FooterColumn {
  heading: string
  links: { label: string; to: string }[]
}

const columns: FooterColumn[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Careers', to: '#' },
      { label: 'Reach us', to: '#' },
    ],
  },
  {
    heading: 'Features',
    links: [
      { label: 'Download app', to: '#' },
      { label: 'Try free', to: '#' },
      { label: 'Demo app', to: '#' },
    ],
  },
]

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Impilo Healthcare Services" className="footer__logo" />
          <Text variant="body" color="var(--text)" className="footer__description">
            Healthcare, Emergency Support and Financial Assistance for Ubuntu Services Worker
            Cooperative Limited Members.
          </Text>
        </div>

        {columns.map(({ heading, links }) => (
          <nav className="footer__column" aria-label={heading} key={heading}>
            <Text
              variant="label"
              weight="var(--font-weight-bold)"
              color="var(--text-h)"
              className="footer__heading"
            >
              {heading}
            </Text>

            <ul className="footer__list">
              {links.map(({ label, to }) => (
                <li key={label}>
                  <Text as={Link} to={to} variant="label" className="footer__link">
                    {label}
                  </Text>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="footer__column" aria-label="Contact">
          <Text
            variant="label"
            weight="var(--font-weight-bold)"
            color="var(--text-h)"
            className="footer__heading"
          >
            Contact
          </Text>

          <ul className="footer__list">
            <li>
              <Text
                as="a"
                href="mailto:info@impilohealthcareservices.co.za"
                variant="label"
                className="footer__link"
              >
                info@impilohealthcareservices.co.za
              </Text>
            </li>
            <li>
              <Text as="a" href="tel:0861000123" variant="label" className="footer__link">
                Call : 0861 000 123
              </Text>
            </li>
            <li>
              <Text
                as="a"
                href="https://www.impilohealthcareservices.co.za"
                target="_blank"
                rel="noreferrer"
                variant="label"
                className="footer__link"
              >
                www.impilohealthcareservices.co.za
              </Text>
            </li>
          </ul>
        </div>
      </Container>

      <div className="footer__bottom">
        <Container className="footer__bottom-inner">
          <Text as="span" variant="label" color="var(--text)">
            © All rights reserved{' '}
            <Text as={Link} to="/" variant="label" className="footer__bottom-link">
              Impilo healthcare services
            </Text>{' '}
            - Developed by{' '}
            <Text
              as="a"
              href="https://www.wopl.co.za"
              target="_blank"
              rel="noreferrer"
              variant="label"
              className="footer__bottom-link"
            >
              Wopl Pty (Ltd)
            </Text>
          </Text>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
