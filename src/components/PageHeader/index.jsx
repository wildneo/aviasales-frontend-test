import React from 'react';
import logo from '../../logo.svg'
import './PageHeader.scss'

const Header = () => (
  <div className="page-header">
    <a
      className="header-logo-link"
      href="/aviasales-frontend-test/"
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
