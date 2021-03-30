import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Edit, Trash2} from "react-feather";
import {IBook} from "../../../../types/Book";

type bookProps = {
  book: IBook,
  index: number,
  deleteBook: (index: number) => void,
  handleSetUpdateBook: (book: IBook | null) => void,
}

const BooksListItem: React.FC<bookProps> = ({book, index, deleteBook, handleSetUpdateBook}) => {
  return (
      <Container>
        <Row className="d-flex justify-content-between book-item">
          <h4>{index + 1}. {book.title}</h4>
          <span className="action-btns">
                    <Edit 
                      className="text-warning mr-2" 
                      onClick={() => {
                          handleSetUpdateBook(book)
                        }}
                    />
                    <Trash2 
                      className="text-danger mr-2" 
                      onClick={() => {
                        if (window.confirm("press 'ok' to delete book"))
                          deleteBook(index)
                      }}
                    />
                </span>
        </Row>
      </Container>
  );
};
export default BooksListItem