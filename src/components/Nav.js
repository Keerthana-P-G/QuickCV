import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <div className="navbar-header">
        <h2 className="navbar-brand">QuickCV</h2>
      </div>
      <ul>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          <Link to="/contact">CONTACT</Link>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <button className="navbar-button">Build My Resume</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
