import React from 'react';

import AuthorListItem from './AuthorsListItem/AuthorsListItem'
import { IAuthor } from '../../../types/Author';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

type AuthorsListProps = {
  authors: IAuthor[],
  deleteAuthor: (index: number) => void,
  handleSetUpdateAuthor: (author: IAuthor | null) => void,
}

const AuthorsList: React.FC<AuthorsListProps> = ({
      authors, deleteAuthor, handleSetUpdateAuthor
    }) => {
    
    const renderEmptyList = (
      <Row><h6><i>No Authors listed here</i></h6></Row>
    )

    const renderAuthorsList = (
        authors.map((author, index) => (
            <Row className="py-1" key={index}>
                <AuthorListItem author={author} 
                    index={index} 
                    deleteAuthor={deleteAuthor}
                    handleSetUpdateAuthor={handleSetUpdateAuthor}
                />
            </Row>
        ))
    )
    return (
      <Container fluid className="pt-4">
      {authors.length === 0 ? (renderEmptyList) :
          (renderAuthorsList)
      }

    </Container>
    )
}

export default AuthorsList;