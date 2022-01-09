import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';
import gemData from '../../../../gemData.json';

const GemOrderTitle = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const { id } = useParams();

  useEffect(() => {
    const currentGem = gemData.find((gem) => gem.id === id);
    setTitle(currentGem.title);
    setDescription(currentGem.titleText);
  }, [id]);

  return (
    <Container>
      <Fade direction="left" cascade triggerOnce>
        <h1>{title}</h1>
        <p>{description}</p>
      </Fade>
    </Container>
  );
}

export default GemOrderTitle;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5pc 2pc;
  border-bottom: 5px #87541e solid;

  > div > h1 {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-family: ginebra_font;
    letter-spacing: 3px;
  }

  > p {
    font-size: 14px;
    width: 50%;
    text-align: center;
    margin-top: 5px;
  }
`;
