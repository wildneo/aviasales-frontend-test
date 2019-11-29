import React from 'react';
import { connect } from 'react-redux';
import Filter from './Filter';

const mapStateToProps = (state) => {
  return state;
};

class StopsFilter extends React.Component {
  handleClick = (event) => {
    console.log(event.target);
  }

  render() {

    return (
      <Filter>
        <Filter.Header>
          Количество пересадок
        </Filter.Header>
        <Filter.Content>
          <Filter.Item label="Все" disabled />
          <Filter.Item label="Все" />
          <Filter.Item onClick={this.handleClick} label="Все" value="all" />
          <Filter.Item label="Все" defaultChecked />
          <Filter.Item label="Все" />
        </Filter.Content>
      </Filter>
    );
  }
}

export default connect(mapStateToProps)(StopsFilter);
