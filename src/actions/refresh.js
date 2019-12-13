import { createAction } from 'redux-actions';
import { initSearch } from './fetchSearchId';

export const refreshRequest = createAction('REFRESH_REQUEST');
export const refreshFailure = createAction('REFRESH_FAILURE');
export const refreshSuccess = createAction('REFRESH_SUCCESS');

export const refresh = () => async (dispach) => {
  dispach(refreshRequest());
  try {
    await dispach(initSearch());
    dispach(refreshSuccess());
  } catch (err) {
    dispach(refreshFailure());
    throw err;
  }
};