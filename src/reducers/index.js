import { combineReducers } from 'redux';
import fetchSearchState from './fetchSearchState';
import fetchTicketsState from './fetchTicketsState';
import pollingState from './pollingState';
import stopFilters from './stopFilters';
import tickets from './tickets';
import sorts from './sorts';

export default combineReducers({
  fetchSearchState,
  fetchTicketsState,
  pollingState,
  stopFilters,
  tickets,
  sorts,
});