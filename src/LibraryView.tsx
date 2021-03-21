import React from 'react';

import Welcome from './components/Welcome/Welcome';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const LibraryView = () => {

  return (
      <Container fluid>

          <Row>
            <Welcome/>
          </Row>

        <Container fluid className="pt-4">
          <Row className="author-book">
            <Col xs={12} md={5}>
              <h1>Books</h1>
            </Col>
            <Col xs={12} md={5}>
              <h1>Authors</h1>
            </Col>
          </Row>
        </Container>


      </Container>
  )
}

export default LibraryView;

