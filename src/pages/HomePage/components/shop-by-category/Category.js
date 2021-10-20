import React from 'react'
import { Fade } from 'react-awesome-reveal'
import './Category.css'

function Category() {
    return (
        <div id="category" className="homePage__category">
            <Fade cascade triggerOnce>
                <p className="homePage__categoryTitle">SHOP BY CATEGORY</p>
                <p className="homePage__categorySubTitle">Brilliant design and craftsmanship.</p>
            </Fade>

            <div className="homePage__categoryRow">
                <Fade direction="right" triggerOnce>
                    <a href="/necklace+pendants">
                        <div className="homePage__categoryEach">
                            <img alt="necklace-category" src="homepage category/necklace.png" />
                            <p>NECKLACES & PENDANTS</p>
                        </div>
                    </a>
                    <a href="/earrings">
                        <div className="homePage__categoryEach">
                            <img alt="earring-category" src="homepage category/earrings.png" />
                            <p>EARRINGS</p>
                        </div>
                    </a>
                    <a href="/rings/SORG020">
                        <div className="homePage__categoryEach">
                            <img alt="ring-category" src="homepage category/rings.png" />
                            <p>RINGS</p>
                        </div>
                    </a>
                    <a href="/bracelets">
                        <div className="homePage__categoryEach">
                            <img alt="bracelet-category" src="homepage category/bracelets.png" />
                            <p>BRACELETS</p>
                        </div>
                    </a>
                    <a href="forever+knot">
                        <div className="homePage__categoryEach">
                            <img alt="foreverKnot-category" src="homepage category/forever-knot.png" />
                            <p>FOREVER KNOT</p>
                        </div>
                    </a>
                </Fade>   
            </div>
        </div>
    )
}

export default Category
