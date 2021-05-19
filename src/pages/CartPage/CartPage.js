import React, { useEffect, useState } from 'react';
import './CartPage.css';
import CartItem from './CartItem/CartItem';
import Bill from './Bill/Bill';
import { db } from '../../firebase';
import SEO from '../../shared/components/SEO/SEO';
import { selectUser } from '../../features/userSlice';
import { useSelector } from 'react-redux';
import { selectCart } from '../../features/cartSlice';
import { selectDelivery, selectSubTotal, selectTax } from '../../features/costSlice';
import { selectWishlist } from '../../features/wishlistSlice';

function CartPage() {
	// const [{ cartBasket, user, subTotal, delivery, tax }, dispatch] = useStateValue();
	const user = useSelector(selectUser);
	const cartBasket = useSelector(selectCart);
	const subTotal = useSelector(selectSubTotal);
	const delivery = useSelector(selectDelivery);
	const tax = useSelector(selectTax);
	const [loading, setLoading] = useState(true);
	const [updateWishList, setUpdateWishList] = useState(false);
	const wishListBasket = useSelector(selectWishlist);
	const [updateCartList, setUpdateCartList] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	useEffect(() => {
		// Update the database records when the items are updated in the cart (Inc, Dec Qty)
		if (updateWishList === true) {
			db.collection('users').doc(user?.email).update({
				wishlist: wishListBasket,
			});
		}
		setUpdateWishList(true);
	}, [wishListBasket]);

	useEffect(() => {
		// Update the database records when the items are updated in the cart (Add to WishLt)
		if (updateCartList === true) {
			db.collection('users').doc(user?.email).update({
				cart: cartBasket,
			});
		}
		setUpdateCartList(true);
	}, [cartBasket]);

	return user ? (
		<div className="cartPage">
			<SEO title={`${user.displayName}'s Cart`} />
			<div className="cartPage__title">
				<h1>MY CART</h1>
			</div>

			{loading ? (
				<div className="loadingGif">
					<img src="/loading/loading.gif" alt="" width="200" />
				</div>
			) : cartBasket.length !== 0 ? (
				<div className="cartPage__main">
					<div className="cartPage__items">
						{cartBasket?.map((item, index) => (
							<CartItem
								key={index}
								productImgURL={item?.productImgURL}
								productName={item?.productName}
								productCost={item?.productCost}
								productQuantity={item?.productQuantity}
								preferredMetal={item?.preferredMetal}
								preferredSize={item?.preferredSize}
							/>
						))}
					</div>
					<div className="cartPage__orderSummary">
						<Bill subTotal={subTotal} delivery={delivery} tax={tax} />
					</div>
				</div>
			) : (
				<div className="cartPage__itemsEmpty">
					<h1>Your Cart is Empty</h1>
					<p>Add Items into Your Cart to Display them Here</p>
				</div>
			)}
		</div>
	) : (
		<div className="cartPage">
			<SEO title="Cart" />
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
