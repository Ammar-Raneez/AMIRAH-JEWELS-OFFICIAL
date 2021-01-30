import React from 'react'
import './HomePage.css'
import MiddleSection from './components/middle-section/MiddleSection'
import KeyFeatures from './components/key-features/KeyFeatures'
import Banner from './components/main-banner/Banner'
import TopBar from './components/topbar/TopBar'
// import SidebarRight from './components/sidebar-right/SidebarRight'
import Header from './components/header/Header';
import MakeDreamsTrue from './components/dreams-section/MakeDreamsTrue'
import Footer from './components/Footer/Footer'
import Category from './components/shop-by-category/Category'

function HomePage() {
    return (
        <div className="homepage">
			{/* top bar */}
			<TopBar /> 
			{/* header */}
			<Header />
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
			{/* footer */}
			<Footer />
        </div>
    )
}

export default HomePage
