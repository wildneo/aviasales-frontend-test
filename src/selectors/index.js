import { createSelector } from 'reselect';
import { sortBy } from 'lodash';
import { getTotalDuration, declinationHelper } from '../utils';

export const getAllTickets = (state) => state.tickets.all;
export const getTicketsByStops = (state) => state.tickets.byStops;
export const getAllFiltersState = (state) => state.stopFilters.setAll;
export const getStopFilters = (state) => state.stopFilters.byStops;
export const getSorts = (state) => state.sorts;

export const possibleFiltersSelector = createSelector(
  [getStopFilters],
  (byStops) => (Object.keys(byStops)
    .map((value) => {
      const label = declinationHelper(value);
      const isChecked = byStops[value];

      return { value, label, isChecked };
    })
  ),
);

export const filteredTicketsSelector = createSelector(
  [getAllTickets, getTicketsByStops, getStopFilters],
  (allTickets, byStops, filters) => (filters.all
    ? allTickets
    : filters.stops.reduce((acc, stop) => (
      [...acc, byStops[stop]]
    ), [])
  ),
);

export const sortedTicketsSelector = createSelector(
  [getAllTickets, getSorts],
  (tickets, sorting) => (sorting === 'cheap'
    ? sortBy(tickets, 'price')
    : sortBy(tickets, ({ segments }) => getTotalDuration(segments))
  ),
);
