import './WishListPage.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import WishListItem from './WishListItem/WishListItem';

function WishListPage() {
	return (
		<div className="wishListPage">
			{/* user logged in details
			<p className="wishListPage__userDetails">logged in as Vaappa</p> */}

			{/* wishlist title */}
			<div className="wishListPage__title">
				<h1>MY WISHLIST</h1>
				{/* <div className="wishListPage__titleContinueSection">
					<ArrowBackIosIcon />
					<p>Continue shopping</p>
				</div> */}
			</div>

			{/* wishlist item */}
			<div className="wishListPage__items">
				<WishListItem
					img="/gems/orange-sapphire.png"
					title="Diamond and Black Onyx Circle Pendant"
					currency="$"
					price={890}
				/>
				<WishListItem
					img="/gems/teal-sapphire.png"
					title="Diamond and Black Onyx Circle Pendant"
					currency="$"
					price={890}
				/>
				<WishListItem
					img="/gems/purple-sapphire.png"
					title="Diamond and Black Onyx Circle Pendant"
					currency="$"
					price={890}
				/>
				<WishListItem
					img="/gems/white-sapphire.png"
					title="Diamond and Black Onyx Circle Pendant"
					currency="$"
					price={890}
				/>
				<WishListItem
					img="/gems/padparadscha-sapphire.png"
					title="Diamond and Black Onyx Circle Pendant"
					currency="$"
					price={890}
				/>
			</div>
		</div>
	);
}

export default WishListPage;
