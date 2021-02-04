import React from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

function Category() {
    return (
        <div className="homePage__category">
            <p className="homePage__categoryTitle">Shop By Category</p>
            <p className="homePage__categorySubTitle">Brilliant design and craftsmanship.</p>

            <div className="homePage__categoryRow">
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
            </div>
        </div>
    )
}

export default Category
