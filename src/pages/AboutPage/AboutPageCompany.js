import About from "./About/About";
import styled from "styled-components";
import { useEffect } from "react";

function AboutPageCompany() {
  const pdfPath =
    "/amirah-details-latest/Other Contents/AMIRAH GEMS WEB TERMS OF USE_ocr.pdf";

  useEffect(() => {
    window.open(pdfPath, "_blank");
  }, []);

  return (
    <Container>
      <About
        seoTitle="About Us - Company"
        title="AMIRAH GEMS"
        firstPara="Every story has a beginning. Discover how Amirah Gems began in 2020 and grew into a global design house at the forefront of innovative jewelry design and expert craftsmanship"
        secondHeader="2020"
        secondSubHeader="THE JOURNEY"
        secondFirstPara="An icon for a new era, Amirah Gems debuts. It captures the courage, strength and optimism that Amirah stands for."
        secondSecondPara="Our founder, Suhail Mahmud is a Sri Lankan entrepreneur and designer that founded the company that builds exceptional jewelry"
        secondThirdPara="Amirah Gems starts manufacturing jewelry designs, making luxury available to Sri Lankans and the world."
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
