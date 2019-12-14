import React from 'react';
import PropTypes from 'prop-types';
import './styles/Message.scss';

export default class Message extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const { title } = this.props;

    return (
      <div className="filter-message">
        <div className="filter-message-content">
          <div className="filter-message-title">
            {title}
          </div>
        </div>
        
      </div>
    );
  }
}
