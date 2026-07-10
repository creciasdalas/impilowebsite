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
              <Text as="a" href="mailto:Hello@chatap.com" variant="label" className="footer__link">
                Hello@chatap.com
              </Text>
            </li>
            <li>
              <Text variant="label" className="footer__link">
                Address : JHB
              </Text>
            </li>
            <li>
              <Text as="a" href="tel:0720279741" variant="label" className="footer__link">
                Call : 0720279741
              </Text>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
