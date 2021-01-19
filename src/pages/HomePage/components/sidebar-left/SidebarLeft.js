import './SidebarLeft.css';
import SearchIcon from '@material-ui/icons/Search';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function SidebarLeft() {
	return (
		<div className="sidebarLeft">
			<div className="sidebarLeft__container">
				<div className="sidebarLeft__innerContainer">
					<div className="sidebarLeftTop">
						<img src="logo.png" alt="" />
						<SearchIcon />
					</div>
					<div className="sidebarLeftBottom">
						<FacebookIcon />
						<InstagramIcon />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SidebarLeft;
