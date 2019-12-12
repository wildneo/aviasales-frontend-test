import { handleActions } from 'redux-actions';
import * as actions from '../actions';

export default handleActions({
  [actions.fetchSearchIdSuccess]: (state, { payload: { searchId } }) => (
    { ...state, searchId }
  ),
  [actions.fetchTicketsSuccess]: (state) => (
    { ...state, counter: state.counter + 1 }
  ),
}, { tickets: {}, searchId: null, counter: 0 });
