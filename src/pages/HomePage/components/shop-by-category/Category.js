import React from 'react'
import './Category.css'

function Category() {
    return (
        <div className="homePage__category">
            <p className="homePage__categoryTitle">Shop By Category</p>
            <p className="homePage__categorySubTitle">Brilliant design and craftsmanship.</p>

            <div className="homePage__categoryRow">
                <div className="homePage__categoryEach">
                    <img alt="necklace-category" src="homepage category/necklace.png" />
                    <p>Necklaces & Pendants</p>
                </div>
                <div className="homePage__categoryEach">
                    <img alt="earring-category" src="homepage category/earrings.png" />
                    <p>Earrings</p>
                </div>
                <div className="homePage__categoryEach">
                    <img alt="ring-category" src="homepage category/rings.png" />
                    <p>Rings</p>
                </div>
                <div className="homePage__categoryEach">
                    <img alt="bracelet-category" src="homepage category/bracelets.png" />
                    <p>Bracelets</p>
                </div>
                <div className="homePage__categoryEach">
                    <img alt="engagementRing-category" src="homepage category/engagement rings.png" />
                    <p>Engagement Rings</p>
                </div>
            </div>
        </div>
    )
}

export default Category
