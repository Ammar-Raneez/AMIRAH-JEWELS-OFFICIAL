// import { Collapse } from '@material-ui/core';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { db } from '../../firebase';
// import './NecklacePendantPage.css';
// import Product from './Product/Product';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ReactImageMagnify from 'react-image-magnify';
// import { Fade } from 'react-awesome-reveal';
// import SEO from '../../shared/components/SEO/SEO';
// import formatCurrency from 'format-currency';
// import { selectUser } from '../../features/userSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCurrencySymbol } from '../../features/currencySymbolSlice';
// import { selectCurrencyRate } from '../../features/currencyRateSlice';
// import { addToCart, selectCart } from '../../features/cartSlice';
// import { addToWishlist, removeFromWishlist, selectWishlist } from '../../features/wishlistSlice';

// function NecklacePendantPage() {
// 	//this state is to track which image is selected to add aa active className
// 	const [currentImage, setCurrentImage] = useState('ring2');
// 	const [readMoreDescription, setReadMoreDescription] = useState(false);
// 	const [displayImage, setDisplayImage] = useState('necklace-pendants/ring2.png');
// 	const [addToWishList, setAddToWishList] = useState(false);
// 	const wishList = useSelector(selectWishlist);
// 	const [tempSafetyWishList, setTempSafetyWishList] = useState(false);
// 	const [tempSafetyCartBasket, setTempSafetyCartBasket] = useState(false);
// 	const user = useSelector(selectUser);
// 	const cartBasket = useSelector(selectCart);
// 	const wishListBasket = useSelector(selectWishlist);
// 	const currencySymbol = useSelector(selectCurrencySymbol);
// 	const currencyRate = useSelector(selectCurrencyRate);
// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		// console.log(wishListBasket, "<============");
// 		if (tempSafetyWishList === true) {
// 			db.collection('users').doc(user?.email).update({
// 				wishlist: wishListBasket,
// 			});
// 		}

// 		setTempSafetyWishList(true);
// 	}, [wishList]);

// 	useEffect(() => {
// 		if (tempSafetyCartBasket === true) {
// 			db.collection('users').doc(user?.email).update({
// 				cart: cartBasket,
// 			});
// 		}

// 		setTempSafetyCartBasket(true);
// 	}, [cartBasket]);

// 	// created the image path
// 	const selectedImage = (imagePath, image) => {
// 		setCurrentImage(image);

// 		console.log('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
// 		setDisplayImage('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
// 	};

// 	const addItemToCart = () => {
// 		if (user) {
// 			dispatch(
// 				addToCart({
// 					productName: 'Diamond and Black Onyx Circle Pendant',
// 					productCost: 890.0,
// 					productImgURL: 'necklace-pendants/ring4.png',
// 					productQuantity: 1,
// 					preferredMetal: null,
// 					preferredSize: null,
// 				})
// 			);

// 			alert('Added item to cart!');
// 		} else {
// 			alert('Please sign in to add item to wishlist');
// 		}
// 	};

// 	const addItemToWishList = () => {
// 		if (user) {
// 			dispatch(
// 				addToWishlist({
// 					name: 'Diamond and Black Onyx Circle Pendant',
// 					cost: 890.0,
// 					imgURL: 'necklace-pendants/ring4.png',
// 					preferredMetal: null,
// 					preferredSize: null,
// 				})
// 			);

// 			setAddToWishList(true);
// 		} else {
// 			alert('Please sign in to add item to wishlist');
// 		}
// 	};

// 	const handleRemoveItemWishlist = () => {
// 		if (user) {
// 			dispatch(removeFromWishlist({ name: 'Diamond and Black Onyx Circle Pendant' }));
// 			setAddToWishList(false);
// 		} else {
// 			alert('Please sign in to add item to wishlist');
// 		}
// 	};

