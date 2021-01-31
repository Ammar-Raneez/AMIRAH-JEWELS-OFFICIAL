import { Link } from 'react-router-dom';
import Product from '../NecklacePendantPage/Product/Product';
import './GiftPage.css';

function GiftPage() {
	return (
		<div className="giftPage">
			<div className="giftPage__details">
				<div className="giftPage__detailsSecond">
					<img src="https://i.frg.im/69VcjDzz/32-17701c22_600.jpg?v=1516374670.427" alt="" />
				</div>
				<div className="giftPage__detailsFirst">
					<h1>THE PERFECT GIFT</h1>
					<p>
						There is no perfect time to celebrate your loved ones with your finest jewelry build on a legacy of over
						many years of craftsmanship. Our products range from necklaces & pendants, bracelets, rings and more.
					</p>
					<p>
						We are the leading suppliers of the highest quality rough and cut-and-polished gem stones for both locally
						and internationally
					</p>
					<div className="giftPage__detailsFirstButtons">
						<Link to="/blue+sapphires">
							<button>VIEW PRODUCTS</button>
						</Link>
						<button>CALL US</button>
					</div>
				</div>
			</div>

			<div className="giftPage__otherGems">
				<div className="giftPage__otherGemsRow">
					<Product img="homepage category/necklace.png" name="Necklaces & Pendants" viewMoreUrl="/" />
					<Product img="homepage category/bracelets.png" name="Bracelets" viewMoreUrl="/" />
				</div>
				<div className="giftPage__otherGemsRow">
					<Product img="homepage category/earrings.png" name="Earrings" viewMoreUrl="/" />
					<Product img="homepage category/engagement rings.png" name="Engagement Rings" viewMoreUrl="/" />
				</div>
				<div className="giftPage__otherGemsRow">
					<Product img="homepage category/rings.png" name="Rings" viewMoreUrl="/" />
				</div>
			</div>
		</div>
	);
}

export default GiftPage;
