import React from 'react';
import About from './About/About';

function AboutPageTermsOfUse() {
  const pdfPath =
    '/amirah-details-latest/Other Contents/AMIRAH GEMS WEB TERMS OF USE.pdf';

  return (
    <About
      seoTitle="Amirah - Terms Of Use"
      title="TERMS OF USE"
      firstPara="Use of this website and any service contained constitutes acceptance of these Terms of use"
      readMoreLink={pdfPath}
    />
  );
}

export default AboutPageTermsOfUse;
