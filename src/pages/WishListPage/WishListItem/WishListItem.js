import './WishListItem.css';
import CloseIcon from '@material-ui/icons/Close';
// import { db } from '../../../firebase';
// import { useEffect, useState } from 'react';
import formatCurrency from 'format-currency';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import { removeFromWishlist/*, selectWishlist*/ } from '../../../features/wishlistSlice';
import { addToCart/*, selectCart*/ } from '../../../features/cartSlice';
import { selectCurrencySymbol } from '../../../features/currencySymbolSlice';
import { selectCurrencyRate } from '../../../features/currencyRateSlice';

function WishListItem({ img, title, price, preferredSize, preferredMetal }) {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const currencySymbol = useSelector(selectCurrencySymbol);
	const currencyRate = useSelector(selectCurrencyRate);

	const addItemToCart = () => {
		if (user) {
			dispatch(
				addToCart({
					productName: title,
					productCost: price,
					productImgURL: img,
					productQuantity: 1,
					preferredSize: preferredSize,
					preferredMetal: preferredMetal,
				})
			);

			// remove item from wishlist once added to cart
			removeItem();
		} else {
			alert('Please sign in to add item to wishlist');
		}
	}

	const removeItem = () => {
		if (user) {
			dispatch(removeFromWishlist({ name: title }));

			// LAST ITEM REMOVE PROBLEM ALTERNATE SOLUTION
			// if (wishListBasket.length === 1) {
			// 	db.collection('users').doc(user?.email).update({
			// 		wishlist: [],
			// 	});
			// }
		} else {
			alert('Please sign in to add item to wishlist');
		}
	}

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
						<div className="wishListItem__price" onClick={addItemToCart}>
							<p>
								{currencySymbol} {formatCurrency(Math.round(price * currencyRate * 100) / 100)}
							</p>
							<p>Add to Cart</p>
						</div>
						<div className="wishListItem__title">
							<p>{title}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WishListItem;
