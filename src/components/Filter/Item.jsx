import React from 'react';
import PropTypes from 'prop-types';
import './styles/Item.scss';

export default class Item extends React.Component {
  static propTypes = {
    label: PropTypes.node,
  };

  render() {
    const { label, ...props } = this.props;

    return (
      <div className="list-item">
        <label className="list-item-label">
          <span className="checkbox">
            <input
              {...props}
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
