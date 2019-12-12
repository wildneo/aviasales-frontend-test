import { handleActions } from 'redux-actions';
import * as actions from '../actions';

export default handleActions({
  [actions.fetchTicketsSuccess]: (state, { payload: { tickets } }) => (
    [...state, ...tickets]
  )
}, []);
