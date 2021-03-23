import React, {useState} from "react";

import BooksTitle from "./BooksTitle/BooksTitle";
import BooksList from "./BooksList/BooksList";
import AddBook from "./AddBook/AddBook";



const Books = () => {

  return (
    <React.Fragment>
      <BooksTitle/>
      <BooksList/>
      <AddBook/>
    </React.Fragment>
  );
};

export default Books;
