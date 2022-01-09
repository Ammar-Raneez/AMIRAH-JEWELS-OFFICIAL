import React from 'react';
import styled from 'styled-components';

const ColorGemItem = ({ setSapphireColor, selectedSapphire, sapphireColor, img, name }) => {
  return (
    <Container
      onClick={() => setSapphireColor(sapphireColor)}
      style={selectedSapphire.value === sapphireColor.value ? { borderTop: '2px solid #87541e' } : null}
    >
      <img src={img} alt="gem-color" />
      <p>{name}</p>
    </Container>
  );
}

export default ColorGemItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 1.5pc;
  justify-content: center;

  > img {
    object-fit: contain;
    height: 180px;
  }

  > p {
    font-size: 14px;
    text-align: center;
    margin: 0.5pc;
  }

  :hover {
    border-top: 2px solid #87541e;
    cursor: pointer;
  }
`;
