import React from 'react';
import Header from './Header';
import Content from './Content';
import Item from './Item';
import Message from './Message';
import './styles/Filter.scss'

const Filter = ({ children }) => (<div className="filter">{children}</div>);

Filter.Header = Header;
Filter.Item = Item;
Filter.Content = Content;
Filter.Message = Message;

export default Filter;
