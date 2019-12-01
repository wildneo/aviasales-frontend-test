import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getSorts } from '../selectors';
import Sorting from './Sorting';

const tabs = [
  { value: 'cheap', title: 'Самый дешевый' },
  { value: 'fast', title: 'Самый быстрый' },
];

const mapStateToProps = (state) => {
  const activeTab = getSorts(state);

  return { activeTab };
};

const actionsList = {
  setSorting: actions.setSorting,
};

class SortingMenu extends React.Component {
  handleClick = (e, { value }) => {
    const { setSorting } = this.props;
    setSorting({ value });
  }

  render() {
    const { activeTab } = this.props;

    return (
      <Sorting>
        {tabs.map((tab) => (
          <Sorting.Tab
            onClick={this.handleClick}
            active={tab.value === activeTab}
            key={tab.value}
            value={tab.value}
            title={tab.title}
          />
        ))}
      </Sorting>
    );
  }
}

export default connect(mapStateToProps, actionsList)(SortingMenu);
