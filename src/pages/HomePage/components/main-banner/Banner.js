
import SimpleImageSlider from 'react-simple-image-slider';
import React, { useEffect, useState } from 'react';
import './Banner.css';

function Banner() {
  const [width, setWidth] = useState(0);

  const images = [
    {url: 'banners/H1.jpg'},
    {url: 'banners/H2.jpg'},
    {url: 'banners/H3.jpg'},
  ];

  useEffect(() => {
    setWidth(window.innerWidth);
    const listener = window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });

    return window.removeEventListener('resize', listener);
  }, [width]);

  return (
    width > 1100 ? (
      <a href="#category">
        <div style={{position: 'relative'}}>
          <SimpleImageSlider
            images={images}
            height="75vh"
            width="100%"
            showBullets={true}
            showNavs={true}
          />
        </div>
      </a>
  ) : (
      <a href="#category"><div className="homePage__banner" style={{ backgroundImage: 'url(banners/H1.jpg)', backgroundSize: 'cover' }} /></a>
    )
  );
}

export default Banner;
