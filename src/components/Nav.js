import React from 'react'
import './Nav.css';
import Home from './Home';

const Nav = () => {
  return (
    <div>
        <nav>
        <div className="navbar-header">
        <h2 className="navbar-brand">QuickCV</h2>        </div>

      <ul>
        <li>
            <a href='Home.js'>HOME</a>
          
        </li>
        <li>
            <a href='./AuthPage.js'>
          LOGIN 
          </a>
        </li>

        <li>
            <a>
          CONTACT</a>
        </li>
        <li>
            <a>
          ABOUT</a>
        </li>
        <li>
          <button className="navbar-button">Build My Resume</button>
        </li>
      </ul>
    </nav>

    <Home/>
    </div>
  )
}

export default Nav