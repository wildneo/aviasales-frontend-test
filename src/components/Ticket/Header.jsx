import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../../utils';
import './Ticket.scss';


export default class Segment extends React.Component {
  static propTypes = {
    price: PropTypes.number,
    carrier: PropTypes.string,
  }; 

  render() {
    const { price, carrier } = this.props;
    const carrierSrc = `//pics.avs.io/99/36/${carrier}.png`;
    const formatedPrice = formatPrice(price);

    return (
      <div className="ticket-header">
        <div className="ticket-price">{formatedPrice}</div>
        <div className="ticket-carrier">
          <img
            src={carrierSrc}
            alt={carrier}
          />
        </div>
      </div>
    );
  }
}
