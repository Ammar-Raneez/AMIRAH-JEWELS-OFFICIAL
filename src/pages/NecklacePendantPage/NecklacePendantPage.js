import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NecklacePendantPage.css';

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
		</div>
	);
}

export default NecklacePendantPage;
