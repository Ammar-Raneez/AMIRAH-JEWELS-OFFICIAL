import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Gem from '../Gem/Gem';
import './GemDetails.css';
import { useStateValue } from '../../../StateProvider';
import { db } from '../../../firebase';

function BlueGemDetail() {
	const [displayImage, setDisplayImage] = useState('gems/teal-sapphire.png');
	const [addToWishList, setAddToWishList] = useState(false);
	const [tempSafety, setTempSafety] = useState(false);
	const [{ wishListBasket, cartBasket, user }, dispatch] = useStateValue();

	// created the image path
	const selectedImage = (imagePath) => {
		console.log('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
		setDisplayImage('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
	};

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
					name: 'Deep Royal Blue Sapphire',
					cost: 1100,
					imgURL: 'gems/teal-sapphire.png',
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
				name: 'Deep Royal Blue Sapphire',
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
					<h2>Deep Royal Blue Sapphire</h2>
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
					<Gem img="gems/teal-sapphire.png" name="Teal Sapphires" viewMoreUrl="/teal+sapphires" />
					<Gem img="gems/purple-sapphire.png" name="Purple Sapphires" viewMoreUrl="/purple-sapphire" />
				</div>
				<div className="gemDetails__otherGemsRow">
					<Gem
						img="gems/Padparadscha-sapphire.png"
						name="Padparadscha Sapphires"
						viewMoreUrl="/padparadscha-sapphire"
					/>
					<Gem img="gems/orange-sapphire.png" name="Orange Sapphires" viewMoreUrl="/orange-sapphire" />
				</div>
				<div className="gemDetails__otherGemsRow">
					<Gem
						img="gems/ClaudiaHamann_PinkSapphire_Ceylon_Cushion_Unheated.png"
						name="Pink Sapphires"
						viewMoreUrl="/pink-sapphire"
					/>
					<Gem img="gems/white-sapphire.png" name="White Sapphires" viewMoreUrl="/white+sapphires" />
				</div>
			</div>
		</div>
	);
}

export default BlueGemDetail;
