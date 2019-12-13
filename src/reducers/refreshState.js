import { handleActions } from 'redux-actions';
import * as actions from '../actions';

export default handleActions({
  [actions.refreshRequest]: () => 'requested',
  [actions.refreshFailure]: () => 'failed',
  [actions.refreshSuccess]: () => 'finished',
}, 'none');
