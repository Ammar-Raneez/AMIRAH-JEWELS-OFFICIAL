import styled from 'styled-components';

const BraceletsPage = () => {
  const BRACELET_BANNER = '/amirah-details-latest/BRACELETS.jpg';

  return (
    <Container>
      <img src={BRACELET_BANNER} alt="bracelet-banner" />
    </Container>
  );
}

export default BraceletsPage;

const Container = styled.div `
  > img {
    width: 100%;
  }
`;
