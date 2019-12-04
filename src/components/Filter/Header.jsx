import React from 'react';
import './styles/Filter.scss'

const Header = React.memo(({ children }) => (
  <div className="filter-header">{children}</div>
));

export default Header;
