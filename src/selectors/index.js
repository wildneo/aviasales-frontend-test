import { createSelector } from 'reselect';
import { sortBy } from 'lodash';
import { getTotalDuration } from '../utils';

// const getTasksById = (state) => state.tasks.byId;
// const getTaskIds = (state) => state.tasks.allIds;
// const getCurrentFilterName = (state) => state.tasks.currentFilterName;

// export const tasksSelector = createSelector(
//   [getTasksById, getTaskIds],
//   (byId, allIds) => allIds.map((id) => byId[id]),
// );

// export const filteredTasksSelector = createSelector(
//   [tasksSelector, getCurrentFilterName],
//   (tasks, filterName) => (filterName === 'all' ? tasks : tasks.filter((t) => t.state === filterName)),
// );

export const getAllTickets = (state) => state.tickets.all;
export const getTicketsByStops = (state) => state.tickets.byStops;
export const getFilters = (state) => state.filters.stopsState;
export const getSorts = (state) => state.filters.sortingState;

export const filteredTicketsSelector = createSelector(
  [getAllTickets, getTicketsByStops, getFilters],
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
