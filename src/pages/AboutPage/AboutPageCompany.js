import About from './About/About';
import styled from 'styled-components';

function AboutPageCompany() {
  const pdfPath =
    '/amirah-details-latest/Other Contents/AMIRAH GEMS WEB TERMS OF USE.pdf';

  return (
    <Container>
      <About
        seoTitle="Amirah - Company"
        title="AMIRAH GEMS"
        firstPara="An icon for a new era, AMIRAG Gems debuts. It captures the courage, strength and optimism that AMIRAH stands for."
        secondHeader="2021"
        secondSubHeader="THE JOURNEY"
        secondFirstPara="Founded in Colombo, Sri Lanka in 2020. Inspired by the philosophy that everyone should be able to enjoy the jewellery of their dreams."
        secondSecondPara="Combining decades of jewellery experience, AMIRAH Gems revolutionized the jewellery industry by being first to "
        secondThirdPara="introduce high-quality jewellery for everyone in an affordable price and the concept of Mine-to-Market"
        readMoreLink={pdfPath}
		/>
    </Container>
  );
}

export default AboutPageCompany;

const Container = styled.div`
  > p {
    text-align: center;
    margin-top: 2pc;
  }
`;
