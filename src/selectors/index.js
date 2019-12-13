import { createSelector } from 'reselect';
import { sortBy, groupBy } from 'lodash';
import { getTotalDuration, declinationHelper, maxStops } from '../utils';

export const getAllTickets = (state) => state.tickets;
export const getStopsFilter = (state) => state.stopsFilter;
export const getSorts = (state) => state.sorts;

export const ticketsByStopsSelector = createSelector(
  [getAllTickets],
  (allTickets) => groupBy(allTickets, (t) => maxStops(t.segments)),
);

export const availableFiltersSelector = createSelector(
  [ticketsByStopsSelector, getStopsFilter],
  (byStops, stopFilter) => {
    const keys = Object.keys(byStops);
    const filters = keys.map((value) => {
      const label = declinationHelper(value);
      const isChecked = stopFilter.byStops[value];

      return { value, label, isChecked };
    });
    return filters;
  },
);

export const filteredTicketsSelector = createSelector(
  [getAllTickets, ticketsByStopsSelector, getStopsFilter],
  (allTickets, byStops, stopFilter) => {
    const keys = Object.keys(byStops);
    const active = keys.filter((stop) => stopFilter.byStops[stop]);
    const tickets = stopFilter.selectAll
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
