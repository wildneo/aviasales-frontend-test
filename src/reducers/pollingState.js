import { handleActions } from 'redux-actions';
import * as actions from '../actions';

const defaultState = { searchId: '', counter: 0, firstFetch: true };

export default handleActions({
  [actions.fetchSearchIdSuccess]: (state, { payload: { searchId } }) => ({
    ...state,
    searchId,
  }),
  [actions.fetchTicketsSuccess]: (state) => ({
    ...state,
    counter: state.counter + 1,
    firstFetch: state.firstFetch && false,
  }),
  [actions.refreshRequest]: () => defaultState,
}, defaultState);
