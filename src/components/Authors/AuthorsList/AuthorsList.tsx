import React from 'react';
import AuthorListItem from './AuthorsListItem/AuthorsListItem'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const AuthorsList = () => {

    return (
        <Container fluid className="pt-4">
            <Row><AuthorListItem/></Row>
            <Row><AuthorListItem/></Row>
            <Row><AuthorListItem/></Row>
        </Container>
    )
}

export default AuthorsList;