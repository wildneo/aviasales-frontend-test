import React from 'react';
import { connect } from 'react-redux';
import { uniqueId } from 'lodash';
import { sortedTicketsSelector } from '../selectors';
import Ticket from './Ticket';

const mapStateToProps = (state) => {
  const tickets = sortedTicketsSelector(state).slice(0, 5);

  return { tickets };
};

class TicktsList extends React.Component {
  render() {
    const { tickets } = this.props;
    return (
      <div>
        {tickets.map((ticket) => <Ticket key={uniqueId()} ticket={ticket} />)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(TicktsList);
