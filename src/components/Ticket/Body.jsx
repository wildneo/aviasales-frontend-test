import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import Segment from './Segment';
import './Ticket.scss';


export default class Body extends React.Component {
  static propTypes = {
    segments: PropTypes.array,
  }; 

  render() {
    const { segments } = this.props;

    return (
      <div className="ticket-body">
        {segments.map((segment) => (
          <Segment key={uniqueId()} segment={segment} />
        ))}
      </div>
    );
  }
}
