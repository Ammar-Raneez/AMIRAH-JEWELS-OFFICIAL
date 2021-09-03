
import SimpleImageSlider from "react-simple-image-slider";
import React, { useEffect, useState } from 'react'
import './Banner.css'

function Banner() {
    const [width, setWidth] = useState(0);

    const images = [
        {url: "amirah-details-latest/H1.jpg"},
        {url: "amirah-details-latest/H2.jpg"},
        {url: "amirah-details-latest/H3.jpg"},
    ];

    useEffect(() => {
        setWidth(window.innerWidth);
        const listener = window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        });

        return window.removeEventListener('resize', listener);
    }, [width])

    return (
        width > 1100 ? (
            <div style={{position: 'relative'}}>
                <SimpleImageSlider
                    images={images}
                    height="75vh"
                    width="100%"
                    showBullets={true}
                    showNavs={true}
                />
                <a href="#category">
                    <button className="homePage__bannerLeftBtn" style={{position: 'absolute', bottom: 0, left: '70px'}}>
                        Discover Now
                    </button>
                </a>
            </div>
        ) : (
            <div className="homePage__banner">
                <a href="#category">
                    <button className="homePage__bannerLeftBtn">
                        Discover Now
                    </button>
                </a>
            </div>
        )
    )
}

export default Banner
