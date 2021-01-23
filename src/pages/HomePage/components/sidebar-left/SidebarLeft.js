import './SidebarLeft.css';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function SidebarLeft() {
	return (
		<div className="sidebarLeft">
			<div className="sidebarLeft__container">
				<div className="sidebarLeft__innerContainer">
					<div className="sidebarLeftTop">
						<Link to="/">
							<img src="logo.png" className="sidebarLeftTopLogo" alt="" />
						</Link>
						<SearchIcon />
					</div>
					<div className="sidebarLeftBottom">
						<FacebookIcon />
						<InstagramIcon />
						<PersonIcon />
						<LocalMallIcon />
						<FavoriteBorderIcon />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SidebarLeft;
