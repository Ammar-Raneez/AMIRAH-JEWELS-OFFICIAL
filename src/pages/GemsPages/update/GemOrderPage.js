import styled from 'styled-components';
import GemOrderBody from './components/GemOrderBody';
import GemOrderTitle from './components/GemOrderTitle';

const GemOrderPage = () => {
  return (
    <Container>
      <section>
        <GemOrderTitle />
      </section>
      <section>
        <GemOrderBody />
      </section>
    </Container>
  );
}

export default GemOrderPage;

const Container = styled.div `
  font-family: santral !important;
  background-color: #f4ebe2;
`;
