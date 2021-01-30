import React from 'react'
import './HomePage.css'
import MiddleSection from './components/middle-section/MiddleSection'
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
			<MiddleSection />
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
