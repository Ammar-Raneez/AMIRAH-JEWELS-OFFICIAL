import './TopBar.css';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function TopBar() {
	return (
		<div className="topbar">
			<div className="topbar__left">
				<SearchIcon />
				<FacebookIcon />
				<InstagramIcon />
			</div>
			<div className="topbar__center">
				<Link to="/">
					<img src="logo.png" className="topbar__center__TopLogo" alt="" />
				</Link>
			</div>
			<div className="topbar__right">
				<div className="topbar__rightAccount">
					<PersonOutlinedIcon />
					My Account
				</div>
				<FavoriteBorderIcon />
				<LocalMallOutlinedIcon />
			</div>

		</div>
	);
}

export default TopBar;
