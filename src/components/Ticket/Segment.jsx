import React from 'react';
import PropTypes from 'prop-types';
import { formatDuration, formatTimeInterval, declinationHelper } from '../../utils';
import { stopsForms } from '../../consts';
import './Ticket.scss';


export default class Segment extends React.Component {
  static propTypes = {
    segment: PropTypes.object,
  };

  render() {
    const { segment } = this.props;
    const routeTitle = `${segment.origin} — ${segment.destination}`;
    const stopsTitle = declinationHelper(segment.stops.length, ...stopsForms);
    const duration = formatDuration(segment.duration);
    const interval = formatTimeInterval(segment.date, segment.duration);
    const citys = segment.stops.length === 0 ? 'Прямой' : segment.stops.join(', ');

    return (
      <div className="segment">
        <div className="segment-content">
          <div className="segment-title">{routeTitle}</div>
          <div className="segment-description">{interval}</div>
        </div>
        <div className="segment-content">
          <div className="segment-title">В пути</div>
          <div className="segment-description">{duration}</div>
        </div>
        <div className="segment-content">
          <div className="segment-title">{stopsTitle}</div>
          <div className="segment-description">{citys}</div>
        </div>
      </div>
    );
  }
}
