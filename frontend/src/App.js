import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './component/Header/Header';
import Register from './component/Screens/Register/Register';
import HomeScreen from './component/Screens/HomeScreen/HomeScreen';
import ProductDetail from './component/Screens/ProductDetail/ProductDetail.jsx';
import CartScreen from './component/Screens/CartScreen/CartScreen';
import Login from './component/Screens/LogIn/LogIn';
const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path='/product/:id' exact component={ProductDetail} />
				<Route path='/cart/:id?' component={CartScreen} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
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
		</Router>
	);
};

export default App;
