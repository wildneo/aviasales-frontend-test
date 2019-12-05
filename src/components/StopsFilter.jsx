import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getAllFiltersState, possibleFiltersSelector } from '../selectors';
import Filter from './Filter';

const mapStateToProps = (state) => {
  const setAll = getAllFiltersState(state);
  const possibleFilters = possibleFiltersSelector(state);

  return { setAll, possibleFilters };
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
    const { setAll, possibleFilters } = this.props;

    return (
      <Filter>
        <Filter.Header>
          Количество пересадок
        </Filter.Header>
        <Filter.Content>
          <Filter.Item
            onChange={this.handleChangeAll}
            checked={setAll}
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
