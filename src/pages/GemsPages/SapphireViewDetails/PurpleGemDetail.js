import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Gem from '../Gem/Gem';
import './GemDetails.css';
import { useStateValue } from '../../../StateProvider';
import { db } from '../../../firebase';

function PurpleGemDetail() {
    const [displayImage, setDisplayImage] = useState('gems/purple-sapphire.png');
	const [addToWishList, setAddToWishList] = useState(false);
	const [tempSafety, setTempSafety] = useState(false);
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
				}
			})
		);
	}, [])
	
	// use effect for updating the wishlist in the database when clicked
	useEffect(() => {
		if (tempSafety === true) {
			db.collection('users').doc(user?.email).update({
				wishlist: wishListBasket,
			});
		}
		setTempSafety(true);
	}, [addToWishList]);

	// ADDING THE ITEM TO THE WISHLIST
	const addItemToWishList = () => {
		if (user) {
			setAddToWishList(true);
			dispatch({
				type: 'ADD_TO_WISHLIST',
				item: {
					name: 'Purple Sapphire',
					cost: 10,
					imgURL: 'gems/purple-sapphire.png',
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
				name: 'Purple Sapphire',
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
			{/* Blue gem add to cart section */}
			<div className="gemDetails__sectionCart">
				<div className="gemDetails__sectionCartSmallImages">
					<img
						onClick={(e) => {
							selectedImage(e.target.src);
						}}
						src="gems/purple-sapphire.png"
						alt=""
					/>
					<img
						onClick={(e) => {
							selectedImage(e.target.src);
						}}
						src="gems/teal-sapphire.png"
						alt=""
					/>
					<img
						onClick={(e) => {
							selectedImage(e.target.src);
						}}
						src="gems/white-sapphire.png"
						alt=""
					/>
				</div>
				<div className="gemDetails__sectionCartMainImage">
					<img src={displayImage} alt="" />
					<div className="gemDetails__sectionCartMainImageIcon">
						{addToWishList ? (
							<FavoriteIcon onClick={removeFromWishList} />
						) : (
							<FavoriteBorderIcon onClick={addItemToWishList} />
						)}
					</div>
				</div>
				<div className="gemDetails__sectionCartCartDetails">
					<h2>Purple Sapphire</h2>
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
					<p>Price: $ 10.00</p>
					<br />
					<br />
					<div className="gemDetails__sectionCartCartDetailsBtns">
						<Link>
							<button>ADD TO CART</button>
						</Link>
						<Link>
							<button>VIEW DETAILS</button>
						</Link>
					</div>
				</div>
			</div>

			{/* video content */}
			<div className="gemDetails__sectionVideo">
				<h2>Video Content:</h2>
				<video src="" loop controls autoplay></video>
			</div>

			{/* description and details */}
			<div className="gemDetails__sectionDescription">
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
			</div>

			{/* other similar products */}
			<div className="gemDetails__sectionProduct">
				<h2>Other Similar Products</h2>
				<h3>Showing 1 - 40 of 1020</h3>

				<div className="gemDetails__otherGemsRow">
					<Gem img="gems/teal-sapphire.png" name="Teal Sapphires" viewMoreUrl="/teal+sapphire" />
					<Gem img="gems/purple-sapphire.png" name="Purple Sapphires" viewMoreUrl="/purple+sapphire" />
					<Gem img="gems/Padparadscha-sapphire.png" name="Padparadscha Sapphires" viewMoreUrl="/padparadscha+sapphire" />
					<Gem img="gems/orange-sapphire.png" name="Orange Sapphires" viewMoreUrl="/orange+sapphire" />
				</div>
				{/* <div className="gemDetails__otherGemsRow">
				</div> */}
				<div style={{ justifyContent: 'center' }} className="gemDetails__otherGemsRow">
					<Gem img="gems/ClaudiaHamann_PinkSapphire_Ceylon_Cushion_Unheated.png" name="Pink Sapphires" viewMoreUrl="/pink+sapphire" />
					<Gem img="gems/white-sapphire.png" name="White Sapphires" viewMoreUrl="/white+sapphire" />
				</div>
			</div>
		</div>
    )
}

export default PurpleGemDetail
