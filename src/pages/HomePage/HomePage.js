import React from 'react'
import './HomePage.css'
import RoyalExperience from './components/royal-experience/RoyalExperience'
import KeyFeatures from './components/key-features/KeyFeatures'
import Banner from './components/main-banner/Banner'
import MakeDreamsTrue from './components/dreams-section/MakeDreamsTrue'
import Category from './components/shop-by-category/Category'

function HomePage() {
    return (
        <div className="homepage">
			{/* Banner */}
			<Banner />
			{/* Your experience matters */}
			<RoyalExperience />
			{/* Make your dreams come true */}
			<MakeDreamsTrue />
			{/* Amriahs key features */}
			<KeyFeatures />
			{/* shop by category */}
			<Category />
        </div>
    )
}

export default HomePage
