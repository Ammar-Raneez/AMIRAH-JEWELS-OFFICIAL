import React from 'react'
import './HomePage.css'
import MiddleSection from './components/middle-section/MiddleSection'
import KeyFeatures from './components/key-features/KeyFeatures'
import Banner from './components/main-banner/Banner'
import SidebarLeft from './components/sidebar-left/SidebarLeft'
import SidebarRight from './components/sidebar-right/SidebarRight'
import Header from './components/header/Header';
import MakeDreamsTrue from './components/dreams-section/MakeDreamsTrue'

function HomePage() {
    return (
        <div className="homepage">
			{/* left section side bar */}
			<SidebarLeft />
			<div>
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
				{/* footer */}
			</div>
			{/* right section side bar */}
        </div>
    )
}

export default HomePage
