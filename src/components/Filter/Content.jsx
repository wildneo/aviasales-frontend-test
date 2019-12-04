import React from 'react';
import './styles/Filter.scss'

const Content = React.memo(({ children }) => (
  <div className="filter-content">{children}</div>
));

export default Content;
