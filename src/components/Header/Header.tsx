import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/Logo.png'
import Button from '../Button/Button.tsx'
import Text from '../Text/Text.tsx'
import './Header.css'

interface NavItem {
  label: string
  to: string
}

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About us', to: '/about' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  return (
    <header className="header">
      <img src={logo} alt="Impilo Healthcare Services" className="header__logo" />

      {isMenuOpen && (
        <div className="header__backdrop" aria-hidden="true" onClick={closeMenu} />
      )}

      <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`.trim()}>
        <ul className="header__list">
          {navItems.map(({ label, to }) => {
            const isActive = pathname === to

            return (
              <li key={to}>
                <Text
                  as={Link}
                  to={to}
                  variant="label"
                  className={`header__link ${isActive ? 'header__link--active' : ''}`.trim()}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </Text>
              </li>
            )
          })}
        </ul>

        <Button variant="primary" onClick={closeMenu}>
          Contact us
        </Button>
      </nav>

      <button
        type="button"
        className={`header__toggle ${isMenuOpen ? 'header__toggle--open' : ''}`.trim()}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  )
}

export default Header
