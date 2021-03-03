import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import HomeScreen from './component/Screens/HomeScreen/HomeScreen';
const App = () => {
	return (
		<div>
			<CssBaseline />
			<Header />
			<HomeScreen />
			<Footer />
		</div>
	);
};

export default App;
