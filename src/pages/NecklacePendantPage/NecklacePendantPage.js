import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NecklacePendantPage.css';
import Product from './Product/Product';

function NecklacePendantPage() {
	const [displayImage, setDisplayImage] = useState('pendantsNecklace/ring1.png');

	const [addToWishList, setAddToWishList] = useState(false);

	const selectedImage = (imagePath) => {
		console.log('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
		setDisplayImage('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
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
							<FavoriteIcon onClick={(e) => setAddToWishList(false)} />
						) : (
							<FavoriteBorderIcon onClick={(e) => setAddToWishList(true)} />
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
