import React, {useState, useEffect} from 'react';
import Select from 'react-select';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {XCircle} from 'react-feather';
import {IBook} from "../../../../types/Book";
import {IAuthor} from "../../../../types/Author";
import {selectStyles} from "./constants";
import {FormGroup} from "react-bootstrap";


type BookFormProps = {
  handleShowForm(): void
  addBook: (book: IBook) => void;
  authors: IAuthor[],
  handleSetUpdateBook: (book: IBook | null) => void,
  updateBook: IBook | null,
  handleUpdateBookList: () => void,
}

type errors = {
  errTitle: boolean,
  errIsbn: boolean,
  errAuthor: boolean,
}

const BookForm: React.FC<BookFormProps> = ({
                                             handleShowForm, addBook, authors,
                                             updateBook, handleSetUpdateBook,
                                             handleUpdateBookList
                                           }) => {

  const populateOptions = (authors: IAuthor[] | null) => {
    if (authors != null) {
      return authors.map((author: IAuthor) => (
          {value: author.id, label: author.name.toString()}
      ))
    }
    return [];
  }

  const [errors, setErrors] = useState<errors>({errTitle: false, errIsbn: false, errAuthor: false})

  const [newBook, setNewBook] = useState<IBook>({
    id: 0,
    title: "",
    isbn: "",
    author: "",
  })

  const [showErrors, setShowErrors] = useState<boolean>(false)

  useEffect(() => {

    if (updateBook) {

      if (updateBook.title === "") {
        setErrors(errors => ({...errors, errTitle: true}))
      } else {
        setErrors(errors => ({...errors, errTitle: false}))
      }

      if (updateBook.isbn === "") {
        setErrors(errors => ({...errors, errIsbn: true}))
      } else {
        setErrors(errors => ({...errors, errIsbn: false}))
      }

      if (updateBook.author === "") {
        setErrors(errors => ({...errors, errAuthor: true}))
      } else {
        setErrors(errors => ({...errors, errAuthor: false}))
      }


    } else {

      if (newBook.title === "") {
        setErrors(errors => ({...errors, errTitle: true}))
      } else {
        setErrors(errors => ({...errors, errTitle: false}))
      }

      if (newBook.isbn === "") {
        setErrors(errors => ({...errors, errIsbn: true}))
      } else {
        setErrors(errors => ({...errors, errIsbn: false}))
      }

      if (newBook.author === "") {
        setErrors(errors => ({...errors, errAuthor: true}))
      } else {
        setErrors(errors => ({...errors, errAuthor: false}))
      }
    
    }

  }, [newBook, updateBook, showErrors])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewBook(book => ({...book, [e.target.name]: e.target.value}))
  }

  const handleOnAuthorChange = (selected: { value: number, label: string | null } | null) => {
    if (selected != null) {
      if (updateBook) {
        const newUpdatedBook = {...updateBook, author: selected.label}
        handleSetUpdateBook(newUpdatedBook);
      } else {
        setNewBook(book => ({...book, author: selected.label}))
      }

    } else {
      if (updateBook) {
        const newUpdatedBook = {...updateBook, author: ""}
        handleSetUpdateBook(newUpdatedBook);
      } else {
        setNewBook(book => ({...book, author: ""}))
      }
    }
  }

  const handleXBtn = () => {
    handleShowForm();
    setShowErrors(false);

  }
  const handleUpdateBook = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (updateBook) {
      console.log('hello')
      const newUpdatedBook = {...updateBook, [e.target.name]: e.target.value}
      handleSetUpdateBook(newUpdatedBook);
    }
  }

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (updateBook) {
      if (!errors.errTitle && !errors.errIsbn && !errors.errAuthor) {
        setShowErrors(false)
        console.log('hellp', errors)
        handleUpdateBookList()
        handleSetUpdateBook(null)
      } else {
        setShowErrors(true)
      }
    } else {
      if (!errors.errTitle && !errors.errIsbn && !errors.errAuthor) {
        setShowErrors(false)
        console.log('hellp', errors)
        addBook(newBook)
        setNewBook({
          id: 0,
          title: "",
          isbn: "",
          author: ""
        })
      } else {
        setShowErrors(true)
      }
    }
  }

  return (
      <React.Fragment>
        <Row className="mt-5">
          <Col md={10} xs={12} className="d-flex justify-content-between">
            <Row>
              <h4 className="create-book-title">{updateBook ? ('Update Book') : ('Create Book')}</h4>
            </Row>
            <XCircle className="x-btn" onClick={handleXBtn}/>
          </Col>
        </Row>

        <Row className="d-flex mt-3">

          <Form className="add-book-form">
            <FormGroup>
              <Form.Label>Title of the Book</Form.Label>
              <Form.Control
                  value={updateBook ? updateBook.title : newBook.title}
                  type="text"
                  name="title"
                  onChange={updateBook ? handleUpdateBook : handleChange}
              />
              {(errors.errTitle && showErrors) ? (<p className="error-msg">This field is required !</p>) : ("")}

              <Form.Label className="mt-2">Isbn</Form.Label>
              <Form.Control
                  value={updateBook ? updateBook.isbn : newBook.isbn}
                  type='text'
                  name='isbn'
                  onChange={updateBook ? handleUpdateBook : handleChange}
              />
              {(errors.errIsbn && showErrors) ? (<p className="error-msg">This field is required !</p>) : ("")}

              <Form.Label className="mt-2">Author</Form.Label>
              <Select
                  styles={selectStyles}
                  className="single-basic create-select"
                  classNamePrefix="select"
                  isClearable={true}
                  isSearchable={true}
                  options={populateOptions(authors)}
                  onChange={(value: { value: number, label: string | null } | null) =>
                      handleOnAuthorChange(value)}
                  value={updateBook ? ({value: 0, label: updateBook.author}) :
                      ({value: 0, label: newBook.author})}
              />
              {(errors.errAuthor && showErrors) ? (<p className="error-msg">This field is required !</p>) : ("")}

            </FormGroup>

            <Button type='submit' className="float-right create-book-btn" onClick={handleSubmit}>
              {updateBook ? ('Update') : ('Create')}
            </Button>

          </Form>
        </Row>

      </React.Fragment>


  );
}
export default BookForm;
