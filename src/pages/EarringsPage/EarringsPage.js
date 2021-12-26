import styled from 'styled-components';
import SEO from '../../shared/components/SEO/SEO';

const EarringsPage = () => {
  const EARRINGS_BANNER = 'banners/EARRINGS.jpg';

  return (
    <Container>
      <SEO title="Amirah - Earrings" />
      <img src={EARRINGS_BANNER} alt="earring-banner" />
    </Container>
  );
}

export default EarringsPage;

const Container = styled.div `
  > img {
    width: 100%;
  }
`;
