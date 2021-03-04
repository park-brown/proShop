import React from 'react';
import { useStyles } from './Product.styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import products from '../../../products';
import Rating from '@material-ui/lab/Rating';
const ProductDetail = ({ match: { params } }) => {
	const product = products.find((item) => item._id === params.id);
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container spacing={5}>
					<Grid item>
						<img className={classes.img} alt='complex' src={product.image} />
					</Grid>
					<Grid item xs={12} sm container>
						<Grid item xs container direction='column' spacing={4}>
							<Grid item xs>
								<Typography gutterBottom variant='subtitle1'>
									{product.name}
								</Typography>
								<Typography variant='body2' gutterBottom>
									<div className={classes.review}>
										<Rating value={product.rating} readOnly />
										<Typography className={classes.reviewNum}>
											{product.numReviews} reviews
										</Typography>
									</div>
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant='body2' style={{ cursor: 'pointer' }}>
									{product.description}
								</Typography>
							</Grid>
						</Grid>
						<Grid item>
							<Typography variant='subtitle1'>
								Price: {product.price}
							</Typography>
							<Typography variant='subtitle1'>
								Status: {product.countInStock > 0 ? 'in stock' : 'out of stock'}
							</Typography>
							<Button
								classes={{ root: classes.button }}
								disabled={product.countInStock === 0}>
								Add to Cart
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default ProductDetail;
