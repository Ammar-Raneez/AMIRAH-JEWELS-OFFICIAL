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
import NecklacePendantPage from './pages/NecklacePendantPage/NecklacePendantPage';
import GiftPage from './pages/GiftPage/GiftPage';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import CartPage from './pages/CartPage/CartPage';
import TealGemDetail from './pages/GemsPages/SapphireViewDetails/TealGemDetail';
import PurpleGemDetail from './pages/GemsPages/SapphireViewDetails/PurpleGemDetail';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import ComingSoon from './pages/ComingSoon/CominSoon';
import RingsPage from './pages/RingsPages/RingsPage';

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

					<Route path="/designer+desk">
						<ComingSoon />
					</Route>
					<Route path="/high+tea">
						<ComingSoon />
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
					<Route path="/pearl+sapphire">
						<h2>Pearl sapphires component</h2>
					</Route>
					<Route path="/pink+sapphire">
						<h2> pink sapphires component</h2>
					</Route>
					<Route path="/yellow+gold">
						<h2> yellow gold component</h2>
					</Route>
					<Route path="/purple+sapphire">
						<TopBar />
						<Header />
						<PurpleGemDetail />
						<Footer />
					</Route>
					<Route path="/teal+sapphire">
						<TopBar />
						<Header />
						<TealGemDetail />
						<Footer />
					</Route>

					<Route path="/rings">
						<TopBar />
						<Header />
						<RingsPage />
						<Footer />
					</Route>
					<Route path="/earrings">
					<h2>earrings component</h2>
					</Route>
					<Route path="/bracelets">
						<h2>bracelets component</h2>
					</Route>
					<Route path="/forever+knot">
						<h2>Forever Knot component</h2>
					</Route>
					<Route path="/necklace+pendants">
						<TopBar />
						<Header />
						<NecklacePendantPage />
						<Footer />
					</Route>

					<Route path="/checkout">
						<TopBar />
						<Header />
						<CheckOutPage />
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

					<Route path="/processes">
						<TopBar />
						<Header />
						<ProcessPage />
						<Footer />
					</Route>

					<Route path="/contactUs">
						<TopBar />
						<Header />
						<ContactUsPage />
						<Footer />
					</Route>

					<Route path="/wishList">
						<TopBar />
						<Header />
						<WishListPage />
						<Footer />
					</Route>

					<Route path="/cart">
						<TopBar />
						<Header />
						<CartPage />
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
