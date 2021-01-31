import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './pages/AccountPages/RegisterPage';
import Footer from './shared/components/Footer/Footer';
import TopBar from './shared/components/topbar/TopBar';
import Header from './shared/components/header/Header';
import AboutPageCompany from './pages/AboutPage/AboutPageCompany';
import AboutPageCharity from './pages/AboutPage/AboutPageCharity';
import ThankyouCreatingAccount from './pages/AccountPages/ThankyouCreatingAccount';
import GemStonesMain from './pages/GemsPages/GemStonesMain/GemStonesMain';
import ProcessPage from './pages/ProcessPage/ProcessPage';
import WishListPage from './pages/WishListPage/WishListPage';

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/loginIn">
						<h2> login component</h2>
					</Route>
					<Route path="/register">
						<TopBar />
						<Header />
						<RegisterPage />
						<Footer />
					</Route>
					<Route path="/highTea">
						<h2>highTea component</h2>
					</Route>
					<Route path="/SignUp">
						<h2> SignUp component</h2>
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
					<Route path="/gemstones+metal">
						<TopBar />
						<Header />
						<GemStonesMain />
						<Footer />
					</Route>
					<Route path="/pink+sapphires">
						<h2> pink sapphires component</h2>
					</Route>
					<Route path="/yellow+gold">
						<h2> yellow gold component</h2>
					</Route>
					<Route path="/blue+sapphires">
						<h2> blue sapphires component</h2>
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
						<h2> necklace & pendants component</h2>
					</Route>
					<Route path="/explore+all+categories">
						<h2>Explore All Categories component</h2>
					</Route>
					<Route path="/policy">
						<h2>policy component</h2>
					</Route>
					<Route path="/careers">
						<h2>careers component</h2>
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
					<Route path="/aboutus">
						<TopBar />
						<Header />
						<AboutPageCompany />
						<Footer />
					</Route>
					<Route path="/wishList">
						<WishListPage />
					</Route>
					<Route path="/signature"></Route>
					<Route path="/amarelo"></Route>
					<Route path="/mi+amor"></Route>
					<Route path="/dew+drops"></Route>
					<Route path="/ombre"></Route>
					<Route path="/numero"></Route>
					<Route path="/explore+all+collection"></Route>
					<Route path="/thanking">
						<TopBar />
						<Header />
						<ThankyouCreatingAccount />
						<Footer />
					</Route>
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
