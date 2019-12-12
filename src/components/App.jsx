import React from 'react';
// import { Grid, Container } from 'semantic-ui-react';
import { Container, Row, Col } from 'react-grid-system';
import StopsFilter from './StopsFilter';
import SortingMenu from './SortingMenu';
import Header from './Header';
import TicketsList from './TicketsList';

const App = () => (
  <Container>
    <Row>
      <Col>
        <Header />
      </Col>
    </Row>
    <Row>
      <Col sm={12} md={4}>
        <StopsFilter />
      </Col>
      <Col sm={12} md={8}>
        <SortingMenu />
        <TicketsList />
      </Col>
    </Row>
  </Container>
);

export default App;
