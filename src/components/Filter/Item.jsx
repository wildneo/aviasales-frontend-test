import React from 'react';
import PropTypes from 'prop-types';
import { invoke } from 'lodash';
import './styles/Item.scss';

export default class Item extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    value: PropTypes.string,
    label: PropTypes.node,
  };

  handleKeyPress = (event) => {
    const { key } = event;
    if (key === 'Enter' || key === ' ') {
      event.preventDefault();
      this.handleChange(event);
    }
  }

  handleChange = (event) => {
    invoke(this.props, 'onChange', event, this.props);
  }

  render() {
    const { label, ...props } = this.props;

    return (
      <div className="list-item">
        <label className="list-item-label">
          <span className="checkbox">
            <input
              {...props}
              onKeyDown={this.handleKeyPress}
              onChange={this.handleChange}
              className="checkbox-input"
              type="checkbox"
            />
            <span className="checkbox-face" />
          </span>
          {label}
        </label>
      </div>
    );
  }
}
