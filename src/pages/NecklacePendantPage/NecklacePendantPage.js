import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { useStateValue } from '../../StateProvider';
import './NecklacePendantPage.css';
import Product from './Product/Product';

function NecklacePendantPage() {
	const [displayImage, setDisplayImage] = useState('pendantsNecklace/ring1.png');
	const [addToWishList, setAddToWishList] = useState(false);
	const [{ wishListBasket, cartBasket, user }, dispatch] = useStateValue();

	const selectedImage = (imagePath) => {
		console.log('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
		setDisplayImage('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
	};

	// useEffect(() => {

	// }, [addToWishList]);

	// ADDING THE ITEM TO THE WISHLIST
	const addItemToWishList = () => {
		if (user) {
			setAddToWishList(true);
			dispatch({
				type: 'ADD_TO_WISHLIST',
				item: {
					name: 'Diamond and Black Onyx Circle Pendant',
					cost: 890.0,
					imgURL: 'pendantsNecklace/ring1.png',
				},
			});

			// updating the wish list into the database for the specific user (adding)
			addItemToWishListDB();
		} else {
			alert('Please sign in to add item to wishlist');
		}
	};

	const addItemToWishListDB = () => {
		// updating the wish list into the database for the specific user (adding)
		db.collection('users').doc(user.email).update({
			
		});
	};
	const removeItemToWishListDB = () => {
		// updating the wish list into the database for the specific user (deleting)
	};

	// REMOVING THE ITEM FROM THE WISHLIST
	const removeFromWishList = () => {
		if (user) {
			setAddToWishList(false);
			dispatch({
				type: 'REMOVE_FROM_WISHLIST',
				name: 'Diamond and Black Onyx Circle Pendant',
			});

			// updating the wish list into the database for the specific user (deleting)
			removeItemToWishListDB();
		} else {
			alert('Please sign in to add item to wishlist');
		}
	};

	return (
		<div className="necklacePendant">
			<div className="necklacePendant__sectionCart">
				<div className="necklacePendant__sectionCartSmallImages">
					<img
						onClick={(e) => {
							selectedImage(e.target.src);
						}}
						src="pendantsNecklace/ring2.png"
						alt=""
					/>
					<img
						onClick={(e) => {
							selectedImage(e.target.src);
						}}
						src="pendantsNecklace/ring3.png"
						alt=""
					/>
					<img
						onClick={(e) => {
							selectedImage(e.target.src);
						}}
						src="pendantsNecklace/ring4.png"
						alt=""
					/>
				</div>
				<div className="necklacePendant__sectionCartMainImage">
					<img src={displayImage} alt="" />
					<div className="necklacePendant__sectionCartMainImageIcon">
						{addToWishList ? (
							<FavoriteIcon onClick={removeFromWishList} />
						) : (
							<FavoriteBorderIcon onClick={addItemToWishList} />
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
						<Link>
							<button>ADD TO CART</button>
						</Link>
						<Link>
							<button>VIEW DETAILS</button>
						</Link>
					</div>
				</div>
			</div>
			{/* Description */}
			<div className="necklacePendant__description">
				<h2>Description & Details</h2>
				<p className="necklacePendant__descriptionMain">
					This circle pendant features black onyx, a unique variety of quartz found in nature. This striking pendant is
					traced with scintillating diamonds, resulting in a modern design with a smooth finish and high polish. As
					multifaceted as it is iconic, the Tiffany T collection is a tangible reminder of the connections we feel but
					can't always see. Showcase your personal style by pairing this pendant with other Tiffany designs for a bold
					look.
				</p>
				<div className="necklacePendant__descriptionOtherDetails">
					<p>18k rose gold with black onyx and round brilliant diamonds</p>
					<p>Circle, 16 mm diameter</p>
					<p>Carat total weight .05</p>
					<p>Adjustable, 16-18" chain</p>
				</div>
			</div>

			{/* Other Similar Products */}
			<div className="necklacePendant__otherProducts">
				<h2>Other Similar Products</h2>
				<br />
				<h3>Showing 1 - 40 of 1020</h3>

				<div className="gemStonesMain__otherGems">
					<div className="gemStonesMain__otherGemsRow">
						<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
						<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
					</div>
					<div className="gemStonesMain__otherGemsRow">
						<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
						<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
					</div>
					<div className="gemStonesMain__otherGemsRow">
						<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
						<Product img="pendantsNecklace/pink_necklace.png" name="Product Name" viewMoreUrl="/" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default NecklacePendantPage;
