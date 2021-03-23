import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {XCircle} from 'react-feather';

import {selectStyles} from "./constants";
import {FormGroup} from "react-bootstrap";


const BookForm = () => {
  
  return (
      <React.Fragment>
        <Row className="mt-5">
          <Col md={10} xs={12} className="d-flex justify-content-between">
            <Row>
              <h4 className="create-book-title">create book</h4>
            </Row>
            <XCircle className="x-btn"/>
          </Col>
        </Row>

        <Row className="d-flex mt-3">

          <Form className="add-book-form">
            <FormGroup>
              <Form.Label>Title of the Book</Form.Label>
              <Form.Control
                  type="text"
                  name="title"
              />

              <Form.Label className="mt-2">Isbn</Form.Label>
              <Form.Control
                  type='text'
                  name='isbn'
              />

              <Form.Label className="mt-2">Author</Form.Label>
              <Select
                  styles={selectStyles}
                  className="single-basic create-select"
                  classNamePrefix="select"
                  isClearable={true}
                  isSearchable={true}
              />

            </FormGroup>

            <Button type='submit' className="float-right create-book-btn"> create </Button>

          </Form>
        </Row>

      </React.Fragment>


  );
}
export default BookForm;
