import './SidebarRight.css';
// import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function SidebarRight() {
	return (
		<div className="sidebarRight">
			<div className="sidebarRight__container">
				<div className="sidebarRight__innerContainer">
					{/* <MenuIcon /> */}
					<PersonIcon />
					<LocalMallIcon />
					<FavoriteBorderIcon />
				</div>
			</div>
		</div>
	);
}

export default SidebarRight;
