import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getStopsFilter, availableFiltersSelector } from '../selectors';
import Filter from './Filter';

const mapStateToProps = (state) => {
  const selectAll = getStopsFilter(state).selectAll;
  const possibleFilters = availableFiltersSelector(state);

  return { selectAll, possibleFilters };
};

const actionsList = {
  toggleAllStopsFilters: actions.toggleAllStopsFilters,
  toggleStopFilter: actions.toggleStopFilter,
};

class StopsFilter extends React.PureComponent {
  handleChangeAll = () => {
    const { toggleAllStopsFilters } = this.props;
    toggleAllStopsFilters();
  }

  handleChange = (e, { value }) => {
    const { toggleStopFilter } = this.props;
    toggleStopFilter({ value });
  }

  render() {
    const { selectAll, possibleFilters } = this.props;

    return (
      <Filter>
        <Filter.Header>
          Количество пересадок
        </Filter.Header>
        <Filter.Content>
          <Filter.Item
            onChange={this.handleChangeAll}
            checked={selectAll}
            label="Все"
            value="all"
          />
          {possibleFilters.map((filter) => (
            <Filter.Item
              onChange={this.handleChange}
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
