import React from 'react';
import {Edit, Trash2} from 'react-feather';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {IAuthor} from '../../../../types/Author';

type AuthorsListItemProps = {
  author: IAuthor,
  index: number,
  deleteAuthor: (index: number) => void,
  handleSetUpdateAuthor: (author: IAuthor) => void,
}

const AuthorsListItem: React.FC<AuthorsListItemProps> = ({
                                                           author, index, deleteAuthor,
                                                           handleSetUpdateAuthor
                                                         }) => {
  return (
      <Container>
        <Row className="d-flex justify-content-between author-item">
          <h4>{index + 1}. {author.name}</h4>
          <span className="action-btns">
                    <Edit className="text-warning mr-2" 
                      onClick={() => {
                          handleSetUpdateAuthor(author)
                        }}
                    />
                    <Trash2 className="text-danger mr-2" onClick={() => {
                      if (window.confirm("press 'ok' to delete author")) {
                        deleteAuthor(index)
                      }
                    }}
                    />
                </span>
        </Row>
      </Container>

  )
}

export default AuthorsListItem;

