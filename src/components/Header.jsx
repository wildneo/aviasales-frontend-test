import React from 'react';
import logo from '../logo.svg'
import './Header.scss'

const Header = () => (
  <div className="page-header">
    <a
      className="header-logo-link"
      href="/"
    >
      <img
        className="header-logo-img"
        alt="aviasales"
        src={logo}
      />
    </a>
  </div>
);

export default Header;
