import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Gem from '../Gem/Gem';
import './GemDetails.css';
import { useStateValue } from '../../../StateProvider';
import { db } from '../../../firebase';
import ReactImageMagnify from 'react-image-magnify';
import { Fade } from 'react-awesome-reveal';
import SEO from '../../../shared/components/SEO/SEO';

function TealGemDetail() {
	//this state is to track which image is selected to add a active className
	const [currentImage, setCurrentImage] = useState('teal sapphire');

	const [displayImage, setDisplayImage] = useState('gems/teal-sapphire.png');
	const [addToWishList, setAddToWishList] = useState(false);
	const [tempSafetyWishList, setTempSafetyWishList] = useState(false);
	const [tempSafetyCartBasket, setTempSafetyCartBasket] = useState(false);
	const [{ wishListBasket, cartBasket, user }, dispatch] = useStateValue();

	// created the image path
	const selectedImage = (imagePath, image) => {
		setCurrentImage(image);

		console.log('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
		setDisplayImage('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
	};

	// ADDING THE ITEM INTO THE REACT CONTEXT API CART
	const addItemToCart = () => {
		if (user) {
			dispatch({
				type: 'ADD_TO_BASKET',
				item: {
					productName: 'Teal Sapphire',
					productCost: 1100.0,
					productImgURL: 'gems/teal-sapphire.png',
					productQuantity: 1,
					preferredMetal: null,
					preferredSize: null,
				},
			});
			alert('Added item to cart!');
		} else {
			alert('Please sign in to add item to wishlist');
		}
	};

	// we load all the content from the database (this runs only once)
	useEffect(() => {
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
								preferredMetal: cartItem.preferredMetal,
								preferredSize: cartItem.preferredSize,
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
								preferredMetal: wishlistItem.preferredMetal,
								preferredSize: wishlistItem.preferredSize,
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

	// ADDING THE ITEM TO THE WISHLIST
	const addItemToWishList = () => {
		if (user) {
			setAddToWishList(true);
			dispatch({
				type: 'ADD_TO_WISHLIST',
				item: {
					name: 'Teal Sapphire',
					cost: 1100,
					imgURL: 'gems/teal-sapphire.png',
					preferredMetal: null,
					preferredSize: null,
				},
			});
		} else {
			alert('Please sign in to add item to wishlist');
		}
	};

	// REMOVING THE ITEM FROM THE WISHLIST
	const removeFromWishList = () => {
		if (user) {
			setAddToWishList(false);
			dispatch({
				type: 'REMOVE_FROM_WISHLIST',
				name: 'Teal Sapphire',
			});
		} else {
			alert('Please sign in to add item to wishlist');
		}
	};

	const tableRow = (description, detail) => (
		<div className="tableRow">
			<p>{description}</p>
			<p>{detail}</p>
		</div>
	);

	return (
		<div className="gemDetails">
			<SEO title="Teal Gems" />
			{/* Blue gem add to cart section */}
			<div className="gemDetails__sectionCart">
				<div className="gemDetails__sectionCartSmallImages">
					<img
						onMouseOver={(e) => {
							selectedImage(e.target.src, "purple sapphire");
						}}
						src="gems/purple-sapphire.png"
						alt=""
						className={currentImage === 'purple sapphire' ? 'active' : ''}
					/>
					<img
						onMouseOver={(e) => {
							selectedImage(e.target.src, "teal sapphire");
						}}
						src="gems/teal-sapphire.png"
						alt=""
						className={currentImage === 'teal sapphire' ? 'active' : ''}
					/>
					<img
						onMouseOver={(e) => {
							selectedImage(e.target.src, "white sapphire");
						}}
						src="gems/white-sapphire.png"
						alt=""
						className={currentImage === 'white sapphire' ? 'active' : ''}
					/>
				</div>
				<div className="gemDetails__sectionCartMainImage">
					<ReactImageMagnify 
						hoverDelayInMs = {0.1}
						hoverOffDelayInMs = {0.1}
						enlargedImagePosition = "over"  
						{...{
						smallImage: {
							alt: "",
							width: 450,
							height: 450,
							src: displayImage
						},
						largeImage: {
							src: displayImage,
							width: 1200,
							height: 1200,
						}
					}}
					/>
					<div className="gemDetails__sectionCartMainImageIcon">
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
				<div className="gemDetails__sectionCartCartDetails">
					<Fade triggerOnce direction="right" cascade>
						<h2>Teal Sapphire</h2>
						<div className="gemDetails__sectionCartCartDetailsItem">
							<p>Quantity</p>
							<p>1</p>
						</div>
						<div className="gemDetails__sectionCartCartDetailsItem">
							<p>Weight (Carat)</p>
							<p>0.3</p>
						</div>
						<div className="gemDetails__sectionCartCartDetailsItem">
							<p>Shape</p>
							<p>Round</p>
						</div>
						<p>Price: $ 1100.00</p>
						<br />
						<br />
						<div className="gemDetails__sectionCartCartDetailsBtns">
							{user ? (
								<Link>
									<button onClick={addItemToCart}>ADD TO CART</button>
								</Link>
							) : (
								<></>
							)}
							<a href="#viewDetails">
								<button>VIEW DETAILS</button>
							</a>
						</div>
					</Fade>
				</div>
			</div>

			{/* video content */}
			<div className="gemDetails__sectionVideo">
				<Fade triggerOnce>
					<h2>Video Content:</h2>
					<video src="" loop controls autoplay></video>
				</Fade>
			</div>

			{/* description and details */}
			<div id="viewDetails" className="gemDetails__sectionDescription">
			<Fade cascade triggerOnce>
					<h2>Description & Details</h2>
					<div className="gemDetails__sectionDescriptionTable">
						{tableRow('Main Stone', 'Natural Sapphire')}
						{tableRow('Brand', 'Natural Sapphire')}
						{tableRow('Verity', 'Sapphire')}
						{tableRow('Shape', 'Round')}
						{tableRow('Treatment', 'Heated')}
						{tableRow('Country', 'Sri Lanka')}
						{tableRow('Length (mm)', '6.87')}
						{tableRow('Width (mm)', '6.08')}
						{tableRow('Depth (mm)', '3.78')}
						{tableRow('Clarity', '-')}
						{tableRow('Cutting', 'Natural Sapphire')}
						{tableRow('Weight (Carat)', 'Natural Sapphire')}
						{tableRow('Certificate', 'GIC')}
					</div>
				</Fade>
			</div>

			{/* other similar products */}
			<div className="gemDetails__sectionProduct">
				<Fade cascade>
					<h2>Other Similar Products</h2>
					<h3>Showing 1 - 40 of 1020</h3>
				</Fade>

				<Fade cascade>
					<div className="gemDetails__otherGemsRow">
						<Gem img="gems/teal-sapphire.png" name="Teal Sapphires" viewMoreUrl="/teal+sapphire" />
						<Gem img="gems/purple-sapphire.png" name="Purple Sapphires" viewMoreUrl="/purple+sapphire" />
						<Gem
							img="gems/Padparadscha-sapphire.png"
							name="Padparadscha Sapphires"
							viewMoreUrl="/padparadscha+sapphire"
						/>
						<Gem img="gems/orange-sapphire.png" name="Orange Sapphires" viewMoreUrl="/orange+sapphire" />
					</div>
					<div style={{ justifyContent: 'center' }} className="gemDetails__otherGemsRow">
						<Gem
							img="gems/ClaudiaHamann_PinkSapphire_Ceylon_Cushion_Unheated.png"
							name="Pink Sapphires"
							viewMoreUrl="/pink+sapphire"
						/>
						<Gem img="gems/white-sapphire.png" name="White Sapphires" viewMoreUrl="/white+sapphire" />
					</div>
				</Fade>
			</div>
		</div>
	);
}

export default TealGemDetail;
