import { handleActions } from 'redux-actions';
import { groupBy } from 'lodash';
import { union, maxStops } from '../utils';
import * as actions from '../actions';

export default handleActions({
  [actions.fetchTicketsSuccess]: (state, { payload: { tickets } }) => {
    const all = [...state.all, ...tickets];
    const group = groupBy(tickets, (t) => maxStops(t.segments));
    const byStops = union(group, state.byStops);

    return { all, byStops };
  }
}, { all: [], byStops: {} });
