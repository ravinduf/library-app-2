import React, {useState, useEffect} from 'react';
import {Plus} from 'react-feather';

import AuthorForm from './AuthorForm/AuthorForm'

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const AddAuthor = () => {

  const [showForm, setShowForm] = useState<boolean>(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  }

  return (
  <Container className="mt-3" fluid>

    <Row className="add-author-title" onClick={handleShowForm}>
      <Plus className="plus-btn"/> <h6 className="ml-2">Add Author</h6>
    </Row>

    <span className={showForm ? 'active' : 'add-form'}>
      <AuthorForm />
    </span>

  </Container>
  )
}

export default AddAuthor;
