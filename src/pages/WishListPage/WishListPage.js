import './WishListPage.css';
import WishListItem from './WishListItem/WishListItem';
import { useStateValue } from '../../StateProvider';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { Fade } from 'react-awesome-reveal';
import SEO from '../../shared/components/SEO/SEO';
import { useSelector } from 'react-redux';
import { selectCart } from '../../features/cartSlice';
import { selectWishlist } from '../../features/wishlistSlice';
import { selectUser } from '../../features/userSlice';
import { useDispatch } from 'react-redux';

function WishListPage() {
	const [tempSafetyCartBasket, setTempSafetyCartBasket] = useState(false);
	const [tempSafetyWishListBasket, setTempSafetyWishListBasket] = useState(false);
	const [loading, setLoading] = useState(true);
	const wishListBasket = useSelector(selectWishlist);
	const cartBasket = useSelector(selectCart);
	const user = useSelector(selectUser);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1500);
	}, []);

	useEffect(() => {
		if (tempSafetyWishListBasket === true) {
			db.collection('users').doc(user?.email).update({
				wishlist: wishListBasket,
			});
		}
		setTempSafetyWishListBasket(true);
	}, [wishListBasket]);

	useEffect(() => {
		if (tempSafetyCartBasket === true) {
			db.collection('users').doc(user?.email).update({
				cart: cartBasket,
			});
		}
		setTempSafetyCartBasket(true);
	}, [cartBasket]);

	return user ? (
		<div className="wishListPage" style={wishListBasket.length === 1 ? { height: '85vh' } : {}}>
			<SEO title={`${user.displayName}'s Wish List`} />
			{/* wishlist title */}
			<div className="wishListPage__title">
				<h1>MY WISHLIST</h1>
			</div>

			{loading ? (
				<div className="loadingGif">
					<img src="/loading/loading.gif" alt="" width="200" />
				</div>
			) : (
				<div
					className={
						wishListBasket.length < 4 && wishListBasket.length > 0
							? 'wishListPage__itemsFStart'
							: 'wishListPage__itemsFAround'
					}
				>
					{wishListBasket.length === 0 ? (
						<div className="wishListPage__itemsEmpty">
							<h1>Your Wish List is Empty</h1>
							<p>Add Items To Your Wishlist to Display them Here</p>
						</div>
					) : (
						<Fade direction="left">
							{wishListBasket.map((item, index) => (
								<WishListItem
									key={index}
									img={item.imgURL}
									title={item.name}
									price={item.cost}
									preferredMetal={item.preferredMetal}
									preferredSize={item.preferredSize}
								/>
							))}
						</Fade>
					)}
				</div>
			)}
		</div>
	) : (
		<div className="wishListPage">
			<SEO title="Wish list" />
			<div className="wishListPage__itemsNoLogin">
				<h1>Login to be able to save items you would like to purchase later</h1>
				<a href="/login">
					<button>Login</button>
				</a>
			</div>
		</div>
	);
}

export default WishListPage;
