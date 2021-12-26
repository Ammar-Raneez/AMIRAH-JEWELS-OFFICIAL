import React from 'react';
import RoyalExperience from './components/royal-experience/RoyalExperience';
import Banner from './components/main-banner/Banner';
import MakeDreamsTrue from './components/dreams-section/MakeDreamsTrue';
import Category from './components/shop-by-category/Category';
import SEO from '../../shared/components/SEO/SEO';

function HomePage() {
	return (
		<div className="homepage">
			<SEO title="Amirah - Home" />
			<Banner />
			<RoyalExperience />
			<MakeDreamsTrue />
			<Category />
		</div>
	);
}

export default HomePage;
