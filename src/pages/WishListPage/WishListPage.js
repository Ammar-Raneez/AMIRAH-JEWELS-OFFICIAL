import './WishListPage.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import WishListItem from './WishListItem/WishListItem';

function WishListPage() {
	return (
		<div className="wishListPage">
			{/* user logged in details */}
			<p className="wishListPage__userDetails">logged in as nazhim kalam</p>

			{/* wishlist title */}
			<div className="wishListPage__title">
				<h1>MY WISHLIST</h1>
				<div className="wishListPage__titleContinueSection">
					<ArrowBackIosIcon />
					<p>Continue shopping</p>
				</div>
			</div>

			{/* top border */}
			<hr />
			{/* wishlist item */}
			<WishListItem />
		</div>
	);
}

export default WishListPage;
