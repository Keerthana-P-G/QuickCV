import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from './logo.jpg';

const Nav = () => {
  return (
    <nav>
      <div className="navbar-header">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <h2 className="navbar-brand">QuickCV</h2>
      </div>
      <ul>
        <li>
          <Link to="/" className="nav-link-home">HOME</Link>
        </li>
        <li>
          <Link to="/login" className="nav-link-login">LOGIN</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link-contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link-about">ABOUT</Link>
        </li>
        {/* <li>
          <Link to="/ax" >SKILL SEARCH</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Nav;