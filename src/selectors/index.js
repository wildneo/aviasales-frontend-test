import { createSelector } from 'reselect';
import { sortBy } from 'lodash';
import { getTotalDuration, declinationHelper } from '../utils';

export const getAllTickets = (state) => state.tickets.all;
export const getTicketsByStops = (state) => state.tickets.byStops;
export const getStopFilters = (state) => state.stopFilters;
export const getSorts = (state) => state.sorts;

export const possibleFiltersSelector = createSelector(
  [getStopFilters],
  (stopFilters) => {
    const keys = Object.keys(stopFilters.byStops);
    const filters = keys.map((value) => {
      const label = declinationHelper(value);
      const isChecked = stopFilters.byStops[value];

      return { value, label, isChecked };
    });
    return filters;
  },
);

export const filteredTicketsSelector = createSelector(
  [getAllTickets, getTicketsByStops, getStopFilters],
  (allTickets, byStops, stopFilters) => {
    const keys = Object.keys(stopFilters.byStops);
    const active = keys.filter((stop) => stopFilters.byStops[stop]);
    const tickets = stopFilters.selectAll
    ? allTickets
    : active.reduce((acc, stop) => (
      [...acc, ...byStops[stop]]
    ), []);
    
    return tickets;
  },
);

export const sortedTicketsSelector = createSelector(
  [filteredTicketsSelector, getSorts],
  (tickets, sorting) => (sorting === 'cheap'
    ? sortBy(tickets, 'price')
    : sortBy(tickets, ({ segments }) => getTotalDuration(segments))
  ),
);
