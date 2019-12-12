import { createSelector } from 'reselect';
import { sortBy, groupBy } from 'lodash';
import { getTotalDuration, declinationHelper, maxStops } from '../utils';

export const getAllTickets = (state) => state.tickets;
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

export const ticketsByStopsSelector = createSelector(
  [getAllTickets],
  (allTickets) => groupBy(allTickets, (t) => maxStops(t.segments)),
);

export const filteredTicketsSelector = createSelector(
  [getAllTickets, ticketsByStopsSelector, getStopFilters],
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
