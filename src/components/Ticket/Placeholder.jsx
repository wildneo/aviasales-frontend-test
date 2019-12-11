import React from 'react';
import { Placeholder as UIPlaceholder } from 'semantic-ui-react'
import './Ticket.scss';

const Placeholder = () => (
  <div className="ticket">
    <div className="ticket-placeholder">
      <UIPlaceholder fluid>
        <UIPlaceholder.Header>
          <UIPlaceholder.Line />
          <UIPlaceholder.Line />
        </UIPlaceholder.Header>
        <div className="segment">
          <UIPlaceholder.Line />
          <UIPlaceholder.Line />
        </div>
        <div className="segment">
          <UIPlaceholder.Line />
          <UIPlaceholder.Line />
        </div>
      </UIPlaceholder>
    </div>
  </div>
);

export default Placeholder;
