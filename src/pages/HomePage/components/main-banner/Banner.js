import React from 'react'
import './Banner.css'
import { Slide } from 'react-awesome-reveal';

function Banner() {
    return (
        <div className="homePage__banner">
                <div className="homePage__bannerLeft">
                <Slide cascade>
                    <p className="homePage__bannerLeftPhrase">YOU DESERVE TO FEEL LIKE A PRINCESS...</p>
                    <p className="homePage__bannerLeftPara">
                        AMIRAH holds thousands of exquisite,
                        natural, untreated sapphires to choose
                        from, matched perfectly with our
                        beautiful, custom designed, hand
                        crafted settings.
                    </p>
                    <a href="#category">
                        <button className="homePage__bannerLeftBtn">
                            DISCOVER NOW
                        </button>
                    </a>
                    </Slide>
                </div>
            <div className="homePage__bannerRight">
                
            </div>
        </div>
    )
}

export default Banner
