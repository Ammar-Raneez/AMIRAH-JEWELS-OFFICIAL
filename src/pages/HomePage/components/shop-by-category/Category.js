import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import './Category.css'

function Category() {
    return (
        <div id="category" className="homePage__category">
            <Fade cascade>
                <p className="homePage__categoryTitle">Shop By Category</p>
                <p className="homePage__categorySubTitle">Brilliant design and craftsmanship.</p>
            </Fade>

            <div className="homePage__categoryRow">
                <Slide triggerOnce  direction="up">
                    <a href="/necklace+pendants">
                        <div className="homePage__categoryEach">
                            <img alt="necklace-category" src="homepage category/necklace.png" />
                            <p>Necklaces & Pendants</p>
                        </div>
                    </a>
                    <a href="/earrings">
                        <div className="homePage__categoryEach">
                            <img alt="earring-category" src="homepage category/earrings.png" />
                            <p>Earrings</p>
                        </div>
                    </a>
                    <a href="/rings">
                        <div className="homePage__categoryEach">
                            <img alt="ring-category" src="homepage category/rings.png" />
                            <p>Rings</p>
                        </div>
                    </a>
                    <a href="/bracelets">
                        <div className="homePage__categoryEach">
                            <img alt="bracelet-category" src="homepage category/bracelets.png" />
                            <p>Bracelets</p>
                        </div>
                    </a>
                    <a href="/engagement+rings">
                        <div className="homePage__categoryEach">
                            <img alt="engagementRing-category" src="homepage category/engagement rings.png" />
                            <p>Engagement Rings</p>
                        </div>
                    </a>
                </Slide>   
            </div>
        </div>
    )
}

export default Category
