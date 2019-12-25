import React from 'react';
import { connect } from 'react-redux';
import { times, uniqueId } from 'lodash';
import { getAllTickets, sortedTicketsSelector } from '../selectors';
import { declinationHelper } from '../utils';
import { TICKETS_FORMS } from '../consts';
import Filter from './Filter';
import Ticket from './Ticket';

const mapStateToProps = (state) => {
  const tickets = sortedTicketsSelector(state).slice(0, 5);
  const allTicketsAmount = getAllTickets(state).length;
  const { firstFetch } = state.pollingState;
  const { refreshTimerId } = state.refreshState;

  return { tickets, firstFetch, allTicketsAmount, refreshTimerId };
};

class TicktsList extends React.Component {
  componentWillUnmount() {
    const { refreshTimerId } = this.props;
    clearTimeout(refreshTimerId);
  }

  renderTickets() {
    const { tickets, firstFetch } = this.props;

    return (
      <div className="tickets-list">
        {firstFetch
          ? times(5, () => (<Ticket.Placeholder key={uniqueId()} />))
          : tickets.map((ticket) => <Ticket key={uniqueId()} ticket={ticket} />)}
      </div>
    );
  }

  render() {
    const { tickets, firstFetch, allTicketsAmount } = this.props;
    const totalAmount = declinationHelper(allTicketsAmount, TICKETS_FORMS);
    const filterMsgTitle = `Мы нашли ${totalAmount}, но ни один не 
      соответствует заданным фильтрам.`;

    return (
      <>
        {tickets.length > 0 || firstFetch
          ? this.renderTickets()
          : <Filter.Message title={filterMsgTitle} />}
      </>
    );
  }
}

export default connect(mapStateToProps)(TicktsList);
