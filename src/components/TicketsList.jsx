import React from 'react';
import { connect } from 'react-redux';
import { uniqueId, times } from 'lodash';
import { sortedTicketsSelector } from '../selectors';
import Ticket from './Ticket';

const mapStateToProps = (state, { fetchSearchState }) => {
  const tickets = sortedTicketsSelector(state).slice(0, 5);

  return { tickets, fetchSearchState };
};

class TicktsList extends React.Component {
  render() {
    const { tickets, fetchSearchState } = this.props;
    const isFetching = fetchSearchState === 'requested';

    return (
      <div className="tickets-list">
        {isFetching
          ? times(5, () => (<Ticket.Placeholder key={uniqueId()} />))
          : tickets.map((ticket) => <Ticket key={uniqueId()} ticket={ticket} />)
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(TicktsList);
