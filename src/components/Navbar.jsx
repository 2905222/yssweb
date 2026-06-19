import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa6'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <a href="/" className="navbar-logo">
          <img src="/logo.png" alt="Yorkshire Software Solutions" />
        </a>

        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/testimonials">Testimonials</a></li>
          <li><a href="/blogs">Blogs</a></li>
        </ul>

        <div className="navbar-right">
          <a href="tel:01133400999" className="navbar-phone">
            <FaPhone />
            <span>01133 400 999</span>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>

      </div>
    </nav>
  )
}
