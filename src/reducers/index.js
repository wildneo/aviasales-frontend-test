import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { groupBy, includes } from 'lodash';
import * as actions from '../actions';

export const union = (newObj, oldObj) => {
  const keys = Object.keys(newObj);
  const unionObj = keys.map((key) => (
    // obj2[key] ? obj2[key].concat(obj1[key]) : obj1[key]
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
    // const test = tickets.filter((t) => maxStops(t.segments) < 3);
    // const all = state.all.concat(tickets);
    const all = [...state.all, ...tickets];
    const group = groupBy(tickets, (t) => maxStops(t.segments));
    const byStops = union(group, state.byStops);

    return { all, byStops };
  }
}, { all: [], byStops: {} });

const stopFilters = handleActions({
  [actions.toggleAllStopsFilters]: (state) => {
    const { byStops: oldByStops } = state;
    const allStopsFilter = !state.allStopsFilter;
    const byStops = Object.values(oldByStops).map(() => allStopsFilter);

    return {
      allStopsFilter,
      byStops,
    };
  },
  [actions.toggleStopFilter]: (state, { payload: { value } }) => {
    const { byStops: oldByStops } = state;
    const invertedValue = !oldByStops[value];
    const byStops = { ...oldByStops, [value]: invertedValue };
    const allStopsFilter = !includes(byStops, false);

    return {
      allStopsFilter,
      byStops: { ...oldByStops, [value]: invertedValue },
    };
  },
}, {
  allStopsFilter: true,
  byStops: { 0: true, 1: true, 2: true, 3: true },
 });

const filters = handleActions({
  [actions.setSorting]: (state, { payload: { value } }) => ({
    ...state,
    sortingState: value,
  }),
}, {
  stopsState: {},
  sortingState: 'cheap',
 });

export default combineReducers({
  fetchSearchState,
  fetchTicketsState,
  tickets,
  filters,
  stopFilters,
});