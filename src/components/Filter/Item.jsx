import React from 'react';
import PropTypes from 'prop-types';
import './styles/Item.scss';

export default class Item extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    label: PropTypes.node,
  };

  handleChange = (event) => {
    const { onChange, value } = this.props;
    onChange(event, { value });
  }

  render() {
    const { label, ...props } = this.props;

    return (
      <div className="list-item">
        <label className="list-item-label">
          <span className="checkbox">
            <input
              {...props}
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
