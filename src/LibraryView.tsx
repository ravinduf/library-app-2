import React, {useState} from 'react';

import Welcome from './components/Welcome/Welcome';
import Authors from './components/Authors/Authors';
import Books from './components/Books/Books';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {IAuthor} from './types/Author';


const LibraryView = () => {
  const [authors, setAuthors] = useState<IAuthor[]>([]);
  const [updateAuthor, setUpdateAuthor] = useState<IAuthor | null>(null);

  const addAuthor = (author: string, id: number) => {
    setAuthors(Authors => ([...Authors, {id, name: author}]))
  }

  const deleteAuthor = (index: number) => {
    const newAuthors = authors.slice()
    newAuthors.splice(index, 1);
    setAuthors(newAuthors)
  }

  const handleSetUpdateAuthor = (author: IAuthor | null) => {
    console.log(author)
    setUpdateAuthor(author)
  }

  const updateAuthorsList = (updateAuthor: IAuthor) => {
    if (updateAuthor) {
      const index = updateAuthor.id;
      authors.splice(index, 1, updateAuthor)
    }
  }

  return (
      <Container fluid>

          <Row>
            <Welcome/>
          </Row>

        <Container fluid className="pt-4">
          <Row className="author-book">
            <Col xs={12} md={5}>
              <Books authors={authors}/>
            </Col>
            <Col xs={12} md={5}>
              <Authors
                authors={authors}
                addAuthor={addAuthor}
                deleteAuthor={deleteAuthor}
                authorIndex={authors.length}
                handleSetUpdateAuthor={handleSetUpdateAuthor}
                updateAuthor={updateAuthor}
                updateAuthorsList={updateAuthorsList}
              />
            </Col>
          </Row>
        </Container>


      </Container>
  )
}

export default LibraryView;

