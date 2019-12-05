import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { groupBy, includes } from 'lodash';
import * as actions from '../actions';

export const union = (newObj, oldObj) => {
  const keys = Object.keys(newObj);
  const unionObj = keys.map((key) => (
    oldObj[key]
      ? [...oldObj[key], ...newObj[key]]
      : newObj[key]
  ));

  return unionObj;
};

export const maxStops = (segments) => {
  const allStops = segments.map(({ stops }) => stops.length);

  return Math.max(...allStops);
};

const fetchSearchState = handleActions({
  [actions.fetchSearchIdRequest]: () => 'requested',
  [actions.fetchSearchIdFailure]: () => 'failed',
  [actions.fetchSearchIdSuccess]: () => 'finished',
}, 'none');

const fetchTicketsState = handleActions({
  [actions.fetchTicketsRequest]: () => 'requested',
  [actions.fetchTicketsFailure]: () => 'failed',
  [actions.fetchTicketsSuccess]: () => 'finished',
}, 'none');

const tickets = handleActions({
  [actions.fetchTicketsSuccess]: (state, { payload: { tickets } }) => {
    const all = [...state.all, ...tickets];
    const group = groupBy(tickets, (t) => maxStops(t.segments));
    const byStops = union(group, state.byStops);

    return { all, byStops };
  }
}, { all: [], byStops: {} });

const stopFilters = handleActions({
  [actions.toggleAllStopsFilters]: (state) => {
    const { selectAll: oldSetAll, byStops: oldByStops } = state;
    const selectAll = !oldSetAll;
    const byStops = Object.keys(oldByStops)
      .reduce((acc, key) => ({ ...acc, [key]: selectAll }), {});

    return { selectAll, byStops };
  },
  [actions.toggleStopFilter]: (state, { payload: { value } }) => {
    const { byStops: oldByStops } = state;
    const inverted = !oldByStops[value];
    const byStops = { ...oldByStops, [value]: inverted };
    const selectAll = !includes(byStops, false);

    return { selectAll, byStops };
  },
}, {
  selectAll: true,
  byStops: { 0: true, 1: true, 2: true, 3: true },
 });

const sorts = handleActions({
  [actions.setSorting]: (state, { payload: { value } }) => (value),
}, 'cheap');

export default combineReducers({
  fetchSearchState,
  fetchTicketsState,
  stopFilters,
  tickets,
  sorts,
});