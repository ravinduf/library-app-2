import React, {useEffect, useState} from 'react';
import {Plus} from 'react-feather';

import BookForm from './BookForm/BookForm'

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


const AddBook = () => {

  const [showForm, setShowForm] = useState<boolean>(false);

  const handleShowForm = () => {
    
    setShowForm(!showForm);
  }

 

  return (
      <Container className="mt-3" fluid>
        <Row onClick={handleShowForm} className='mt-2 createLabel mb-5'>
          <Plus className="PlusIcon"/><h6>&nbsp;&nbsp;Add Book</h6>
        </Row>

        <span className={showForm ? 'active' : 'add-form'}>
          <BookForm />
        </span>
      </Container>
  )
}

export default AddBook;


