import React from 'react';
import { Container } from './styles';

export default function ScrollTop() {

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
  return (
    <Container id="toTop" onClick={() => topFunction()}>
        <i className="fas fa-arrow-up"></i>
    </Container>
  );
}
