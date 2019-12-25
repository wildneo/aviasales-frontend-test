import React from 'react';
import { connect } from 'react-redux';
import TicketsLoader from '../TicketsLoader';
import logo from '../../logo.svg'
import './PageHeader.scss'

const mapStateToProps = ({ fetchSearchState }) => {
  return { fetchSearchState };
};

const Header = ({ fetchSearchState }) => {
  const isFetching = fetchSearchState === 'received';

  return (
    <>
      {isFetching && <TicketsLoader />}
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
    </>
  );
};

export default connect(mapStateToProps)(Header);
