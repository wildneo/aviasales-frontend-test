import React from 'react';
import { connect } from 'react-redux';
import { Grid, Segment } from 'semantic-ui-react';
import Filter from './Filter';

const mapStateToProps = (state) => {
  return state;
};

const Header = ({ children }) => (<div className="filter-header">{children}</div>);

class StopsFilter extends React.Component {
  handleClick = (event) => {
    console.log(event.target.value);
  }

  render() {

    return (
      <Filter>
        <Filter.Header>
          Количество пересадок
        </Filter.Header>
        <Filter.Content>
          <Filter.Item label="Все" disabled />
          <Filter.Item label="Все" checked />
          <Filter.Item onClick={this.handleClick} label="Все" value="all" />
          <Filter.Item label="Все" defaultChecked />
          <Filter.Item label="Все" />
        </Filter.Content>
      </Filter>
    );
  }
}

Filter.Header = Header;

export default connect(mapStateToProps)(StopsFilter);
