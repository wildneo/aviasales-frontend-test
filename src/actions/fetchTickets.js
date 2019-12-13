import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';

export const fetchTicketsRequest = createAction('FETCH_TICKETS_REQUEST');
export const fetchTicketsFailure = createAction('FETCH_TICKETS_FAILURE');
export const fetchTicketsSuccess = createAction('FETCH_TICKETS_SUCCESS');

export const longPollingFinished = createAction('LONG_POLLING_FINISHED');

export const fetchTickets = (searchId) => async (dispach) => {
  dispach(fetchTicketsRequest());
  try {
    const ticketsUrl = routes.tickets(searchId);
    const { data: { tickets, stop } } = await axios.request(ticketsUrl);
    dispach(fetchTicketsSuccess({ tickets }));
    stop
      ? dispach(longPollingFinished())
      : dispach(fetchTickets(searchId));
  } catch (err) {
    dispach(fetchTicketsFailure());
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispach(fetchTickets(searchId));
    throw err;
  }
};