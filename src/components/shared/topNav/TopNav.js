import React, { useState } from 'react'
import { Link } from 'gatsby'

import './TopNav.scss'
const TopNav = () => {
  const [navOpen, setNavOpen] = useState(false)

  const hamburgerClass = navOpen
    ? 'navbar__hamburger hamburger hamburger--spin is-active'
    : 'navbar__hamburger hamburger hamburger--spin'

  const mobileNavClass = navOpen
    ? 'TopNav__Mobile TopNav__Mobile--Open'
    : 'TopNav__Mobile'

  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <>
      <nav className="TopNav__Desktop">
        <a href="/#manifesto">Manifesto</a>
        <a href="/#services">Services</a>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/join">Join</Link>
        <Link to="/hire">Hire</Link>
      </nav>
      {/* Start Hamburger */}
      <button className={hamburgerClass} type="button" onClick={toggleNav}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      <div className={mobileNavClass}>
        <div className="TopNav__Mobile--Contents">
          <a href="/#manifesto" onClick={toggleNav}>
            Manifesto
          </a>
          <a href="/#services" onClick={toggleNav}>
            Services
          </a>
          <Link to="/portfolio" onClick={toggleNav}>
            Portfolio
          </Link>
          <Link to="/join" onClick={toggleNav}>
            Join
          </Link>
          <Link to="/hire" onClick={toggleNav}>
            Hire
          </Link>
        </div>
      </div>
      {/* End Hamburger */}
    </>
  )
}

export default TopNav
