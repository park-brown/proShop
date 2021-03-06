import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import HomeScreen from './component/Screens/HomeScreen/HomeScreen';
import ProductDetail from './component/Screens/ProductDetail/ProductDetail.jsx';
import CartScreen from './component/Screens/CartScreen/CartScreen';
const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/product/:id' exact component={ProductDetail} />
				<Route path='/cart/:id?' component={CartScreen} />
				<Route
					path='/'
					exact
					render={(routeProps) => (
						<CssBaseline>
							<HomeScreen {...routeProps} />
						</CssBaseline>
					)}
				/>
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
