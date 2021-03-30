import React, {useState} from "react";
import BooksTitle from "./BooksTitle/BooksTitle";
import BooksList from "./BooksList/BooksList";
import AddBook from "./AddBook/AddBook";
import {IBook} from "../../types/Book";
import {IAuthor} from "../../types/Author";

type BooksProps = {
  authors: IAuthor[],
}

const Books: React.FC<BooksProps> = ({authors}) => {

  const [books, setBooks] = useState<IBook[]>([])
  const [updateBook, setUpdateBook] = useState<IBook | null>(null)

  const handleSetUpdateBook = (book: IBook | null) => {
    setUpdateBook(book)
  }

  const addBook = (newBook: IBook) => {
    newBook.id = books.length
    const newBooksList: IBook[] = books.slice();
    newBooksList.push(newBook)
    setBooks(newBooksList)
  }

  const deleteBook = (index: number) => {
    const newBooks = books.slice();
    newBooks.splice(index, 1);
    setBooks(newBooks)
  }

  const handleUpdateBookList = () => {
    if (updateBook) {
      const index = updateBook.id
      books.splice(index, 1, updateBook)
    }
  }

  return (
      <React.Fragment>
        <BooksTitle/>
        <BooksList
            books={books}
            deleteBook={deleteBook}
            handleSetUpdateBook={handleSetUpdateBook}
        />
        <AddBook
            addBook={addBook}
            authors={authors}
            updateBook={updateBook}
            handleSetUpdateBook={handleSetUpdateBook}
            handleUpdateBookList={handleUpdateBookList}
        />
      </React.Fragment>
  );
};

export default Books;
