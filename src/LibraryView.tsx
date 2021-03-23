import React from 'react';

import Welcome from './components/Welcome/Welcome';
import Authors from './components/Authors/Authors';
import Books from './components/Books/Books';


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
              <Books/>
            </Col>
            <Col xs={12} md={5}>
              <Authors/>
            </Col>
          </Row>
        </Container>


      </Container>
  )
}

export default LibraryView;

