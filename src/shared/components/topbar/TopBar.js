import './TopBar.css';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { IconButton } from '@material-ui/core';
import { useStateValue } from '../../../StateProvider';
import { auth } from '../../../firebase'

function TopBar() {
	const [{ wishListBasket, cartBasket, user }, dispatch] = useStateValue();

	const logout = () => {
		if (user) {
			auth.signOut();
		}
	}

	// const displayContent = () => {
	// 	console.log(wishListBasket);
	// 	console.log(cartBasket);
	// 	console.log(user);
	// };
	// displayContent()
	return (
		<div className="topbar">
			<div className="topbar__left">
				{/* <IconButton onClick={displayContent}>
					<SearchIcon />
				</IconButton> */}
				<a href="https://www.facebook.com/amirahgems" target="_blank"><FacebookIcon /></a>
				<a href="https://www.instagram.com/amirahgems/" target="_blank"><InstagramIcon /></a>
			</div>
			<div className="topbar__center">
				<Link to="/">
					<img src="logo.png" className="topbar__center__TopLogo" alt="" />
				</Link>
			</div>
			<div className="topbar__right">
				<div className="topbar__rightAccount">
					<PersonOutlinedIcon />
					{
						user?.displayName ? (
							<a onClick={logout} style={{ fontWeight: 'bold', fontSize: '13px' }} >Welcome to Your Account, {user?.displayName.split(" ")[0]}</a>
						) : (
							<a href="/login">Login</a>
						)
					}
				</div>
				<Link to="/wishList">
					<FavoriteBorderIcon />
				</Link>
				<Link to="/cart">
					<LocalMallOutlinedIcon />
				</Link>
			</div>
		</div>
	);
}

export default TopBar;
