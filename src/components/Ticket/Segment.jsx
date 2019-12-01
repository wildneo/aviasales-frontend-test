import React from 'react';
import PropTypes from 'prop-types';
import { formatDuration, formatTime, declinationHelper } from '../../utils';
import './Ticket.scss';


export default class Segment extends React.Component {
  static propTypes = {
    segment: PropTypes.object,
  };

  render() {
    const { segment } = this.props;
    const routeTitle = `${segment.origin} — ${segment.destination}`;
    const stopsTitle = declinationHelper(segment.stops.length);
    const duration = formatDuration(segment.duration);
    const interval = formatTime(segment.date, segment.duration);
    const citys = segment.stops.join(', ');

    return (
      <div className="segment">
        <div className="segment-route">
          <div className="segment-title">{routeTitle}</div>
          <div className="segment-time">{interval}</div>
        </div>
        <div className="segment-length">
          <div className="segment-title">В пути</div>
          <div className="segment-duration">{duration}</div>
        </div>
        <div className="segment-stops">
          <div className="segment-title">{stopsTitle}</div>
          <div className="segment-citys">{citys}</div>
        </div>
      </div>
    );
  }
}
