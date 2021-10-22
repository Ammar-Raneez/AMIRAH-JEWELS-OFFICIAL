import HomePage from './pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegisterPage from './pages/AccountPages/RegisterPage/RegisterPage';
import Footer from './shared/components/Footer/Footer';
import TopBar from './shared/components/topbar/TopBar';
import Header from './shared/components/header/Header';
import AboutPageCompany from './pages/AboutPage/AboutPageCompany';
import AboutPageCharity from './pages/AboutPage/AboutPageCharity';
import GemStonesMain from './pages/GemsPages/GemStonesMain/GemStonesMain';
import ProcessPage from './pages/ProcessPage/ProcessPage';
import AboutPagePolicy from './pages/AboutPage/AboutPagePolicy';
import AboutPageCareer from './pages/AboutPage/AboutPageCareer';
import LoginPage from './pages/AccountPages/LoginPage/LoginPage';
import WishListPage from './pages/WishListPage/WishListPage';
import NecklacePendantPageMain from './pages/NecklacePendantPage/NecklacePendantPageMain';
import GiftPage from './pages/GiftPage/GiftPage';
// import { useEffect } from 'react';
// import { auth, db } from './firebase';
import CartPage from './pages/CartPage/CartPage';
// import TealGemDetail from './pages/GemsPages/SapphireViewDetails/TealGemDetail';
// import PurpleGemDetail from './pages/GemsPages/SapphireViewDetails/PurpleGemDetail';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import ComingSoon from './pages/ComingSoon/CominSoon';
import RingsPage from './pages/RingsPages/RingsPage';
// import { login, logout, selectUser } from './features/userSlice';
// import { useDispatch } from 'react-redux';
// import { addToCart } from './features/cartSlice';
// import { addToWishlist } from './features/wishlistSlice';
// import { changeRate } from './features/currencyRateSlice';
// import { changeSymbol } from './features/currencySymbolSlice';
import GemDetailPage from './pages/GemsPages/update/GemDetailPage';
import { ringData } from './pages/RingsPages/ringData';
import gemData from './gemData.json';
import RingsPageMain from './pages/RingsPages/RingsPageMain';
import BraceletsPage from './pages/BraceletsPage/BraceletsPage';
import EarringsPage from './pages/EarringsPage/EarringsPage';
import DesignerDeskPage from './pages/DesignerDeskPage/DesignerDeskPage';
import GemOrderPage from './pages/GemsPages/update/GemOrderPage';

function App() {
  // const dispatch = useDispatch();

  /* COMMENTED INORDERED TO PREVENT WASTAGE FOR NOW ----------->
	useEffect(() => {
		// auth persistance
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// user is logged in
				dispatch(login(userAuth));

				// we load all the content from the database (this runs only once)
				// user logged in only we load the details for the particular user
				db.collection('users').onSnapshot((snapshot) =>
					snapshot.docs.forEach((doc) => {
						if (doc.id === userAuth?.email) {
							// adding the cart items
							for (const cartItem of doc.data().cart) {
								// console.log('Adding items from the database into the cart');
								dispatch(
									addToCart({
										productCost: cartItem.productCost,
										productImgURL: cartItem.productImgURL,
										productName: cartItem.productName,
										productQuantity: cartItem.productQuantity,
										preferredMetal: cartItem.preferredMetal,
										preferredSize: cartItem.preferredSize,
									})
								);
							}

							// adding the wishlist items
							for (const wishlistItem of doc.data().wishlist) {
								dispatch(
									addToWishlist({
										name: wishlistItem.name,
										cost: wishlistItem.cost,
										imgURL: wishlistItem.imgURL,
										preferredMetal: wishlistItem.preferredMetal,
										preferredSize: wishlistItem.preferredSize,
									})
								);
							}

							// Dispatch to set the currency rate from the db
							dispatch(changeRate(doc.data().currencyRate));

							// Dispatch to set the currency symbol from the db
							dispatch(changeSymbol(doc.data().currencySymbol));
						}
					})
				);
			} else {
				// user is logged out
				dispatch(logout());
			}
		});
	}, []);
	*/

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
            <TopBar />
            <Header />
            <DesignerDeskPage />
            <Footer />
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
          {/* <Route path="/purple+sapphire">
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
          </Route> */}

          {/* all rings */}
          <Route path="/all-rings" exact={true}>
            <TopBar />
            <Header />
            <RingsPageMain />
            <Footer />
          </Route>

          {ringData.map((ring) => (
            <Route path={`/rings/` + ring.id}>
              <TopBar isSpecificProduct={true} />
              <Header />
              <RingsPage
                title={ring.title}
                description={ring.description}
                specification={ring.specification}
                stoneInfo={ring.stoneInfo}
                diamondInfo={ring.diamondInfo}
                images={ring.images}
                imageNames={ring.imageNames}
              />
              <Footer />
            </Route>
          ))}

          {gemData.map((gem) => (
            <Route path={`/gems/${gem.id}`}>
              <TopBar isSpecificProduct={true} />
              <Header />
              <GemDetailPage data={gem} />
              <Footer />
            </Route>
          ))}

          {/* everything else - tbc */}
          <Route path="/earrings">
            <TopBar />
            <Header />
            <EarringsPage />
            <Footer />
          </Route>
          <Route path="/gems/order">
            <TopBar />
            <Header />
            <GemOrderPage />
            <Footer />
          </Route>
          <Route path="/bracelets">
            <TopBar />
            <Header />
            <BraceletsPage />
            <Footer />
          </Route>
          <Route path="/forever+knot">
            <h2>Forever Knot component</h2>
          </Route>
          <Route path="/necklace+pendants">
            <TopBar />
            <Header />
            <NecklacePendantPageMain />
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
