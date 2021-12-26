import styled from 'styled-components';
import SEO from '../../shared/components/SEO/SEO';

const BraceletsPage = () => {
  const BRACELET_BANNER = 'banners/BRACELETS.jpg';

  return (
    <Container>
      <SEO title="Amirah - Bracelets" />
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
