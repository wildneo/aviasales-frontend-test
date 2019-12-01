import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';

export const fetchSearchIdRequest = createAction('FETCH_SEARCH_ID_REQUEST');
export const fetchSearchIdFailure = createAction('FETCH_SEARCH_ID_FAILURE');
export const fetchSearchIdSuccess = createAction('FETCH_SEARCH_ID_SUCCESS');

export const fetchTicketsRequest = createAction('FETCH_TICKETS_REQUEST');
export const fetchTicketsFailure = createAction('FETCH_TICKETS_FAILURE');
export const fetchTicketsSuccess = createAction('FETCH_TICKETS_SUCCESS');

export const ticketsSearchComplete = createAction('TICKETS_SEARCH_COMPLETE');

export const setSorting = createAction('SET_SORTING');

export const initSearch = () => async (dispach) => {
  dispach(fetchSearchIdRequest());
  try {
    const searchUrl = routes.search();
    const { data: { searchId } } = await axios.request(searchUrl);
    dispach(fetchSearchIdSuccess({ searchId }));

    const timerId = setInterval(async () => {
      dispach(fetchTicketsRequest());
      try {
        const ticketsUrl = routes.tickets(searchId);
        const { data: { tickets, stop } } = await axios.request(ticketsUrl);
        dispach(fetchTicketsSuccess({ tickets }));
        if (stop) {
          clearInterval(timerId);
          dispach(ticketsSearchComplete());
        }
      } catch (err) {
        dispach(fetchTicketsFailure());
        throw err;
      }
    }, 1000);
    
  } catch (err) {
    dispach(fetchSearchIdFailure());
    throw err;
  }
};
