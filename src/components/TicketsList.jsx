import React from 'react';
import { connect } from 'react-redux';
import { uniqueId, times } from 'lodash';
import { sortedTicketsSelector } from '../selectors';
import Ticket from './Ticket';

const mapStateToProps = (state) => {
  const tickets = sortedTicketsSelector(state).slice(0, 5);
  const firstFetch = state.pollingState.firstFetch;

  return { tickets, firstFetch };
};

class TicktsList extends React.Component {
  render() {
    const { tickets, firstFetch } = this.props;

    return (
      <div className="tickets-list">
        {firstFetch
          ? times(5, () => (<Ticket.Placeholder key={uniqueId()} />))
          : tickets.map((ticket) => <Ticket key={uniqueId()} ticket={ticket} />)
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(TicktsList);