// 	return (
// 		<div className="necklacePendant">
// 			<SEO title="Necklaces & Pendants" />
// 			<div className="necklacePendant__sectionCart">
// 				<div className="necklacePendant__sectionCartSmallImages">
// 					<img
// 						onMouseOver={(e) => {
// 							selectedImage(e.target.src, 'ring2');
// 						}}
// 						src="necklace-pendants/ring2.png"
// 						alt=""
// 						className={currentImage === 'ring2' ? 'active' : ''}
// 					/>
// 					<img
// 						onMouseOver={(e) => {
// 							selectedImage(e.target.src, 'ring3');
// 						}}
// 						src="necklace-pendants/ring3.png"
// 						alt=""
// 						className={currentImage === 'ring3' ? 'active' : ''}
// 					/>
// 					<img
// 						onMouseOver={(e) => {
// 							selectedImage(e.target.src, 'ring4');
// 						}}
// 						src="necklace-pendants/ring4.png"
// 						alt=""
// 						className={currentImage === 'ring4' ? 'active' : ''}
// 					/>
// 				</div>
// 				<div className="necklacePendant__sectionCartMainImage">
// 					<ReactImageMagnify
// 						hoverDelayInMs={0.1}
// 						hoverOffDelayInMs={0.1}
// 						enlargedImagePosition="over"
// 						{...{
// 							smallImage: {
// 								alt: '',
// 								width: 450,
// 								height: 450,
// 								src: displayImage,
// 							},
// 							largeImage: {
// 								src: displayImage,
// 								width: 1200,
// 								height: 1200,
// 							},
// 						}}
// 					/>
// 					<div className="necklacePendant__sectionCartMainImageIcon">
// 						{user ? (
// 							addToWishList ? (
// 								<FavoriteIcon onClick={handleRemoveItemWishlist} />
// 							) : (
// 								<FavoriteBorderIcon onClick={addItemToWishList} />
// 							)
// 						) : (
// 							<></>
// 						)}
// 					</div>
// 				</div>
// 				<div className="necklacePendant__sectionCartCartDetails">
// 					<Fade direction="left" cascade triggerOnce>
// 						<h2>Diamond and Black Onyx Circle Pendant</h2>
// 						<div className="necklacePendant__sectionCartCartDetailsItem">
// 							<p>in 18k Rose Gold, 16-18"</p>
// 						</div>
// 						<div className="necklacePendant__sectionCartCartDetailsItem">
// 							<p>Quantity</p>
// 							<p>1</p>
// 						</div>
// 						<p>
// 							{user &&
// 								`Price: ${currencySymbol} ${formatCurrency(
// 									Math.round(4500.0 * currencyRate * 100) / 100
// 								)}`}
// 						</p>
// 						<br />
// 						<br />
// 						<div className="necklacePendant__sectionCartCartDetailsBtns">
// 							{user ? (
// 								<Link>
// 									<button onClick={addItemToCart}>ADD TO CART</button>
// 								</Link>
// 							) : (
// 								<></>
// 							)}
// 							<a href="#product__description">
// 								<button>VIEW DETAILS</button>
// 							</a>
// 						</div>
// 					</Fade>
// 				</div>
// 			</div>
// 			{/* Description */}
// 			<div id="product__description" className="necklacePendant__description">
// 				<Fade triggerOnce cascade>
// 					<h2>Description & Details</h2>
// 					<p className="necklacePendant__descriptionMain">
// 						This circle pendant features black onyx, a unique variety of quartz found in nature. This
// 						striking pendant is traced with scintillating diamonds, resulting in a modern design with a
// 						smooth finish and high polish. As multifaceted as it is iconic, the Tiffany T collection is a
// 						tangible reminder of the connections we feel but can't always see. Showcase your personal style
// 						by pairing this pendant with other Tiffany designs for a bold look.
// 					</p>
// 					<div className="necklacePendant__descriptionOtherDetails">
// 						<Collapse in={readMoreDescription}>
// 							<p>18k rose gold with black onyx and round brilliant diamonds</p>
// 							<p>Circle, 16 mm diameter</p>
// 							<p>Carat total weight .05</p>
// 							<p>Adjustable, 16-18" chain</p>
// 						</Collapse>
// 						<p
// 							onClick={() => setReadMoreDescription(!readMoreDescription)}
// 							className="necklacePendant__descriptionOtherDetailsReadMore"
// 						>
// 							{readMoreDescription ? 'Read Less' : 'Read More'} <ChevronRightIcon />
// 							<ChevronRightIcon />
// 							<ChevronRightIcon />
// 						</p>
// 					</div>
// 				</Fade>
// 			</div>

// 			{/* Other Similar Products */}
// 			<div className="necklacePendant__otherProducts">
// 				<Fade cascade>
// 					<h2>Other Similar Products</h2>
// 					<br />
// 					<h3>Showing 1 - 40 of 1020</h3>
// 				</Fade>
// 				<div className="necklacePendant__otherProductsProducts">
// 					<Fade delay={500} cascade>
// 						<div className="necklacePendant__otherProductsRow">
// 							<Product img="necklace-pendants/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
// 							<Product img="necklace-pendants/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
// 							<Product img="necklace-pendants/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
// 							<Product img="necklace-pendants/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
// 						</div>
// 					</Fade>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default NecklacePendantPage;
