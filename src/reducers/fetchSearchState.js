import { handleActions } from 'redux-actions';
import * as actions from '../actions';

export default handleActions({
  [actions.fetchSearchIdRequest]: () => 'requested',
  [actions.fetchSearchIdFailure]: () => 'failed',
  [actions.fetchSearchIdSuccess]: () => 'received',
  [actions.longPollingFinished]: () => 'finished',
}, 'none');
