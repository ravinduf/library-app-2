import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const BooksTitle: React.FC = () => {
  return (
      <Container fluid>
        <Row className="b-title">
          <h2>Books</h2>
        </Row>
      </Container>
  );
};

export default BooksTitle;