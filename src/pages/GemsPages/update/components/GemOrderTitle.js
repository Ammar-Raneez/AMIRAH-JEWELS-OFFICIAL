import { Fade } from 'react-awesome-reveal';
import styled from 'styled-components';

const GemOrderTitle = () => {
  return (
    <Container>
      <Fade direction="left" cascade triggerOnce>
      <h1>sapphire</h1>
      <p>
        The name 'sapphire' can also apply to any corundum that's not rundy red,
        another corundum variety.
      </p>
      </Fade>
    </Container>
  );
}

export default GemOrderTitle;

const Container = styled.div `
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
