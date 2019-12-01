import React from 'react';
import { connect } from 'react-redux';
import { declinationHelper } from '../utils';
import { getTicketsByStops } from '../selectors';
import Filter from './Filter';

const mapStateToProps = (state) => {
  const stops = Object.keys(getTicketsByStops(state));
  const possibleFilters = stops.map((value) => {
    const label = declinationHelper(value);
    return { value, label };
  });

  return { possibleFilters };
};

class StopsFilter extends React.Component {
  handleClick = (event) => {
    console.log(event.target);
  }

  render() {
    const { possibleFilters } = this.props;

    return (
      <Filter>
        <Filter.Header>
          Количество пересадок
        </Filter.Header>
        <Filter.Content>
          <Filter.Item label="Все" value="all" defaultChecked />
          {possibleFilters.map((filter) => (
            <Filter.Item
              onClick={this.handleClick}
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

export default connect(mapStateToProps)(StopsFilter);
