import React, {useState} from 'react';
import {XCircle} from 'react-feather';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {IAuthor} from '../../../../types/Author';

type CreateAuthorFormProps = {
  handleShowForm(): void,
  addAuthor: (author: string, id: number) => void,
  authorIndex: number,
  updateAuthor: IAuthor | null,
  handleSetUpdateAuthor: (author: IAuthor | null) => void,
  updateAuthorsList: (updateAuthor: IAuthor) => void,
}

type error = {
  errAuthor : boolean,
}

const CreateAuthorForm: React.FC<CreateAuthorFormProps> = ({
                                                             handleShowForm,
                                                             addAuthor,
                                                             authorIndex,
                                                             updateAuthor,
                                                             handleSetUpdateAuthor,
                                                             updateAuthorsList
                                                           }) => {

  const [author, setAuthor] = useState<string>("");

  const [erros, setErrors] = useState<error>({errAuthor: false});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(e.target.value);
  }

  const handleUpdateAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updateAuthor) {
      const updatedAuthor = {id: updateAuthor.id, name: e.target.value};
      handleSetUpdateAuthor(updatedAuthor)
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (updateAuthor) {
      if (updateAuthor.name === "") {
        setErrors({errAuthor: true})
      }
      else{
        setErrors({errAuthor: false})
        updateAuthorsList(updateAuthor)
        handleSetUpdateAuthor(null)
      }
    } else {
      if (author === "") {
        setErrors({errAuthor: true})
      }
      else{
        setErrors({errAuthor: false})
        addAuthor(author, authorIndex)
        setAuthor('')
      }
    }
  }

  return (
      <React.Fragment>
        <Row className="mt-5">
          <Col md={10} xs={12} className="d-flex justify-content-between">
            <Row>
              <h4 className="create-author-title">
                {updateAuthor ? ('Update Author') : ('Create Author')}
              </h4>
            </Row>
            <XCircle onClick={handleShowForm} className="x-btn"/>
          </Col>
        </Row>

        <Row className="d-flex mt-3">

          <div className="add-author-form">
            <Form>
              <Form.Group>
                <Form.Label>Name of Author</Form.Label>
                <Form.Control type="text" onChange={updateAuthor ? handleUpdateAuthorChange : handleChange}
                              value={updateAuthor ? updateAuthor.name : author}
                />
                {erros.errAuthor ? (<p className="error-msg">This field is required !</p>) : ("")}
              </Form.Group>
              <Button type="submit" className="float-right create-author-btn" onClick={handleSubmit}>
                {updateAuthor ? ('Update') : ('Create')}
              </Button>
            </Form>
          </div>
        </Row>

      </React.Fragment>
  );
}

export default CreateAuthorForm;