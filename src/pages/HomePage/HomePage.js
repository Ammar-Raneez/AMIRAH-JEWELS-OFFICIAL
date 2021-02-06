import React from 'react';
import RoyalExperience from './components/royal-experience/RoyalExperience';
import Banner from './components/main-banner/Banner';
import MakeDreamsTrue from './components/dreams-section/MakeDreamsTrue';
import Category from './components/shop-by-category/Category';

function HomePage() {
	return (
		<div className="homepage">
			<Banner />
			<RoyalExperience />
			<MakeDreamsTrue />
			{/* <KeyFeatures /> */}
			<Category />
		</div>
	);
}

export default HomePage;
