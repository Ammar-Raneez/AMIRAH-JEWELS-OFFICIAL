import React from 'react';
import About from './About/About';

function AboutPagePolicy() {
  const pdfPath =
    '/amirah-details-latest/Other Contents/AMIRAH GEMS WEB PRIVACY POLICY.pdf';

  return (
    <About
      seoTitle="About Us - Policy"
      title="POLICY"
      firstPara="This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information"
      readMoreLink={pdfPath}
    />
  );
}

export default AboutPagePolicy;
