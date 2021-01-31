import './WishListItem.css';
import CloseIcon from '@material-ui/icons/Close';
import LocalMallIcon from '@material-ui/icons/LocalMall';

function WishListItem() {
	return (
		<div className="wishListItem">
			<div className="wishListItem__main">
				<div className="wishListItem__sectionOne">
					<CloseIcon />
				</div>
				<div className="wishListItem__sectionTwo">
					<div className="wishListItem__img">
						<img src="/wishListPage/ring.png" alt="" />
					</div>

					<div className="wishListItem__details">
						<h2>Diamond and Black Onyx Circle Pendant</h2>
						<div className="wishListItem__detailsCart">
							<LocalMallIcon />
							<p>Add to cart</p>
						</div>
						<div className="wishListItem__detailsQuantity">
							<p>Quantity</p>
							<p>1+</p>
						</div>
						<div className="wishListItem__price">
							<p>Price: $890.00</p>
						</div>
					</div>
				</div>
			</div>
			<hr />
		</div>
	);
}

export default WishListItem;
