import './WishListItem.css';
import CloseIcon from '@material-ui/icons/Close';
import { useStateValue } from '../../../StateProvider';
import { db } from '../../../firebase';
import { useEffect, useState } from 'react';

function WishListItem({ img, title, currency, price }) {
	const [{ wishListBasket, cartBasket, user }, dispatch] = useStateValue();

	// USE EFFECT TO UPDATE THE CONTENT FROM THE CLOUD STORE
	useEffect(() => {
		// REMOVING THE ITEM FROM THE DATABASE
		console.log('UPDATED WISHLIST FROM THE USE EFFECT', wishListBasket);
		db.collection('users').doc(user?.email).update({
			wishlist: wishListBasket,
		});

		console.log(wishListBasket);
	}, [wishListBasket]);

	// FUNCTION TO REMOVE ITEM FROM THE ReactCONT API LIST AND UPDATE LAST ITEM REMOVE FROM 
	// CLOUD STORE
	const removeItem = () => {
		if (user) {
			// REMOVING THE ITEM FROM THE REACT CONTEXT API VARIABLES
			dispatch({
				type: 'REMOVE_FROM_WISHLIST',
				name: title,
			});
			console.log(wishListBasket, '<===============> CHECK THIS ONE');

			// LAST ITEM REMOVE PROBLEM ALTERNATE SOLUTION
			if (wishListBasket.length === 1) {
				db.collection('users').doc(user?.email).update({
					wishlist: [],
				});
			}
		} else {
			alert('Please sign in to add item to wishlist');
		}
	};

	return (
		<div className="wishListItem">
			<div className="wishListItem__main">
				<div className="wishListItem__sectionOne" onClick={removeItem}>
					<CloseIcon />
				</div>
				<div className="wishListItem__sectionTwo">
					<div className="wishListItem__img">
						<img src={img} alt="" />
					</div>

					<div className="wishListItem__details">
						<div className="wishListItem__price">
							<p>
								{currency}
								{(Math.round(price * 100) / 100).toFixed(2)}
							</p>
							<p>Add to Cart</p>
						</div>
						<p>{title}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WishListItem;
