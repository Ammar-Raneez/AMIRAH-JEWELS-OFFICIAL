import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Header from './pages/HomePage/components/header/Header';
import SidebarLeft from './pages/HomePage/components/sidebar-left/SidebarLeft';
import SidebarRight from './pages/HomePage/components/sidebar-right/SidebarRight';
import Footer from './pages/HomePage/components/Footer/Footer';
import AboutPageCompany from './pages/AboutPage/AboutPageCompany';
import AboutPageCharity from './pages/AboutPage/AboutPageCharity';
import ThankyouCreatingAccount from './pages/RegisterPage/ThankyouCreatingAccount';
import GemStonesMain from './pages/GemsPages/GemStonesMain/GemStonesMain';

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/loginIn">
						<h2> login component</h2>
					</Route>
					<Route path="/register">
						<div className="app__sidebar">
							<SidebarLeft />
							<div className="app__body">
								<Header />
								<RegisterPage />
							</div>
						</div>
					</Route>
					<Route path="/highTea">
						<h2>highTea component</h2>
					</Route>
					<Route path="/SignUp">
						<h2> SignUp component</h2>
					</Route>
					<Route path="/rose+sapphires">
						<h2> Rose sapphires component</h2>
					</Route>
					<Route path="/white+sapphires">
						<h2> white sapphires component</h2>
					</Route>
					<Route path="/diamonds">
						<h2> Diamonds component</h2>
					</Route>
					<Route path="/pearl+sapphires">
						<h2>APearl sapphires component</h2>
					</Route>
					<Route path="/gemstones+metal">
					<div className="app__sidebar">
							<SidebarLeft />
							<div className="app__body">
								<Header />
								<GemStonesMain />
								{/*<Footer />*/}
							</div>
						</div>
					</Route>
					<Route path="/pink+sapphires">
						<h2> pink sapphires component</h2>
					</Route>
					<Route path="/yellow+sapphires">
						<h2> yellow sapphires component</h2>
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
						<div className="app__sidebar">
							<SidebarLeft />
							<div className="app__body">
								<Header />
								<AboutPageCharity />
								<Footer />
							</div>
						</div>
					</Route>
					<Route path="/process">
						<h2>process component</h2>
					</Route>
					<Route path="/aboutus">
						<div className="app__sidebar">
							<SidebarLeft />
							<div className="app__body">
								<Header />
								<AboutPageCompany />
								<Footer />
							</div>
						</div>
					</Route>
					<Route path="/signature"></Route>
					<Route path="/amarelo"></Route>
					<Route path="/mi+amor"></Route>
					<Route path="/dew+drops"></Route>
					<Route path="/ombre"></Route>
					<Route path="/numero"></Route>
					<Route path="/explore+all+collection"></Route>
					<Route path="/thanking">
						<div className="app__sidebar">
							<SidebarLeft />
							<div className="app__body">
								<Header />
								<ThankyouCreatingAccount />
								<Footer />
							</div>
						</div>
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
