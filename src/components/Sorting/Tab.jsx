import React from 'react';
import PropTypes from 'prop-types';
import { invoke } from 'lodash';
import cn from 'classnames';
import './Sorting.scss';

export default class Tab extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    active: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  };

  handleKeyPress = (event) => {
    const { key } = event;
    if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      this.handleClick(event);
    }
  }

  handleClick = (event) => {
    invoke(this.props, 'onClick', event, this.props);
  }

  render() {
    const { active, title } = this.props;

    return (
      <li
        onKeyDown={this.handleKeyPress}
        onClick={this.handleClick}
        className={cn('sorting-tabs-tab', { active })}
        tabIndex="0"
      >
        <span className="tab-title">{title}</span>
      </li>
    );
  }
}
