import React from 'react';
import styled from 'styled-components';

function AboutPageCharity() {
  return (
    <Container>
      <img src='charity/charity1.jpg' alt='' />
      <img src='charity/charity2.jpg' alt='' />
      <img src='charity/charity3.jpg' alt='' />
    </Container>
  )
}

export default AboutPageCharity;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 30rem;
  }
`