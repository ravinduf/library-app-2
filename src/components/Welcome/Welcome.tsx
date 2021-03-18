import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import welcomeImg from '../../assets/images/welcome.jpg';

const Welcome = () => {
  return (
      <Container fluid>
        <Row className="heading">
          My Library
        </Row>
        <Row>
          <img src={welcomeImg} width="100%" alt="Library"/>
        </Row>

        <Row className="credits">
          <p className="pr-2">Photo by <a
              href="https://unsplash.com/@annahunko?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anna
            Hunko</a> on <a
              href="https://unsplash.com/@annahunko?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>
          </p>
        </Row>
      </Container>
  )
}

export default Welcome;
