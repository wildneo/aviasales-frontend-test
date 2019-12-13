import { combineReducers } from 'redux';
import fetchTicketsState from './fetchTicketsState';
import fetchSearchState from './fetchSearchState';
import refreshState from './refreshState';
import pollingState from './pollingState';
import stopsFilter from './stopsFilter';
import tickets from './tickets';
import sorts from './sorts';

export default combineReducers({
  fetchTicketsState,
  fetchSearchState,
  refreshState,
  pollingState,
  stopsFilter,
  tickets,
  sorts,
});