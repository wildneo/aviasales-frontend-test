import React from 'react';
import PropTypes from 'prop-types';
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

  handleClick = (event) => {
    const { onClick, value } = this.props;
    onClick(event, { value });
  }

  render() {
    const { active, title } = this.props;

    return (
      <li
        onClick={this.handleClick}
        className={cn('sorting-tabs-tab', { active })}
      >
        <span className="tab-title">{title}</span>
      </li>
    );
  }
}
