import { combineReducers } from 'redux';
import fetchSearchState from './fetchSearchState';
import fetchTicketsState from './fetchTicketsState';
import pollingState from './pollingState';
import stopsFilter from './stopsFilter';
import tickets from './tickets';
import sorts from './sorts';

export default combineReducers({
  fetchSearchState,
  fetchTicketsState,
  pollingState,
  stopsFilter,
  tickets,
  sorts,
});