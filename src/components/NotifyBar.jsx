import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Notify from './Notify'
import './Notify/Notify.scss'

const mapStateToProps = ({ refreshState }) => {
  const { refreshStatus } = refreshState;
  return { refreshStatus };
};

const actionsList = {
  refresh: actions.refresh,
};

class NotifyBar extends React.Component {
  handleClick = () => {
    const { refresh } = this.props;
    refresh();
  }

  render() {
    const { refreshStatus } = this.props;
    const isNeedsRefresh = refreshStatus === 'needsRefresh';
    const msg = 'Цены могли измениться! Обновите поиск, чтобы увидеть актуальные цены.';

    return (
      isNeedsRefresh && <div className="notify-bar">
        <Notify
          onClick={this.handleClick}
          message={msg}
          value="Обновить"
          color="red"
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, actionsList)(NotifyBar);
