import React from 'react';
import { IAuthor } from '../../types/Author';

import AddAuthor from './AddAuthor/AddAuthor';
import AuthorsList from './AuthorsList/AuthorsList';
import AuthorsTitle from './AuthorsTitle/AuthorsTitle';

type AuthorsProps = {
  authors: IAuthor[],
  addAuthor: (author: string, id: number) => void,
  deleteAuthor: (index: number) => void,
  authorIndex: number,
  handleSetUpdateAuthor: (author: IAuthor | null) => void,
  updateAuthor: IAuthor | null,
  updateAuthorsList: (updateAuthor: IAuthor) => void,
}

const Authors: React.FC<AuthorsProps> = ({
  authors, addAuthor,
  deleteAuthor, authorIndex, handleSetUpdateAuthor,
  updateAuthor, updateAuthorsList
}) => {
  return (
    <React.Fragment>
      <AuthorsTitle/>
      <AuthorsList
        authors={authors}
        deleteAuthor={deleteAuthor}
        handleSetUpdateAuthor={handleSetUpdateAuthor}
      />

      <AddAuthor
        addAuthor={addAuthor}
        authorIndex={authorIndex}
        updateAuthor={updateAuthor}
        handleSetUpdateAuthor={handleSetUpdateAuthor}
        updateAuthorsList={updateAuthorsList}
        />
    </React.Fragment>
  )
}

export default Authors;