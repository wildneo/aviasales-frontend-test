import React from 'react';
import PropTypes from 'prop-types';
import Placeholder from './Placeholder';
import Header from './Header';
import Body from './Body';
import './Ticket.scss';

const defailtTicket = {
  price: 66579,
  carrier: 'FV',
  segments: [
    {
      origin: 'MOW',
      destination: 'HKT',
      date: '2019-12-07T08:27:00.000Z',
      stops: [
        'SIN',
        'AUH',
        'KUL'
      ],
      duration: 1577
    },
    {
      origin: 'MOW',
      destination: 'HKT',
      date: '2019-12-27T03:38:00.000Z',
      stops: [],
      duration: 1770
    }
  ]
};

class Ticket extends React.Component {
  static propTypes = {
    ticket: PropTypes.object,
  };

  static defaultProps = {
    ticket: defailtTicket,
  };

  render() {
    const { ticket } = this.props;

    return (
      <div className="ticket">
        <Header
          price={ticket.price}
          carrier={ticket.carrier}
        />
        <Body segments={ticket.segments} />
      </div>
    );
  }
}

Ticket.Placeholder = Placeholder;

export default Ticket;
