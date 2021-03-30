import React, {useState, useEffect} from 'react';
import {Plus} from 'react-feather';

import AuthorForm from './AuthorForm/AuthorForm'

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {IAuthor} from '../../../types/Author';

type AddAuthorProps = {
  addAuthor: (author: string, id: number) => void,
  authorIndex: number,
  updateAuthor: IAuthor | null,
  handleSetUpdateAuthor: (author: IAuthor | null) => void,
  updateAuthorsList: (updateAuthor: IAuthor) => void,
}

const AddAuthor: React.FC<AddAuthorProps> = ({
                                               addAuthor, authorIndex,
                                               updateAuthor, handleSetUpdateAuthor, updateAuthorsList
                                             }) => {

  const [showForm, setShowForm] = useState<boolean>(false);

  const handleShowForm = () => {
    if (updateAuthor) {
      handleSetUpdateAuthor(null)
    }
    setShowForm(!showForm);
  }

  useEffect(() => {
    if (updateAuthor && !showForm) {
      setShowForm(true);
    }
  },[updateAuthor, showForm])

  return (
      <Container className="mt-3" fluid>

        <Row className="add-author-title" onClick={handleShowForm}>
          <Plus className="plus-btn"/> <h6 className="ml-2">Add Author</h6>
        </Row>

        <span className={showForm ? 'active' : 'add-form'}>
                 <AuthorForm handleShowForm={handleShowForm}
                             addAuthor={addAuthor}
                             authorIndex={authorIndex}
                             updateAuthor={updateAuthor}
                             handleSetUpdateAuthor={handleSetUpdateAuthor}
                             updateAuthorsList={updateAuthorsList}
                 />
            </span>

      </Container>
  )
}

export default AddAuthor;
