import React from 'react';
import { FaCode } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav
      className={`navbar is-spaced is-transparent`}
      role="navigation"
      aria-label="main navigation">
      <div className={`navbar-brand`}>
        <NavLink to="/" className={`navbar-item`}>
          <FaCode className={`icon-color`} style={{ fontSize: '45px' }} />
        </NavLink>
        <a
          role={`button`}
          className={`navbar-burger burger ${menuOpen ? 'is-active' : ''}`}
          aria-label={`menu`}
          aria-expanded={`false`}
          data-target={`navbarBasicExample`}
          onClick={toggleMenu}>
          <span aria-hidden={`true`}></span>
          <span aria-hidden={`true`}></span>
          <span aria-hidden={`true`}></span>
        </a>
      </div>

      <div
        id={`navbarBasicExample`}
        className={`navbar-menu ${menuOpen ? 'is-active' : ''}`}>
        <div className={`navbar-end`}>
          <NavLink to="/" className={'navbar-item is-active'} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/About" className={'navbar-item'} onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/Skills" className={'navbar-item'} onClick={toggleMenu}>
            Skills
          </NavLink>
          <NavLink
            to="/Projects"
            className={'navbar-item'}
            onClick={toggleMenu}>
            Projects
          </NavLink>
          <NavLink to="/Contact" className={'navbar-item'} onClick={toggleMenu}>
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
