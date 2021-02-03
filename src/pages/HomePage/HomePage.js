import React, { useEffect } from 'react';
import RoyalExperience from './components/royal-experience/RoyalExperience';
import KeyFeatures from './components/key-features/KeyFeatures';
import Banner from './components/main-banner/Banner';
import MakeDreamsTrue from './components/dreams-section/MakeDreamsTrue';
import Category from './components/shop-by-category/Category';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';

function HomePage() {
	const [{ wishListBasket, cartBasket, user }, dispatch] = useStateValue();

	useEffect(() => {
		console.log('HOMEPAGE RUNNING---------------------');
		console.log(user?.email);
		// user logged in only we load the details for the particular user
		db.collection('users').onSnapshot((snapshot) =>
			snapshot.docs.forEach((doc) => {
				if (doc.id === user?.email) {
					// adding the cart items
					for (const cartItem of doc.data().cart) {
						console.log('Adding items from the database into the cart');
						dispatch({
							type: 'ADD_TO_BASKET',
							item: {
								productCost: cartItem.productCost,
								productImgURL: cartItem.productImgURL,
								productName: cartItem.productName,
								productQuantity: cartItem.productQuantity,
							},
						});
					}

					// adding the wishlist items
					for (const wishlistItem of doc.data().wishlist) {
						console.log('Adding items from the database into the wishlist');
						console.log(wishlistItem);
						dispatch({
							type: 'ADD_TO_WISHLIST',
							item: {
								name: wishlistItem.name,
								cost: wishlistItem.cost,
								imgURL: wishlistItem.imgURL,
							},
						});
					}
				}
			})
		);

		//----------------------------------------
	}, []);
	return (
		<div className="homepage">
			<Banner />
			<RoyalExperience />
			<MakeDreamsTrue />
			<KeyFeatures />
			<Category />
		</div>
	);
}

export default HomePage;
