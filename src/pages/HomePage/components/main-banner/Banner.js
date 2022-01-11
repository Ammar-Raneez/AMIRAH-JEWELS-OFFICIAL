
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import React, { useEffect, useState } from 'react';
import './Banner.css';

function Banner() {
  const [width, setWidth] = useState(0);

  const images = [
    { url: 'banners/H1.jpg' },
    { url: 'banners/H2.jpg' },
    { url: 'banners/H3.jpg' },
  ];

  const redirectURLs = [
    `${window.location.href}explore+all+categories`,
    `${window.location.href}all-rings`,
    `${window.location.href}gemstones+metal`
  ];

  useEffect(() => {
    setWidth(window.innerWidth);
    const listener = window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });

    return window.removeEventListener('resize', listener);
  }, [width]);

  return (
    width > 2300 ? (
      <div style={{ position: 'relative' }}>
        <Slide arrows={false} indicators>
          {images.map((slideImage, index) => (
            <div className="each-slide" key={index} style={{ height: '100%' }}>
              <a href={redirectURLs[index]}>
                <div style={{ 'backgroundImage': `url(${slideImage.url})`, backgroundSize: 'cover', height: '850px' }}>
                  <span>{slideImage.caption}</span>
                </div>
              </a>
            </div>
          ))}
        </Slide>
      </div>
    ) :
      width > 1800 ? (
        <div style={{ position: 'relative' }}>
          <Slide arrows={false} indicators>
            {images.map((slideImage, index) => (
              <div className="each-slide" key={index} style={{ height: '100%' }}>
                <a href={redirectURLs[index]}>
                  <div style={{ 'backgroundImage': `url(${slideImage.url})`, backgroundSize: 'cover', height: '650px' }}>
                    <span>{slideImage.caption}</span>
                  </div>
                </a>
              </div>
            ))}
          </Slide>
        </div>
      ) :
        width > 900 ? (
          <div style={{ position: 'relative' }}>
            <Slide arrows={false} indicators>
              {images.map((slideImage, index) => (
                <div className="each-slide" key={index} style={{ height: '100%' }}>
                  <a href={redirectURLs[index]}>
                    <div style={{ 'backgroundImage': `url(${slideImage.url})`, backgroundSize: 'cover', height: '450px' }}>
                      <span>{slideImage.caption}</span>
                    </div>
                  </a>
                </div>
              ))}
            </Slide>
          </div>
        ) :
          width > 500 ? (
            <div
              className="homePage__banner"
              style={{
                backgroundImage: 'url(banners/H1.jpg)',
                backgroundSize: 'cover'
              }}
            />
          ) : null
  );
}

export default Banner;
