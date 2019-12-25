import axios from 'axios';
import { createAction } from 'redux-actions';
import routes from '../routes';

export const fetchSearchIdRequest = createAction('FETCH_SEARCH_ID_REQUEST');
export const fetchSearchIdFailure = createAction('FETCH_SEARCH_ID_FAILURE');
export const fetchSearchIdSuccess = createAction('FETCH_SEARCH_ID_SUCCESS');

export const initSearch = () => async (dispach) => {
  dispach(fetchSearchIdRequest());
  try {
    const searchUrl = routes.search();
    const request = await axios.request(searchUrl);
    const { data: { searchId } } = request;
    dispach(fetchSearchIdSuccess({ searchId }));
  } catch (err) {
    dispach(fetchSearchIdFailure());
    throw err;
  }
};