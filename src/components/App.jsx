import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import StopsFilter from './StopsFilter';
import SortingMenu from './SortingMenu';
// import Ticket from './Ticket';
import TicketsList from './TicketsList';


function App() {
  return (
    <Container>
      <Grid stackable centered>
        <Grid.Column width="5">
          <StopsFilter />
        </Grid.Column>
        <Grid.Column width="11">
          <SortingMenu />
          <TicketsList />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default App;
