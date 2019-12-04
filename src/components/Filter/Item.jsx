import React from 'react';
import PropTypes from 'prop-types';
import './styles/Item.scss';

export default class Item extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.node,
  };

  handleClick = (event) => {
    const { onClick, value } = this.props;
    onClick(event, { value });
  }

  render() {
    const { label, ...props } = this.props;

    return (
      <div className="list-item">
        <label className="list-item-label">
          <span className="checkbox">
            <input
              {...props}
              onClick={this.handleClick}
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
