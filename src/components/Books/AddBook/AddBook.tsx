import React, {useEffect, useState} from 'react';
import {Plus} from 'react-feather';

import BookForm from './BookForm/BookForm'

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {IBook} from "../../../types/Book";
import {IAuthor} from "../../../types/Author";

type addBookProps = {
  addBook: (book: IBook) => void,
  authors: IAuthor[],
  updateBook: IBook | null,
  handleSetUpdateBook: (book: IBook | null) => void,
  handleUpdateBookList: () => void,
}

const AddBook: React.FC<addBookProps> = ({
                                           addBook, authors, updateBook,
                                           handleSetUpdateBook, handleUpdateBookList
                                         }) => {

  const [showForm, setShowForm] = useState<boolean>(false);

  const handleShowForm = () => {
    if (updateBook) {
      handleSetUpdateBook(null)
    }
    setShowForm(!showForm);
  }

  useEffect(() => {
    if (updateBook && !showForm) {
      setShowForm(true)
    }
  }, [updateBook, showForm])

  return (
      <Container className="mt-3" fluid>

        <Row onClick={handleShowForm} className='mt-2 createLabel mb-5'>

          <Plus className="PlusIcon"/><h6>&nbsp;&nbsp;Add Book</h6>

        </Row>

        <span className={showForm ? 'active' : 'add-form'}>
                 <BookForm
                     handleShowForm={handleShowForm}
                     addBook={addBook}
                     authors={authors}
                     updateBook={updateBook}
                     handleSetUpdateBook={handleSetUpdateBook}
                     handleUpdateBookList={handleUpdateBookList}
                 />
            </span>

      </Container>
  )
}

export default AddBook;


