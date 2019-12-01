import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { groupBy } from 'lodash';
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

export const filters = handleActions({
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
});