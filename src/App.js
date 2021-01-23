import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Header from './pages/HomePage/components/header/Header';
import SidebarLeft from './pages/HomePage/components/sidebar-left/SidebarLeft';
import SidebarRight from './pages/HomePage/components/sidebar-right/SidebarRight';

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/loginIn">
						<h2>About us login component</h2>
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
						<h2>About us SignUp component</h2>
					</Route>
					<Route path="/rose+sapphires">
						<h2>About us Rose sapphires component</h2>
					</Route>
					<Route path="/white+sapphires">
						<h2>About us white sapphires component</h2>
					</Route>
					<Route path="/diamonds">
						<h2>About us Diamonds component</h2>
					</Route>
					<Route path="/pearl+sapphires">
						<h2>About us Pearl sapphires component</h2>
					</Route>
					<Route path="/exploreMore+gemstones">
						<h2>About us Explore More Gems component</h2>
					</Route>
					<Route path="/pink+sapphires">
						<h2>About us pink sapphires component</h2>
					</Route>
					<Route path="/yellow+sapphires">
						<h2>About us yellow sapphires component</h2>
					</Route>
					<Route path="/blue+sapphires">
						<h2>About us blue sapphires component</h2>
					</Route>

					<Route path="/rings">
						<h2>About us rings component</h2>
					</Route>
					<Route path="/earrings">
						<h2>About us earrings component</h2>
					</Route>
					<Route path="/bracelets">
						<h2>About us bracelets component</h2>
					</Route>
					<Route path="/necklace+pendants">
						<h2>About us necklace & pendants component</h2>
					</Route>
					<Route path="/explore+all+categories">
						<h2>Explore All Categories component</h2>
					</Route>
					<Route path="/policy">
						<h2>About us policy component</h2>
					</Route>
					<Route path="/careers">
						<h2>About us careers component</h2>
					</Route>
					<Route path="/charity">
						<h2>About us charity component</h2>
					</Route>
					<Route path="/process">
						<h2>About us process component</h2>
					</Route>
					<Route path="/aboutus">
						<h2>About us page component</h2>
					</Route>
					<Route path="/signature">
						
					</Route>
					<Route path="/amarelo"></Route>
					<Route path="/mi+amor"></Route>
					<Route path="/dew+drops"></Route>
					<Route path="/ombre"></Route>
					<Route path="/numero"></Route>
					<Route path="/explore+all+collection"></Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
