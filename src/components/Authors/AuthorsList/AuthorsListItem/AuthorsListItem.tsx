import React from 'react';
import {Edit, Trash2} from 'react-feather';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



const AuthorsListItem = () => {
  return (
      <Container>
        <Row className="d-flex justify-content-between author-item">
          <h4>Auhtor Name</h4>
          <span className="action-btns">
                    <Edit className="text-warning mr-2" />                  
                    <Trash2 className="text-danger mr-2" />                 
                </span>
        </Row>
      </Container>

  )
}

export default AuthorsListItem;
