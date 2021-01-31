import './WishListItem.css';
import CloseIcon from '@material-ui/icons/Close';

function WishListItem({img, title, currency, price}) {
	return (
		<div className="wishListItem">
			<div className="wishListItem__main">
				<div className="wishListItem__sectionOne">
					<CloseIcon />
				</div>
				<div className="wishListItem__sectionTwo">
					<div className="wishListItem__img">
						<img src={img} alt="" />
					</div>

					<div className="wishListItem__details">
						<div className="wishListItem__price">
							<p>{currency}{(Math.round(price * 100) / 100).toFixed(2)}</p>
							<p>Add to Cart</p>
						</div>
						<p>{title}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WishListItem;
