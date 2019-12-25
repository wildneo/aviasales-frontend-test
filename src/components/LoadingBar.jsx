import React from 'react';
import { connect } from 'react-redux';
import TicketsLoader from './TicketsLoader';

const mapStateToProps = ({ fetchSearchState }) => ({
  fetchSearchState
});

const LoadingBar = ({ fetchSearchState }) => {
  const isFetching = fetchSearchState === 'received';

  return isFetching && <TicketsLoader />;
};

export default connect(mapStateToProps)(LoadingBar);
