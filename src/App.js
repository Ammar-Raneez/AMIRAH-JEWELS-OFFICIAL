import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="app">
				<Switch>
					<Route path="/loginIn">
						<h2>About us login component</h2>
					</Route>
					<Route path="/SignUp">
						<h2>About us SignUp component</h2>
					</Route>
					<Route path="/padparadscha+sapphires">
						<h2>About us padparadscha sapphires component</h2>
					</Route>
					<Route path="/white+sapphires">
						<h2>About us white sapphires component</h2>
					</Route>
					<Route path="/teal+sapphires">
						<h2>About us teal sapphires component</h2>
					</Route>
					<Route path="/purple+sapphires">
						<h2>About us purple sapphires component</h2>
					</Route>
					<Route path="/orange+sapphires">
						<h2>About us orange sapphires component</h2>
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
					<Route path="/engagement+ring">
						<h2>About us engagement rings component</h2>
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
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
