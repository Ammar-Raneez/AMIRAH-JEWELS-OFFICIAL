import React from 'react';
import styled from 'styled-components';

const ColorGemItem = ({ setSapphireColor, selectedSapphire, sapphireColor, img, name }) => {
  return (
    <Container
      onClick={() => setSapphireColor(sapphireColor)}
      style={
        selectedSapphire.value === sapphireColor.value ?
          { backgroundColor: 'rgba(211, 95, 70, 0.5)' }
          : null
      }
    >
      <img src={img} alt="gem-color" />
      <strong>
        <p>{name}</p>
      </strong>
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

  transition: 0.3s ease;
  :hover {
    background-color: rgba(211, 95, 70, 0.3);
    cursor: pointer;
  }
`;
