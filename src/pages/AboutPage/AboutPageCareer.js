import React, { useEffect } from 'react';
import About from './About/About';

function AboutPageCareer() {
  const pdfPath =
    '/amirah-details-latest/Other Contents/AMIRAH GEMS WEB CAREER.pdf';

  useEffect(() => {
    window.open(pdfPath, '_blank');
  }, []);

  return (
    <About
      seoTitle="About Us - Career"
      title="CAREER"
      firstPara="Every story has a beginning. Discover how Amirah Gems began in 2020 and grew into a global design house at the forefront of innovative jewelry design and expert craftsmanship"
      secondHeader="2020"
      secondSubHeader="THE JOURNEY"
      secondFirstPara="An icon for a new era, Amirah Gems debuts. It captures the courage, strength and optimism that Amirah stands for."
      secondSecondPara="Our founder, Suhail Mahmud is a Sri Lankan entrepreneur and designer that founded the company that builds exceptional jewelry"
      secondThirdPara="Amirah Gems starts manufacturing jewelry designs, making luxury available to Sri Lankans and the world."
    />
  );
}

export default AboutPageCareer;
