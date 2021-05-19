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
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { addToWishlist, removeFromWishlist, selectWishlist } from '../../features/wishlistSlice';
import { addToCart, selectCart } from '../../features/cartSlice';
import { selectCurrencySymbol } from '../../features/currencySymbolSlice';
import { selectCurrencyRate } from '../../features/currencyRateSlice';

function RingsPage() {
	//this state is to track which image is selected to add a active className
	const [currentImage, setCurrentImage] = useState('ring2');
	const [readMoreDescription, setReadMoreDescription] = useState(false);
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const wishListBasket = useSelector(selectWishlist);
	const cartBasket = useSelector(selectCart);
	const currencySymbol = useSelector(selectCurrencySymbol);
	const currencyRate = useSelector(selectCurrencyRate);
	const [displayImage, setDisplayImage] = useState('pendantsNecklace/ring2.png');
	const [addToWishList, setAddToWishList] = useState(false);
	const [tempSafetyWishList, setTempSafetyWishList] = useState(false);
	const [tempSafetyCartBasket, setTempSafetyCartBasket] = useState(false);
	const [currentMetalType, setCurrentMetalType] = useState('18k Rose Gold');
	const [currentMetalSize, setCurrentMetalSize] = useState('US 4');
	const [displayPrice, setDisplayPrice] = useState(false);

	useEffect(() => {
		if (tempSafetyWishList === true) {
			db.collection('users').doc(user?.email).update({
				wishlist: wishListBasket,
			});
		}
		setTempSafetyWishList(true);
	}, [wishListBasket]);

	useEffect(() => {
		if (tempSafetyCartBasket === true) {
			db.collection('users').doc(user?.email).update({
				cart: cartBasket,
			});
		}
		setTempSafetyCartBasket(true);
	}, [cartBasket]);

	// created the image path
	const selectedImage = (imagePath, image) => {
		setCurrentImage(image);

		console.log('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
		setDisplayImage('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
	};

	const addItemToCart = () => {
		if (user) {
			dispatch(
				addToCart({
					productName: 'Some Stupid Ring',
					productCost: 890.0,
					productImgURL: 'pendantsNecklace/ring4.png',
					productQuantity: 1,
					preferredMetal: currentMetalType,
					preferredSize: currentMetalSize,
				})
			);
			alert('Added item to cart!');
		} else {
			alert('Please sign in to add item to wishlist');
		}
	};

	const addItemToWishList = () => {
		if (user) {
			dispatch(
				addToWishlist({
					name: 'Some Stupid Ring',
					cost: 890.0,
					imgURL: 'pendantsNecklace/ring4.png',
					preferredMetal: currentMetalType,
					preferredSize: currentMetalSize,
				})
			);
			setAddToWishList(true);
		} else {
			alert('Please sign in to add item to wishlist');
		}
	};

	const removeFromWishList = () => {
		if (user) {
			dispatch(removeFromWishlist({ name: 'Some Stupid Ring' }));
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
								`Price: ${currencySymbol} ${formatCurrency(
									Math.round(890.0 * currencyRate * 100) / 100
								)}`}
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
						This circle pendant features black onyx, a unique variety of quartz found in nature. This
						striking pendant is traced with scintillating diamonds, resulting in a modern design with a
						smooth finish and high polish. As multifaceted as it is iconic, the Tiffany T collection is a
						tangible reminder of the connections we feel but can't always see. Showcase your personal style
						by pairing this pendant with other Tiffany designs for a bold look.
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
