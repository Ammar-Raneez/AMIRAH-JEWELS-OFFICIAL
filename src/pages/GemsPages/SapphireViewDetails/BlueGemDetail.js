import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './GemDetails.css';

function BlueGemDetail() {
	const [displayImage, setDisplayImage] = useState('gems/teal-sapphire.png');
	const selectedImage = (imagePath) => {
		console.log('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
		setDisplayImage('/' + imagePath.split('/').reverse()[1] + '/' + imagePath.split('/').reverse()[0]);
	};

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
						src="gems/teal-sapphire.png"
						alt=""
					/>
				</div>
				<div className="gemDetails__sectionCartMainImage">
					<img src={displayImage} alt="" />
					<div className="gemDetails__sectionCartMainImageIcon">
						<FavoriteBorderIcon />
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
			<div className="gemDetails__sectionVideo"></div>

			{/* description and details */}
			<div className="gemDetails__sectionDescription"></div>

			{/* other similar products */}
			<div className="gemDetails__sectionProduct"></div>
		</div>
	);
}

export default BlueGemDetail;
