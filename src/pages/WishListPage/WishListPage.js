import './WishListPage.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import WishListItem from './WishListItem/WishListItem';
import { useStateValue } from '../../StateProvider';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { useHistory } from 'react-router-dom';

function WishListPage() {
	const history = useHistory();
	const [{ wishListBasket, cartBasket, user }, dispatch] = useStateValue();
	const [loading, setLoading] = useState(true);

	// we load all the content from the database (this runs only once)
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

					// stop displaying the spinner
					setLoading(false);
				}
			})
		);
	}, []);

	return (
		<div className="wishListPage">
			{/* user logged in details
			<p className="wishListPage__userDetails">logged in as Vaappa</p> */}

			{/* wishlist title */}
			<div className="wishListPage__title">
				<h1>MY WISHLIST</h1>
				{/* <div className="wishListPage__titleContinueSection">
					<ArrowBackIosIcon />
					<p>Continue shopping</p>
				</div> */}
			</div>

			{/* wishlist item */}
			{loading ? (
				<div className="loadingGif">
					<img src="/loading/loading.gif" alt="" width="200" />
				</div>
			) : (
				<div className="wishListPage__items">
					{wishListBasket.map((item) => (
						<WishListItem img={item.imgURL} title={item.name} currency="$" price={item.cost} />
					))}
				</div>
			)}
		</div>
	);
}

export default WishListPage;
