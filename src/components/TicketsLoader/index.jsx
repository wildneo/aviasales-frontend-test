import React from 'react';
import { connect } from 'react-redux';
import { Progress } from 'semantic-ui-react';
import { TIME_TO_REFRESH } from '../../consts';
import * as actions from '../../actions';
import './TicketsLoader.scss'

const mapStateToProps = ({ pollingState }) => pollingState;

const actionsList = {
  fetchTickets: actions.fetchTickets,
  refreshSuccess: actions.refreshSuccess,
  requireRefresh: actions.requireRefresh,
  setRefreshTimerId: actions.setRefreshTimerId,
};

class TicketsLoader extends React.Component {
  componentDidMount() {
    const { fetchTickets, searchId } = this.props;
    fetchTickets(searchId);
  }

  componentWillUnmount() {
    const { refreshSuccess, requireRefresh, setRefreshTimerId } = this.props;
    refreshSuccess();
    const refreshTimerId = setTimeout(requireRefresh, TIME_TO_REFRESH);
    setRefreshTimerId({ refreshTimerId });
  }

  render() {
    const { counter } = this.props;

    return (
      <div className="progress-bar">
        <Progress
          size="tiny"
          indicating
          value={counter}
          total="25"
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, actionsList)(TicketsLoader);
