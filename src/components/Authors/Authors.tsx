import React from 'react';

import AddAuthor from './AddAuthor/AddAuthor';
import AuthorsList from './AuthorsList/AuthorsList';
import AuthorsTitle from './AuthorsTitle/AuthorsTitle';



const Authors = () => {
  return (
    <React.Fragment>
      <AuthorsTitle/>
      <AuthorsList/>
      <AddAuthor/>
    </React.Fragment>
  )
}

export default Authors;