import { Collapse } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import './RingsPage.css';
import OtherProducts from './other-products/OtherProducts';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ReactImageMagnify from 'react-image-magnify';
import { Fade } from 'react-awesome-reveal';
import SEO from '../../shared/components/SEO/SEO';
import formatCurrency from 'format-currency';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import { addToWishlist, removeFromWishlist, selectWishlist } from '../../features/wishlistSlice';
import { decrementItemCount, incrementItemCount, addToCart, selectCart } from '../../features/cartSlice';
import { selectCurrencySymbol } from '../../features/currencySymbolSlice';
import { selectCurrencyRate } from '../../features/currencyRateSlice';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ringData } from './ringData';

function RingsPage({
	title,
	description,
	specification,
	stoneInfo,
	diamondInfo,
	images,
	imageNames
}) {
	const user = useSelector(selectUser);
	const wishListBasket = useSelector(selectWishlist);
	const cartBasket = useSelector(selectCart);
	const currencySymbol = useSelector(selectCurrencySymbol);
	const currencyRate = useSelector(selectCurrencyRate);

	const [currentImage, setCurrentImage] = useState(imageNames[0]);
	const [readMoreDescription, setReadMoreDescription] = useState(false);
	const [displayImage, setDisplayImage] = useState(images[0]);
	const [addToWishList, setAddToWishList] = useState(false);
	const [tempSafetyWishList, setTempSafetyWishList] = useState(false);
	const [tempSafetyCartBasket, setTempSafetyCartBasket] = useState(false);
	const [currentMetalType, setCurrentMetalType] = useState('18k Rose Gold');
	const [currentMetalSize, setCurrentMetalSize] = useState('US 4');
	const [currentQty, setCurrentQty] = useState(1);
	const [displayPrice, /*setDisplayPrice*/] = useState(false);

	const dispatch = useDispatch();

	const [width, setWidth] = useState(0);

	useEffect(() => {
		setWidth(window.innerWidth);
		const listener = window.addEventListener('resize', () => {
			setWidth(window.innerWidth);
		});

		return window.removeEventListener('resize', listener);
	}, [width])

	useEffect(() => {
		if (tempSafetyWishList === true) {
			db.collection('users').doc(user?.email).update({
				wishlist: wishListBasket,
			});
		}
		setTempSafetyWishList(true);
	}, [tempSafetyWishList, user?.email, wishListBasket]);

	useEffect(() => {
		if (tempSafetyCartBasket === true) {
			db.collection('users').doc(user?.email).update({
				cart: cartBasket,
			});
		}
		setTempSafetyCartBasket(true);
	}, [cartBasket, tempSafetyCartBasket, user?.email]);

	// created the image path
	const selectedImage = (imagePath, image) => {
		setCurrentImage(image);
		setDisplayImage('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
	}

	const addItemToCart = () => {
		if (user) {
			dispatch(
				addToCart({
					productName: title,
					productCost: 890.0,
					productImgURL: images[0],
					productQuantity: currentQty,
					preferredMetal: currentMetalType,
					preferredSize: currentMetalSize,
				})
			);
			alert('Added item to cart!');
		} else {
			alert('Please sign in to add item to cart');
		}
	}

	const addItemToWishList = () => {
		if (user) {
			dispatch(
				addToWishlist({
					name: title,
					cost: 890.0,
					imgURL: images[0],
					preferredMetal: currentMetalType,
					preferredSize: currentMetalSize,
				})
			);
			setAddToWishList(true);
		} else {
			alert('Please sign in to add item to wishlist');
		}
	}

	const removeFromWishList = () => {
		if (user) {
			dispatch(removeFromWishlist({ name: title }));
			setAddToWishList(false);
		} else {
			alert('Please sign in to add item to wishlist');
		}
	}

	const increaseQuantity = () => {
		if (user) {
			let temp = currentQty + 1;
			setCurrentQty(temp);
			dispatch(
				incrementItemCount({
					itemName: title,
				})
			);
		} else {
			alert('Please sign in');
		}
	}

	const decreaseQuantity = () => {
		if (user) {
			let temp = currentQty - 1;
			setCurrentQty(temp);
			dispatch(
				decrementItemCount({
					itemName: title,
				})
			);
		} else {
			alert('Please sign in');
		}

	}

	return (
		<div className="ringsPage">
			<SEO title={title} />
			<div className="ringsPage__sectionCart">
				<div className="ringsPage__sectionCartSmallImages">
					<img
						onMouseOver={(e) => {
							selectedImage(e.target.src, imageNames[0]);
						}}
						src={images[0]}
						alt=""
						className={currentImage === imageNames[0] ? 'active' : ''}
					/>
					<img
						onMouseOver={(e) => {
							selectedImage(e.target.src, imageNames[1]);
						}}
						src={images[1]}
						alt=""
						className={currentImage === imageNames[1] ? 'active' : ''}
					/>
					<img
						onMouseOver={(e) => {
							selectedImage(e.target.src, imageNames[2]);
						}}
						src={images[2]}
						alt=""
						className={currentImage === imageNames[2] ? 'active' : ''}
					/>
				</div>
				{
					width > 600 ?
						<div className="ringsPage__sectionCartMainImage">
							<ReactImageMagnify
								hoverDelayInMs={0.1}
								hoverOffDelayInMs={0.1}
								enlargedImagePosition="over"
								{...{
									smallImage: {
										alt: '',
										width: 550,
										height: 550,
										src: displayImage,
									},
									largeImage: {
										src: displayImage,
										width: 900,
										height: 900,
									},
								}}
							/>
						</div>
						:
						<Carousel showArrows={true}>
							<div>
								<img alt="" height={250} width="90%" src={images[0]} />
							</div>
							<div>
								<img alt="" height={250} width="90%" src={images[1]} />
							</div>
							<div>
								<img alt="" height={250} width="90%" src={images[2]} />
							</div>
						</Carousel>
				}

				<div className="ringsPage__sectionCartCartDetails">
					<Fade direction="left" triggerOnce>
						<h2>{title.toUpperCase()}</h2>
						<div className="ringsPage__sectionCartMainImageIcon">
							{user ?
								addToWishList ? (
									<FavoriteIcon onClick={removeFromWishList} />
								) : (
									<FavoriteBorderIcon onClick={addItemToWishList} />
								)
								:
								<Link to="/login">
									<FavoriteBorderIcon onClick={addItemToWishList} />
								</Link>
							}
						</div>
						<div style={{ borderTop: '1px solid black' }} className="ringsPage__sectionCartCartDetailsItem">
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
							<p style={{ flex: 1 }}>Quantity</p>
							<button
								style={{
									padding: '0.5vw 1vw',
									fontSize: '1.5vw',
									background: 'transparent',
									border: 'none',
									cursor: 'pointer',
								}}
								onClick={decreaseQuantity}
							>
								−
							</button>
							<input
								style={{
									textAlign: 'center',
									padding: '1vw',
									width: '3vw',
									background: 'transparent',
									border: 'none',
								}}
								type="number"
								disabled={true}
								name="Quantity"
								placeholder="Quantity"
								value={currentQty}
							/>
							<button
								style={{
									padding: '0.5vw 0vw',
									fontSize: '1.5vw',
									background: 'transparent',
									border: 'none',
									cursor: 'pointer',
								}}
								onClick={increaseQuantity}
							>
								+
							</button>
						</div>
						<p>
							{displayPrice &&
								`Price: ${currencySymbol} ${formatCurrency(
									Math.round(890.0 * currencyRate * 100) / 100
								)}`}
						</p>
						<br />
						<div className="ringsPage__sectionCartCartDetailsBtns">
							{user ? (
								<Link>
									<button onClick={addItemToCart}>ADD TO CART</button>
								</Link>
							) : (
								<Link to="/login">
									<button onClick={addItemToCart}>ADD TO CART</button>
								</Link>
							)}
						</div>

						{/* Description */}
						<div id="product__description" className="ringsPage__description">
							<Fade triggerOnce cascade>
								<h2>Description & Details</h2>
								<p className="ringsPage__descriptionMain">
									{description}
								</p>
								<div className="ringsPage__descriptionOtherDetails">
									<Collapse style={readMoreDescription && { marginBottom: '0.7rem' }} in={readMoreDescription}>
										<h4>Product specification</h4>
										{specification.map(specs => <p>{specs}</p>)}
									</Collapse>
									<Collapse style={readMoreDescription && { marginBottom: '0.7rem' }} in={readMoreDescription}>
										<h4>Gemstone Information</h4>
										{stoneInfo.map(info => <p>{info}</p>)}
									</Collapse>
									<Collapse in={readMoreDescription}>
										<h4>Diamond Information</h4>
										{diamondInfo.map(info => <p>{info}</p>)}
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
					</Fade>
				</div>
			</div>

			{/* Other Similar Products */}
			<div className="ringsPage__otherProducts">
				<Fade cascade>
					<h2>YOU MAY ALSO LIKE</h2>
				</Fade>
				<div className="rings-page-main__rings">
					<Fade cascade>
						<div>
							{ringData.map((ring) => ring.title !== title && (
								<Fade cascade>
									<OtherProducts key={ring.id} img={ring.images[0]} name={ring.title} viewMoreUrl={`/rings/` + ring.id} />
								</Fade>
							))}
						</div>
					</Fade>
				</div>
			</div>
		</div>
	);
}

export default RingsPage;
