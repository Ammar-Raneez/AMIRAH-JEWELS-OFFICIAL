import React from 'react';
import About from './About/About';

function AboutPageCareer() {
  const pdfPath =
    '/amirah-details-latest/Other Contents/AMIRAH GEMS WEB CAREER.pdf';

  return (
    <About
      seoTitle="About Us - Career"
      title="CAREER"
      firstPara="DESTINED FOR A CAREER IN THE JEWELLERY INDUSTRY?"
      secondHeader="2021"
      secondSubHeader="THE JOURNEY"
      secondFirstPara="Our team strives to help reach unlimited potential every day Our passion and commitment to inspire the brightest feeling of beautiful"
      secondSecondPara="can be seen in everything we do and every interaction we have. We offer the freedom to choose to be socially and environmentally responsible."
      secondThirdPara="We open a world of possibilities, to empower our customers and teams to express themselves with confidence."
      readMoreLink={pdfPath}
    />
  );
}

export default AboutPageCareer;
