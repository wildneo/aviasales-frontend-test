import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';

export const fetchSearchState = handleActions({
  [actions.fetchSearchIdRequest]: () => 'requested',
  [actions.fetchSearchIdFailure]: () => 'failed',
  [actions.fetchSearchIdSuccess]: () => 'finished',
}, 'none');

export const fetchTicketsState = handleActions({
  [actions.fetchTicketsRequest]: () => 'requested',
  [actions.fetchTicketsFailure]: () => 'failed',
  [actions.fetchTicketsSuccess]: () => 'finished',
}, 'none');

export const tickets = handleActions({
  [actions.fetchTicketsSuccess]: (state, { payload: { tickets } }) => ([
    ...state,
    ...tickets,
  ]),
}, []);

export default combineReducers({
  fetchSearchState,
  fetchTicketsState,
  tickets,
});