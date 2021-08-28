import styled from "styled-components";

const EarringsPage = () => {
  const EARRINGS_BANNER = "/amirah-details-latest/EARRINGS.jpg";

  return (
    <Container>
      <img src={EARRINGS_BANNER} alt="earring-banner-img" />
    </Container>
  );
};

export default EarringsPage;

const Container = styled.div`
  > img {
    width: 100%;
  }
`;
