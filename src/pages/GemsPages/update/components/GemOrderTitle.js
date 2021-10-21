import styled from 'styled-components';

const GemOrderTitle = () => {
  return (
    <Container>
      <h1>sapphire</h1>
      <p>
        The name 'sapphire' can also apply to any corundum that's not rundy red,
        another corundum variety.
      </p>
    </Container>
  );
};

export default GemOrderTitle;

const Container = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 5pc 2pc;
  border-bottom: 5px #87541e solid;

  > h1 {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-family: Ginebra_font;
  }

  > p {
    width: 50%;
    text-align: center;
    margin-top: 5px;
  }
`;
