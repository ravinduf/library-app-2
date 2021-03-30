import React from 'react';
import BooksListItem from './BooksListItem/BooksListItem'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {IBook} from "../../../types/Book";

type booksListProps = {
  books: IBook[],
  deleteBook: (index: number) => void,
  handleSetUpdateBook: (book: IBook | null) => void,
}

const BooksList: React.FC<booksListProps> = ({books, deleteBook, handleSetUpdateBook}) => {

  const RenderBook = () => {
    if (books.length === 0) {
      return <Row><h6><i>No Books listed here</i></h6></Row>
    }

    return books.map((books: IBook, index: number) => {
      return (
          <Row className="py-1" key={index}>
            <BooksListItem
                book={books}
                index={index}
                deleteBook={deleteBook}
                handleSetUpdateBook={handleSetUpdateBook}
            />
          </Row>
      )
    })
  }

  return (

      <Container fluid className="pt-4">

        {RenderBook()}


      </Container>
  )
}
export default BooksList;