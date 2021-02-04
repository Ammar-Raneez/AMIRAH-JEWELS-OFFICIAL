import React, { useEffect, useState } from 'react';
import './CartPage.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import CartItem from './CartItem/CartItem';
import Bill from './Bill/Bill';
import { useStateValue } from '../../StateProvider';
import { db } from '../../firebase';

function CartPage() {
	const [{ wishListBasket, cartBasket, user, subTotal, delivery, tax }, dispatch] = useStateValue();
	const [loading, setLoading] = useState(true);

	// WE LOAD ALL THE CONTENT FROM THE DATABASE (this runs only once)
	useEffect(() => {
		// user logged in only we load the details for the particular user
		// setLoading(true)
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
					// updating the sub total
					dispatch({
						type: 'SET_SUBTOTAL',
					});

					// stop displaying the spinner
					setLoading(false);
				}
			})
		);
	}, []);

	return user ? (
		<div className="cartPage">
			<div className="cartPage__title">
				<h1>MY CART</h1>
				{/* <div className="cartPage__titleContinueSection">
                    <ArrowBackIosIcon />
                    <p>Continue shopping</p>
                </div> */}
			</div>

			{cartBasket.length !== 0 ? (
				loading ? (
					<div className="loadingGif">
						<img src="/loading/loading.gif" alt="" width="200" />
					</div>
				) : (
					<div className="cartPage__main">
						<div className="cartPage__items">
							{cartBasket?.map((item) => (
								<CartItem
									key={item.productName}
									productImgURL={item.productImgURL}
									productName={item.productName}
									productCost={item.productCost}
									productQuantity={item.productQuantity}
								/>
							))}
						</div>
						<div className="cartPage__orderSummary">
							<Bill subTotal={subTotal} delivery={delivery} tax={tax} />
						</div>
					</div>
				)
			) : (
				<div className="cartPage__itemsEmpty">
					<h1>Your Cart is Empty</h1>
					<p>Add Items into Your Cart to Display them Here</p>
				</div>
			)}
		</div>
	) : (
		<div className="cartPage">
			<div className="cartPage__itemsNoLogin">
				<h1>Login to be able to add items to your cart</h1>
				<a href="/login">
					<button>Login</button>
				</a>
			</div>
		</div>
	);
}

export default CartPage;
