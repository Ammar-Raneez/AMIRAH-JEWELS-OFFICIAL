import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './pages/AccountPages/RegisterPage/RegisterPage';
import Footer from './shared/components/Footer/Footer';
import TopBar from './shared/components/topbar/TopBar';
import Header from './shared/components/header/Header';
import AboutPageCompany from './pages/AboutPage/AboutPageCompany';
import AboutPageCharity from './pages/AboutPage/AboutPageCharity';
import ThankyouCreatingAccount from './pages/AccountPages/ThankyouPage/ThankyouCreatingAccount';
import GemStonesMain from './pages/GemsPages/GemStonesMain/GemStonesMain';
import ProcessPage from './pages/ProcessPage/ProcessPage';
import AboutPagePolicy from './pages/AboutPage/AboutPagePolicy';
import AboutPageCareer from './pages/AboutPage/AboutPageCareer';
import LoginPage from './pages/AccountPages/LoginPage/LoginPage';
import WishListPage from './pages/WishListPage/WishListPage';
import BlueGemDetail from './pages/GemsPages/SapphireViewDetails/BlueGemDetail';
import NecklacePendantPage from './pages/NecklacePendantPage/NecklacePendantPage';
import GiftPage from './pages/GiftPage/GiftPage';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth, db } from './firebase';

function App() {
	const [{ wishListBasket, cartBasket, user }, dispatch] = useStateValue();

	// This use effect deals with the user auth stuff
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				// user is logged in
				dispatch({
					type: 'SET_USER',
					user: authUser,
				});
			} else {
				// user is logged out
				dispatch({
					type: 'SET_USER',
					user: null,
				});
			}
		});

		return () => {
			// clean up code
			unsubscribe();
		};
	}, []);

	// this Use effect to load the user details(cart, wishlist and all ) from the database once he signs in or registers and account
	// useEffect(() => {
	// 	// getting snapshot of the users data from the database fireStore
	// 	if (user) {
	// 		// empty the cart basket and the wishlist basket before the user add their content
	// 		dispatch({
	// 			type: 'EMPTY_THE_CART_BASKET',
	// 			item: [],
	// 		});
	// 		dispatch({
	// 			type: 'EMPTY_THE_WISHLIST_BASKET',
	// 			item: [],
	// 		});

	// 		// user logged in only we load the details for the particular user
	// 		db.collection('users').onSnapshot((snapshot) =>
	// 			snapshot.docs.forEach((doc) => {
	// 				if (doc.id === user?.email) {
	// 					// adding the cart items
	// 					for (const cartItem of doc.data().cart) {
	// 						dispatch({
	// 							type: 'ADD_TO_BASKET',
	// 							item: {
	// 								productCost: cartItem.productCost,
	// 								productImgURL: cartItem.productImgURL,
	// 								productName: cartItem.productName,
	// 								productQuantity: cartItem.productQuantity,
	// 							},
	// 						});
	// 					}

	// 					// adding the wishlist items
	// 					for (const wishlistItem of doc.data().wishlist) {
	// 						dispatch({
	// 							type: 'ADD_TO_WISHLIST',
	// 							item: {
	// 								cost: wishlistItem.cost,
	// 								imgURL: wishlistItem.imgURL,
	// 								name: wishlistItem.name,
	// 							},
	// 						});
	// 					}
	// 				}
	// 			})
	// 		);
	// 	}
	// }, []);

	// console.log("USER >>>>>>>>>>>", user);
	// console.log(user.displayName);
	// console.log(user.uid);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/login">
						<TopBar />
						<Header />
						<LoginPage />
						<Footer />
					</Route>
					<Route path="/register">
						<TopBar />
						<Header />
						<RegisterPage />
						<Footer />
					</Route>
					<Route path="/thanking">
						<TopBar />
						<Header />
						<ThankyouCreatingAccount />
						<Footer />
					</Route>

					<Route path="/highTea">
						<h2>highTea component</h2>
					</Route>

					<Route path="/gemstones+metal">
						<TopBar />
						<Header />
						<GemStonesMain />
						<Footer />
					</Route>
					<Route path="/rose+gold">
						<h2> Rose gold component</h2>
					</Route>
					<Route path="/white+gold">
						<h2> white gold component</h2>
					</Route>
					<Route path="/diamonds">
						<h2> Diamonds component</h2>
					</Route>
					<Route path="/pearl+sapphires">
						<h2>Pearl sapphires component</h2>
					</Route>
					<Route path="/teal+sapphires">
						<h2>teal sapphires component</h2>
					</Route>
					<Route path="/pink+sapphires">
						<h2> pink sapphires component</h2>
					</Route>
					<Route path="/yellow+gold">
						<h2> yellow gold component</h2>
					</Route>
					<Route path="/blue+sapphires">
						<TopBar />
						<Header />
						<BlueGemDetail />
						<Footer />
					</Route>

					<Route path="/rings">
						<h2>rings component</h2>
					</Route>
					<Route path="/earrings">
						<h2>earrings component</h2>
					</Route>
					<Route path="/bracelets">
						<h2>bracelets component</h2>
					</Route>
					<Route path="/necklace+pendants">
						<TopBar />
						<Header />
						<NecklacePendantPage />
						<Footer />
					</Route>
					<Route path="/explore+all+categories">
						<TopBar />
						<Header />
						<GiftPage />
						<Footer />
					</Route>

					<Route path="/aboutus">
						<TopBar />
						<Header />
						<AboutPageCompany />
						<Footer />
					</Route>
					<Route path="/policy">
						<TopBar />
						<Header />
						<AboutPagePolicy />
						<Footer />
					</Route>
					<Route path="/careers">
						<TopBar />
						<Header />
						<AboutPageCareer />
						<Footer />
					</Route>
					<Route path="/charity">
						<TopBar />
						<Header />
						<AboutPageCharity />
						<Footer />
					</Route>

					<Route path="/process">
						<TopBar />
						<Header />
						<ProcessPage />
						<Footer />
					</Route>

					<Route path="/wishList">
						<TopBar />
						<Header />
						<WishListPage />
						<Footer />
					</Route>

					<Route path="/signature"></Route>
					<Route path="/amarelo"></Route>
					<Route path="/mi+amor"></Route>
					<Route path="/dew+drops"></Route>
					<Route path="/ombre"></Route>
					<Route path="/numero"></Route>
					<Route path="/explore+all+collection"></Route>

					<Route path="/">
						<TopBar />
						<Header />
						<HomePage />
						<Footer />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
