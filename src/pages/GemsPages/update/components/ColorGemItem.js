import React from 'react';
import styled from 'styled-components';

const ColorGemItem = ({ img, name }) => {
  return (
    <Container>
      <img src={img} alt="gem-color" />
      <p>{name}</p>
    </Container>
  );
}

export default ColorGemItem;

const Container = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 1pc;
  justify-content: center;

  > img {
    object-fit: contain;
    height: 180px;
  }

  > p {
    text-align: center;
    margin: 0.5pc;
  }
`;
