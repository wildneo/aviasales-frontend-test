import React from 'react';
import PropTypes from 'prop-types';
import './styles/Item.scss';

export default class Item extends React.Component {
  static propTypes = {
    label: PropTypes.node,
  };

  render() {
    const { label } = this.props;

    return (
      <div className="list-item">
        <label className="list-item-label">
          <span className="checkbox">
            <input
              className="checkbox-input"
              type="checkbox"
              {...this.props}
            />
            <span className="checkbox-face" />
          </span>
          {label}
        </label>
      </div>
    );
  }
}
