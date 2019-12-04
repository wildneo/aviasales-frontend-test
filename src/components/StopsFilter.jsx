import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { declinationHelper } from '../utils';
import Filter from './Filter';

const mapStateToProps = (state) => {
  const { allStopsFilter, byStops } = state.stopFilters;
  const stops = Object.keys(byStops);
  const possibleFilters = stops.map((value) => {
    const label = declinationHelper(value);
    return { value, label, isChecked: byStops[value] };
  });

  return { allStopsFilter, possibleFilters };
};

const actionsList = {
  toggleAllStopsFilters: actions.toggleAllStopsFilters,
  toggleStopFilter: actions.toggleStopFilter,
};

class StopsFilter extends React.PureComponent {
  handleAllClick = () => {
    const { toggleAllStopsFilters } = this.props;
    toggleAllStopsFilters();
  }

  handleClick = (e, { value }) => {
    const { toggleStopFilter } = this.props;
    toggleStopFilter({ value });
  }

  render() {
    const { allStopsFilter, possibleFilters } = this.props;

    return (
      <Filter>
        <Filter.Header>
          Количество пересадок
        </Filter.Header>
        <Filter.Content>
          <Filter.Item
            onClick={this.handleAllClick}
            checked={allStopsFilter}
            label="Все"
            value="all"
          />
          {possibleFilters.map((filter) => (
            <Filter.Item
              onClick={this.handleClick}
              checked={filter.isChecked}
              key={filter.value}
              value={filter.value}
              label={filter.label}
            />
          ))}
        </Filter.Content>
      </Filter>
    );
  }
}

export default connect(mapStateToProps, actionsList)(StopsFilter);
