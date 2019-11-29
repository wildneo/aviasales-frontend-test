import React from 'react';
import { Grid, Container } from 'semantic-ui-react';
import StopsFilter from './StopsFilter';
import SortingMenu from './SortingMenu';
import Ticket from './Ticket';


function App() {
  return (
    <Container>
      <Grid stackable centered>
        <Grid.Column width="5">
          <StopsFilter />
        </Grid.Column>
        <Grid.Column width="11">
          <SortingMenu />
          <Ticket />
          <Ticket />
          <Ticket />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default App;
