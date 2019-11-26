import React from 'react';
import Header from './Header';
import Content from './Content';
import Item from './Item';
import './styles/Filter.scss'

const Filter = ({ children }) => (<div className="filter">{children}</div>);

Filter.Header = Header;
Filter.Content = Content;
Filter.Item = Item;

export default Filter;
