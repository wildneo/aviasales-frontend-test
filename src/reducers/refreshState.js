import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const defaultState = { refreshStatus: 'fresh', refreshTimerId: '' };

export default handleActions({
  [actions.setRefreshTimerId]: (state, { payload: { refreshTimerId } }) => ({
    ...state,
    refreshTimerId,
  }),
  [actions.refreshRequest]: (state) => ({ ...state, refreshStatus: 'refreshing' }),
  [actions.refreshSuccess]: (state) => ({ ...state, refreshStatus: 'fresh' }),
  [actions.requireRefresh]: (state) => ({ ...state, refreshStatus: 'needsRefresh' }),
}, defaultState);
