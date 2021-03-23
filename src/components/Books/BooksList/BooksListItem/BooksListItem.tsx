import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Edit, Trash2} from "react-feather";


const BooksListItem = () => {
  return (
      <Container>
        <Row className="d-flex justify-content-between book-item">
          <h4>book</h4>
          <span className="action-btns">
            <Edit className="text-warning mr-2" />
            <Trash2 
              className="text-danger mr-2" 
              
            />
        </span>
        </Row>
      </Container>
  );
};
export default BooksListItem