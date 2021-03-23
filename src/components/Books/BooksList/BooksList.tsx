import React from 'react';
import BooksListItem from './BooksListItem/BooksListItem'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const BooksList = () => {

  return (

      <Container fluid className="pt-4">
          <Row><BooksListItem/></Row>
          <Row><BooksListItem/></Row>
          <Row><BooksListItem/></Row>
          
      </Container>
  )
}
export default BooksList;