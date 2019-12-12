import { handleActions } from 'redux-actions';
import { includes } from 'lodash';
import * as actions from '../actions';

export default handleActions({
  [actions.toggleAllStopsFilters]: (state) => {
    const { selectAll: oldSetAll, byStops: oldByStops } = state;
    const selectAll = !oldSetAll;
    const byStops = Object.keys(oldByStops)
      .reduce((acc, key) => ({ ...acc, [key]: selectAll }), {});

    return { selectAll, byStops };
  },
  [actions.toggleStopFilter]: (state, { payload: { value } }) => {
    const { byStops: oldByStops } = state;
    const inverted = !oldByStops[value];
    const byStops = { ...oldByStops, [value]: inverted };
    const selectAll = !includes(byStops, false);

    return { selectAll, byStops };
  },
}, {
  selectAll: true,
  byStops: { 0: true, 1: true, 2: true, 3: true },
 });
 