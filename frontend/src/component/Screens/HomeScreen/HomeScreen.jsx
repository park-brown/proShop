import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HomeCard from '../../HomeCard/HomeCard';
import products from '../../../products';
import { useStyles } from './HomeScreen.styles';
import Grid from '@material-ui/core/Grid';
const HomeScreen = () => {
	const classes = useStyles();
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='md' className={classes.container}>
				<Typography variant='h3'>Latest Products</Typography>
				<Grid container spacing={6} className={classes.grid}>
					{products.map((product) => (
						<HomeCard key={product._id} product={product} />
					))}
				</Grid>
			</Container>
		</React.Fragment>
	);
};

export default HomeScreen;
