import React from 'react';
import PropTypes from 'prop-types';
import { invoke } from 'lodash';
import cn from 'classnames';
import './Notify.scss'

export default class Notify extends React.Component {
  static propTypes = {
    message: PropTypes.node,
    value: PropTypes.string,
    color: PropTypes.string,
  };

  handleClick = (event) => {
    invoke(this.props, 'onClick', event, this.props);
  }

  render() {
    const { color, message, value } = this.props;

    return (
      <div className={cn('notify', color)}>
        <div className="notify-content">
          <div className="notify-text">{message}</div>
          <button
            onClick={this.handleClick}
            className="notify-button"
          >
            {value}
          </button>
        </div>
      </div>
    );
  }
}
