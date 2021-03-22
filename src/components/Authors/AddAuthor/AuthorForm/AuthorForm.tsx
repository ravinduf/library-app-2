import React, {useState} from 'react';
import {XCircle} from 'react-feather';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



const AuthorForm = () => {

  const [author, setAuthor] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  }

  return (
    <React.Fragment>
      <Row className="mt-5">
        <Col md={10} xs={12} className="d-flex justify-content-between">
          <Row>
            <h4 className="create-author-title">
              Create Author
            </h4>
          </Row>
          <XCircle  className="x-btn"/>
        </Col>
      </Row>

      <Row className="d-flex mt-3">

        <div className="add-author-form">
          <Form>
            <Form.Group>
              <Form.Label>Name of Author</Form.Label>
              <Form.Control type="text" onChange={handleChange}
                            value={author}
              />
              
            </Form.Group>
            <Button type="submit" className="float-right create-author-btn">
              Create
            </Button>
          </Form>
        </div>
      </Row>

    </React.Fragment>
  );
}

export default AuthorForm;