import { useState, useEffect } from 'react'
import { FaFacebookF, FaLinkedinIn, FaEnvelope, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    dropdown: [
      { label: 'Web Development', href: '/services/web' },
      { label: 'Mobile Apps', href: '/services/mobile' },
      { label: 'Cloud Solutions', href: '/services/cloud' },
      { label: 'DevOps & CI/CD', href: '/services/devops' },
      { label: '.NET Development', href: '/services/dotnet' },
      { label: 'Consulting', href: '/services/consulting' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blogs', href: '/blogs' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const currentPath = window.location.pathname

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <div className="navbar-topbar">
        <div className="navbar-topbar-inner">
          <a href="mailto:info@yorkshiresoftwaresolutions.co.uk" className="topbar-email">
            <FaEnvelope />
            <span>info@yorkshiresoftwaresolutions.co.uk</span>
          </a>
          <div className="topbar-socials">
            <a href="https://www.facebook.com/yorkshiresoftwaresolutions" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/yorkshire-software-solutions" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar-inner">

          <a href="/" className="navbar-logo">
            <img src="/logo.png" alt="Yorkshire Software Solutions" />
          </a>

          <ul className="navbar-links">
            {NAV_LINKS.map(link => (
              <li key={link.label} className={link.dropdown ? 'has-dropdown' : ''}>
                {link.dropdown ? (
                  <>
                    <button
                      className={`nav-link nav-link--btn${currentPath.startsWith('/services') ? ' active' : ''}`}
                    >
                      {link.label}
                      <FaChevronDown className="chevron" />
                    </button>
                    <ul className="dropdown">
                      {link.dropdown.map(sub => (
                        <li key={sub.label}>
                          <a href={sub.href}>{sub.label}</a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    href={link.href}
                    className={`nav-link${currentPath === link.href ? ' active' : ''}`}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="navbar-right">
            <a href="tel:01133400999" className="navbar-phone">
              <FaPhone />
              <span>01133 400 999</span>
            </a>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <ul>
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              {link.dropdown ? (
                <>
                  <button
                    className="mobile-nav-link mobile-nav-link--btn"
                    onClick={() => setMobileServicesOpen(o => !o)}
                  >
                    {link.label}
                    <FaChevronDown className={`chevron${mobileServicesOpen ? ' chevron--open' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <ul className="mobile-dropdown">
                      {link.dropdown.map(sub => (
                        <li key={sub.label}>
                          <a href={sub.href} onClick={() => setMenuOpen(false)}>{sub.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  className={`mobile-nav-link${currentPath === link.href ? ' active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="mobile-menu-footer">
          <a href="tel:01133400999" className="navbar-phone">
            <FaPhone />
            <span>01133 400 999</span>
          </a>
          <div className="topbar-socials">
            <a href="https://www.facebook.com/yorkshiresoftwaresolutions" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://www.linkedin.com/company/yorkshire-software-solutions" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
