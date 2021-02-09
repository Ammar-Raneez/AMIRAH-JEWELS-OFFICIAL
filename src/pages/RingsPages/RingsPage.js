import { Collapse } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import './RingsPage.css';
import Product from './Product/Product';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ReactImageMagnify from 'react-image-magnify';
import { Fade } from 'react-awesome-reveal';
import SEO from '../../shared/components/SEO/SEO';
import formatCurrency from 'format-currency';

function RingsPage() {
	//this state is to track which image is selected to add a active className
	const [currentImage, setCurrentImage] = useState('ring2');
	const [readMoreDescription, setReadMoreDescription] = useState(false);

	const [displayImage, setDisplayImage] = useState('pendantsNecklace/ring2.png');
	const [addToWishList, setAddToWishList] = useState(false);
	const [tempSafetyWishList, setTempSafetyWishList] = useState(false);
	const [tempSafetyCartBasket, setTempSafetyCartBasket] = useState(false);
	const [{ wishListBasket, cartBasket, user, currencySymbol, currencyRate }, dispatch] = useStateValue();
	const [currentMetalType, setCurrentMetalType] = useState('18k Rose Gold');
	const [currentMetalSize, setCurrentMetalSize] = useState('US 4');
	const [displayPrice, setDisplayPrice] = useState(false);

	// created the image path
	const selectedImage = (imagePath, image) => {
		setCurrentImage(image);

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
								preferredMetal: currentMetalType.preferredMetal,
								preferredSize: currentMetalSize.preferredSize,
							},
						});
					}

					// adding the wishlist items
					for (const wishlistItem of doc.data().wishlist) {
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
					// Dispatch to set the currency rate from the db
					dispatch({
						type: 'SET_CURRENCY_RATE',
						currencyRate: doc.data().currencyRate,
					});

					// Dispatch to set the currency symbol from the db
					dispatch({
						type: 'SET_CURRENCY_SYMBOL',
						currencySymbol: doc.data().currencySymbol,
					});

					setDisplayPrice(true);
				}
			})
		);
	}, []);

	// UPDATING THE WISHLIST BASKET ON (FIRE-STORE)
	useEffect(() => {
		// console.log(wishListBasket, "<============");
		console.log(currencyRate);
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
					productName: 'Some Stupid Ring',
					productCost: 890.0,
					productImgURL: 'pendantsNecklace/ring4.png',
					productQuantity: 1,
					preferredMetal: currentMetalType,
					preferredSize: currentMetalSize,
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
					name: 'Some Stupid Ring',
					cost: 890.0,
					imgURL: 'pendantsNecklace/ring4.png',
					preferredMetal: currentMetalType,
					preferredSize: currentMetalSize,
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
				name: 'Some Stupid Ring',
			});
			setAddToWishList(false);
		} else {
			alert('Please sign in to add item to wishlist');
		}
	};

	return (
		<div className="ringsPage">
			<SEO title="Rings" />
			<div className="ringsPage__sectionCart">
				<div className="ringsPage__sectionCartSmallImages">
					<img
						onMouseOver={(e) => {
							selectedImage(e.target.src, 'ring2');
						}}
						src="pendantsNecklace/ring2.png"
						alt=""
						className={currentImage === 'ring2' ? 'active' : ''}
					/>
					<img
						onMouseOver={(e) => {
							selectedImage(e.target.src, 'ring3');
						}}
						src="pendantsNecklace/ring3.png"
						alt=""
						className={currentImage === 'ring3' ? 'active' : ''}
					/>
					<img
						onMouseOver={(e) => {
							selectedImage(e.target.src, 'ring4');
						}}
						src="pendantsNecklace/ring4.png"
						alt=""
						className={currentImage === 'ring4' ? 'active' : ''}
					/>
				</div>
				<div className="ringsPage__sectionCartMainImage">
					<ReactImageMagnify
						hoverDelayInMs={0.1}
						hoverOffDelayInMs={0.1}
						enlargedImagePosition="over"
						{...{
							smallImage: {
								alt: '',
								width: 450,
								height: 450,
								src: displayImage,
							},
							largeImage: {
								src: displayImage,
								width: 1200,
								height: 1200,
							},
						}}
					/>
					<div className="ringsPage__sectionCartMainImageIcon">
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
				<div className="ringsPage__sectionCartCartDetails">
					<Fade direction="left" cascade triggerOnce>
						<h2>Some Stupid Ring</h2>
						<div className="ringsPage__sectionCartCartDetailsItem">
							Preferred Metal:
							<select
								className="ringsPage__dropdownList"
								value={currentMetalType}
								onChange={(e) => setCurrentMetalType(e.target.value)}
							>
								<option key={3} className="ringsPage__dropdownItem" value="18k Rose Gold">
									18k Rose Gold
								</option>
								<option key={1} className="ringsPage__dropdownItem" value="18k Yellow Gold">
									18k Yellow Gold
								</option>
								<option key={2} className="ringsPage__dropdownItem" value="18k White Gold">
									18k White Gold
								</option>
								<option key={4} className="ringsPage__dropdownItem" value="Sterling Silver">
									Sterling Silver
								</option>
							</select>
						</div>
						<div className="ringsPage__sectionCartCartDetailsItem">
							Preferred Size:
							<select
								className="ringsPage__dropdownList"
								value={currentMetalSize}
								onChange={(e) => setCurrentMetalSize(e.target.value)}
							>
								<option className="ringsPage__dropdownItem" key={3} value="US 4">
									US 4
								</option>
								<option className="ringsPage__dropdownItem" key={1} value="US 4 ½">
									US 4 ½
								</option>
								<option className="ringsPage__dropdownItem" key={2} value="US 5">
									US 5
								</option>
								<option className="ringsPage__dropdownItem" key={4} value="US 5 ½">
									US 5 ½
								</option>
							</select>
						</div>
						<div className="ringsPage__sectionCartCartDetailsItem">
							<p>Quantity</p>
							<p>1</p>
						</div>
						<p>
							{displayPrice &&
								`Price: ${currencySymbol} ${formatCurrency(Math.round(890.0 * currencyRate * 100) / 100)}`}
						</p>
						<br />
						<br />
						<div className="ringsPage__sectionCartCartDetailsBtns">
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
					</Fade>
				</div>
			</div>
			{/* Description */}
			<div id="product__description" className="ringsPage__description">
				<Fade triggerOnce cascade>
					<h2>Description & Details</h2>
					<p className="ringsPage__descriptionMain">
						This circle pendant features black onyx, a unique variety of quartz found in nature. This striking pendant
						is traced with scintillating diamonds, resulting in a modern design with a smooth finish and high polish. As
						multifaceted as it is iconic, the Tiffany T collection is a tangible reminder of the connections we feel but
						can't always see. Showcase your personal style by pairing this pendant with other Tiffany designs for a bold
						look.
					</p>
					<div className="ringsPage__descriptionOtherDetails">
						<Collapse in={readMoreDescription}>
							<p>18k rose gold with black onyx and round brilliant diamonds</p>
							<p>Circle, 16 mm diameter</p>
							<p>Carat total weight .05</p>
							<p>Adjustable, 16-18" chain</p>
						</Collapse>
						<p
							onClick={() => setReadMoreDescription(!readMoreDescription)}
							className="ringsPage__descriptionOtherDetailsReadMore"
						>
							{readMoreDescription ? 'Read Less' : 'Read More'} <ChevronRightIcon />
							<ChevronRightIcon />
							<ChevronRightIcon />
						</p>
					</div>
				</Fade>
			</div>

			{/* Other Similar Products */}
			<div className="ringsPage__otherProducts">
				<Fade cascade>
					<h2>Other Similar Products</h2>
					<br />
					<h3>Showing 1 - 40 of 1020</h3>
				</Fade>
				<div className="ringsPage__otherProductsProducts">
					<Fade delay={500} cascade>
						<div className="ringsPage__otherProductsRow">
							<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
							<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
							<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
							<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
						</div>
						{/* <div className="ringsPage__otherProductsRow">
					</div> */}
					</Fade>
				</div>
			</div>
		</div>
	);
}

export default RingsPage;
