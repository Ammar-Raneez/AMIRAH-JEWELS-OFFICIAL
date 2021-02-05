import { Collapse } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import './NecklacePendantPage.css';
import Product from './Product/Product';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function NecklacePendantPage() {
	const [readMoreDescription, setReadMoreDescription] = useState(false);

	const [displayImage, setDisplayImage] = useState('pendantsNecklace/ring1.png');
	const [addToWishList, setAddToWishList] = useState(false);
	const [tempSafetyWishList, setTempSafetyWishList] = useState(false);
	const [tempSafetyCartBasket, setTempSafetyCartBasket] = useState(false);
	const [{ wishListBasket, cartBasket, user }, dispatch] = useStateValue();

	// created the image path
	const selectedImage = (imagePath) => {
		console.log('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
		setDisplayImage('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
	};

	// we load all the content from the database (this runs only once)
	useEffect(() => {
		// user logged in only we load the details for the particular user
		db.collection('users').onSnapshot((snapshot) =>
			snapshot.docs.forEach((doc) => {
				if (doc.id === user?.email) {
					// adding the cart items
					for (const cartItem of doc.data().cart) {
						// console.log('Adding items from the database into the cart');
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
						// console.log('Adding items from the database into the wishlist');
						// console.log(wishlistItem);
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
	}, []);

	// UPDATING THE WISHLIST BASKET ON (FIRE-STORE)
	useEffect(() => {
		// console.log(wishListBasket, "<============");
		if (tempSafetyWishList === true) {
			db.collection('users').doc(user?.email).update({
				wishlist: wishListBasket,
			});
		}
		setTempSafetyWishList(true);
	}, [addToWishList]);

	// UPDATING THE CART BASKET ON (FIRE-STORE)
	useEffect(() => {
		if (tempSafetyCartBasket === true) {
			db.collection('users').doc(user?.email).update({
				cart: cartBasket,
			});
		}
		setTempSafetyCartBasket(true);
	}, [cartBasket]);

	// ADDING THE ITEM INTO THE REACT CONTEXT API CART
	const addItemToCart = () => {
		if (user) {
			dispatch({
				type: 'ADD_TO_BASKET',
				item: {
					productName: 'Diamond and Black Onyx Circle Pendant',
					productCost: 890.0,
					productImgURL: 'pendantsNecklace/ring1.png',
					productQuantity: 1,
				},
			});
			alert('Added item to cart!');
		} else {
			alert('Please sign in to add item to wishlist');
		}

		// SINCE THE CART LIST IS NOW UPDATED, ADDING THE UPDATED CART TO FIRE-STORE
		// USING THE USE-EFFECT
	};

	// ADDING THE ITEM TO THE WISHLIST
	const addItemToWishList = () => {
		if (user) {
			dispatch({
				type: 'ADD_TO_WISHLIST',
				item: {
					name: 'Diamond and Black Onyx Circle Pendant',
					cost: 890.0,
					imgURL: 'pendantsNecklace/ring1.png',
				},
			});
			setAddToWishList(true);
		} else {
			alert('Please sign in to add item to wishlist');
		}
	};

	// REMOVING THE ITEM FROM THE WISHLIST
	const removeFromWishList = () => {
		if (user) {
			dispatch({
				type: 'REMOVE_FROM_WISHLIST',
				name: 'Diamond and Black Onyx Circle Pendant',
			});
			setAddToWishList(false);
		} else {
			alert('Please sign in to add item to wishlist');
		}
	};

	return (
		<div className="necklacePendant">
			<div className="necklacePendant__sectionCart">
				<div className="necklacePendant__sectionCartSmallImages">
					<img
						onMouseOver={(e) => {
							selectedImage(e.target.src);
						}}
						src="pendantsNecklace/ring2.png"
						alt=""
					/>
					<img
						onMouseOver={(e) => {
							selectedImage(e.target.src);
						}}
						src="pendantsNecklace/ring3.png"
						alt=""
					/>
					<img
						onMouseOver={(e) => {
							selectedImage(e.target.src);
						}}
						src="pendantsNecklace/ring4.png"
						alt=""
					/>
				</div>
				<div className="necklacePendant__sectionCartMainImage">
					<img src={displayImage} alt="" />
					<div className="necklacePendant__sectionCartMainImageIcon">
						{user ? (
							addToWishList ? (
								<FavoriteIcon onClick={removeFromWishList} />
							) : (
								<FavoriteBorderIcon onClick={addItemToWishList} />
							)
						) : (
							<></>
						)}
					</div>
				</div>
				<div className="necklacePendant__sectionCartCartDetails">
					<h2>Diamond and Black Onyx Circle Pendant</h2>
					<div className="necklacePendant__sectionCartCartDetailsItem">
						<p>in 18k Rose Gold, 16-18"</p>
					</div>
					<div className="necklacePendant__sectionCartCartDetailsItem">
						<p>Quantity</p>
						<p>1</p>
					</div>
					<p>Price: $890.00</p>
					<br />
					<br />
					<div className="necklacePendant__sectionCartCartDetailsBtns">
						{user ? (
							<Link>
								<button onClick={addItemToCart}>ADD TO CART</button>
							</Link>
						) : (
							<></>
						)}
						<a href="#product__description">
							<button>VIEW DETAILS</button>
						</a>
					</div>
				</div>
			</div>
			{/* Description */}
			<div id="product__description" className="necklacePendant__description">
				<h2>Description & Details</h2>
				<p className="necklacePendant__descriptionMain">
					This circle pendant features black onyx, a unique variety of quartz found in nature. This striking pendant is
					traced with scintillating diamonds, resulting in a modern design with a smooth finish and high polish. As
					multifaceted as it is iconic, the Tiffany T collection is a tangible reminder of the connections we feel but
					can't always see. Showcase your personal style by pairing this pendant with other Tiffany designs for a bold
					look.
				</p>
				<div className="necklacePendant__descriptionOtherDetails">
					<Collapse in={readMoreDescription}>
						<p>18k rose gold with black onyx and round brilliant diamonds</p>
						<p>Circle, 16 mm diameter</p>
						<p>Carat total weight .05</p>
						<p>Adjustable, 16-18" chain</p>
					</Collapse>
					<p
						onClick={() => setReadMoreDescription(!readMoreDescription)}
						className="necklacePendant__descriptionOtherDetailsReadMore"
					>
						{readMoreDescription ? "Read Less" : "Read More"} <ChevronRightIcon /><ChevronRightIcon /><ChevronRightIcon />
					</p>
				</div>
			</div>

			{/* Other Similar Products */}
			<div className="necklacePendant__otherProducts">
				<h2>Other Similar Products</h2>
				<br />
				<h3>Showing 1 - 40 of 1020</h3>

				<div className="necklacePendant__otherProductsProducts">
					<div className="necklacePendant__otherProductsRow">
						<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
						<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
						<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
						<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
					</div>
					{/* <div className="necklacePendant__otherProductsRow">
					</div> */}
				</div>
			</div>
		</div>
	);
}

export default NecklacePendantPage;
