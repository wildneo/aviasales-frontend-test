import React from 'react';
import { connect } from 'react-redux';
import Sorting from './Sorting';

const mapStateToProps = (state) => {
  return state;
};

class SortingMenu extends React.PureComponent {
  state = {
    activeTab: 'cheap',
  }

  handleClick = (e, { value }) => {
    this.setState({ activeTab: value });
    console.log(value);
  }

  render() {
    const { activeTab } = this.state;

    return (
      <Sorting>
        <Sorting.Tab
          onClick={this.handleClick}
          title="Самый дешевый"
          value="cheap"
          active={activeTab === 'cheap'}
        />
        <Sorting.Tab
          onClick={this.handleClick}
          title="Самый быстрый"
          value="fast"
          active={activeTab === 'fast'}
        />
      </Sorting>
    );
  }
}

export default connect(mapStateToProps)(SortingMenu);
