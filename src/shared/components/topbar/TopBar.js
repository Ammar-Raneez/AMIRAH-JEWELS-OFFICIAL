import './TopBar.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link, Redirect } from 'react-router-dom';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import { useStateValue } from '../../../StateProvider';
import { auth } from '../../../firebase';
import React, { useState } from 'react';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import { List, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@material-ui/core';
import { Fade } from 'react-awesome-reveal';
import Typed from 'react-typed';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../../features/userSlice';

function TopBar() {
	const social = ['https://www.facebook.com/amirahgems', 'https://www.instagram.com/amirahgems/'];
	const [openDrawer, setDrawer] = useState(false);
	// const [{ wishListBasket, cartBasket, user }, dispatch] = useStateValue();
	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	const handleLogout = () => {
		if (user) {
			auth.signOut();
			dispatch(logout());
		}
	};

	const toggleDrawer = (open) => (event) => {
		if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setDrawer(open);
	};

	const drawerItems = (anchor) => (
		<div
			className="topbar__tree"
			style={{
				padding: '20px 20px 0px 0px',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				height: '100%',
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<Fade direction="left">
				<TreeView
					defaultCollapseIcon={<ExpandMoreIcon className="expandedMoreIcon" />}
					defaultExpandIcon={<ChevronRightIcon className="chevronRightIcon" />}
				>
					<a className="topbar__treeItem" href="/home">
						<TreeItem nodeId="0" label="Home" />
					</a>
					<TreeItem nodeId="1" label="Jewellery">
						<TreeItem nodeId="2" label="Shop By Category">
							<a className="topbar__treeItem" href="/ring">
								<TreeItem nodeId="3" label="-  Rings" />
							</a>
							<a className="topbar__treeItem" href="/earrings">
								<TreeItem nodeId="4" label="- Earrings" />
							</a>
							<a className="topbar__treeItem" href="/bracelets">
								<TreeItem nodeId="5" label="- Bracelets" />
							</a>
							<a className="topbar__treeItem" href="/explore+all+categories">
								<TreeItem nodeId="6" label="- Explore All Categories" />
							</a>
							<a className="topbar__treeItem" href="/gemstones+metal">
								<TreeItem nodeId="7" label="- Shop By Gemstones" />
							</a>
						</TreeItem>
						<TreeItem nodeId="8" label="Shop By Collection">
							<a className="topbar__treeItem" href="/sollitarates">
								<TreeItem nodeId="9" label="- Sollitarates" />
							</a>
							<a className="topbar__treeItem" href="/eternity">
								<TreeItem nodeId="10" label="- Eternity" />
							</a>
							<a className="topbar__treeItem" href="/joy+of+jewellery">
								<TreeItem nodeId="11" label="- Joy of Jewellery" />
							</a>
							{/* <a className="topbar__treeItem" href="/gemstones+metal">
								<TreeItem nodeId="12" label="- Explore More" />
							</a> */}
						</TreeItem>
						<TreeItem nodeId="13" label="Featured Collections">
							<a href="/">
								<TreeItem nodeId="14" label="Signature" />
							</a>
							<a href="/">
								<TreeItem nodeId="15" label="Amarelo" />
							</a>
							<a href="/">
								<TreeItem nodeId="16" label="Mi Amor" />
							</a>
						</TreeItem>
					</TreeItem>
					<a className="topbar__treeItem" href="/processes">
						<TreeItem nodeId="17" label="Process" />
					</a>
					<TreeItem nodeId="18" label="About Us">
						<a className="topbar__treeItem" href="/aboutus">
							<TreeItem nodeId="19" label="- Our Company" />
						</a>
						<a className="topbar__treeItem" href="/charity">
							<TreeItem nodeId="20" label="- Charity" />
						</a>
						<a className="topbar__treeItem" href="/careers">
							<TreeItem nodeId="21" label="- Careers" />
						</a>
						<a className="topbar__treeItem" href="/policy">
							<TreeItem nodeId="22" label="- Policy" />
						</a>
					</TreeItem>
					<a className="topbar__treeItem" href="/">
						<TreeItem nodeId="23" label="Designer Desk" />
					</a>
				</TreeView>
				<List>
					{['Instagram', 'Facebook'].map((text, index) => (
						<a className="topbar__treeItem" href={social[index]} target="_blank" rel="noreferrer">
							<ListItem key={text}>
								<ListItemIcon>{index % 2 === 0 ? <InstagramIcon /> : <FacebookIcon />}</ListItemIcon>
								<ListItemText primary={text} />
							</ListItem>
						</a>
					))}
				</List>
			</Fade>
		</div>
	);

	return (
		<div className="topbar">
			<div className="topbar__left">
				<a
					rel="noreferrer"
					style={{ marginRight: '1vw' }}
					href="https://www.facebook.com/amirahgems"
					target="_blank"
				>
					<FacebookIcon className="facebook__icon" />
				</a>
				<a
					rel="noreferrer"
					style={{ marginRight: '1vw' }}
					href="https://www.instagram.com/amirahgems/"
					target="_blank"
				>
					<InstagramIcon className="instagram__icon" />
				</a>
			</div>
			<div className="topbar__center">
				<a href="/" className="topbar__centerTypedHidden">
					<Typed strings={['AMIRAH']} typeSpeed={100} className="topbar__centerTypedText"></Typed>
					<Fade direction="up" triggerOnce delay={800}>
						<img src="word_logo_bottom.png" className="topbar__center__TopLogo" alt="" />
					</Fade>
				</a>
				<a href="/" className="topbar__centerHidden">
					<img src="word_logo.png" className="topbar__center__TopLogo" alt="" />
				</a>
			</div>
			<div className="topbar__right">
				<div className="topbar__rightAccount">
					<PersonOutlinedIcon />
					{user?.displayName ? (
						<p onClick={handleLogout} style={{ fontWeight: 'bold', fontSize: '12px', cursor: 'pointer' }}>
							Welcome, {user?.displayName.split(' ')[0]}
						</p>
					) : (
						<Link style={{ marginRight: '1vw', cursor: 'pointer' }} to="/login">
							Login
						</Link>
					)}
				</div>
				<Link style={{ display: 'flex', alignItems: 'center' }} to="/wishList">
					<FavoriteBorderIcon style={{ marginRight: '1vw' }} />
				</Link>
				<Link style={{ display: 'flex', alignItems: 'center' }} to="/cart">
					<LocalMallOutlinedIcon style={{ marginRight: '1vw' }} />
				</Link>
				<MenuIcon onClick={toggleDrawer(true)} className="topbar__rightMenuIcon" />
			</div>

			<div>
				{['left'].map((anchor) => (
					<React.Fragment key={anchor}>
						<SwipeableDrawer
							anchor={anchor}
							open={openDrawer}
							onClose={toggleDrawer(false)}
							onOpen={toggleDrawer(true)}
						>
							{drawerItems(anchor)}
						</SwipeableDrawer>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

export default TopBar;
