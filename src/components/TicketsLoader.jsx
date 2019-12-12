import React from 'react';
import { connect } from 'react-redux';
import { Progress } from 'semantic-ui-react';
import * as actions from '../actions';
import './TicketsLoader.scss'

const mapStateToProps = ({ pollingState }) => pollingState;

const actionsList = {
  fetchTickets: actions.fetchTickets,
};


class TicketsLoader extends React.Component {
  componentDidMount() {
    const { fetchTickets, searchId } = this.props;
    fetchTickets(searchId);
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
