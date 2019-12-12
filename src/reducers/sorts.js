import { handleActions } from 'redux-actions';
import * as actions from '../actions';

export default handleActions({
  [actions.setSorting]: (state, { payload: { value } }) => (value),
}, 'cheap');
