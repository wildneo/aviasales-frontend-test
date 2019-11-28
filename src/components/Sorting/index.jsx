import React from 'react';
import Tab from './Tab';
import './Sorting.scss';

const Sorting = ({ children }) => (
  <div className="sorting">
    <ul className="sorting-tabs">
      {children}
    </ul>
  </div>
);

Sorting.Tab = Tab;

export default Sorting;
