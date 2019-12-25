import { createAction } from 'redux-actions';
import { initSearch } from './fetchSearchId';

export const refreshRequest = createAction('REFRESH_REQUEST');
export const refreshSuccess = createAction('REFRESH_SUCCESS');
export const requireRefresh = createAction('REFRESH_REQUIRE');

export const setRefreshTimerId = createAction('REFRESH_SET_TIMER_ID');

export const refresh = () => async (dispach) => {
  dispach(refreshRequest());
  await dispach(initSearch());
};