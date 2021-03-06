import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import { useStyles } from './Product.styles';
const ProductCard = ({ product }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container spacing={6}>
					<Grid item>
						<img className={classes.img} alt='complex' src={product.image} />
					</Grid>
					<Grid item xs={12} sm container>
						<Grid
							item
							xs
							container
							direction='column'
							spacing={4}
							className={classes.container}>
							<Grid item xs>
								<Typography gutterBottom variant='subtitle1'>
									{product.name}
								</Typography>
								<Typography
									className={classes.review}
									variant='body2'
									gutterBottom>
									<Rating
										value={product.rating ? product.rating : 0}
										name='rating'
									/>
									{product.numReviews} reviews
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant='body2' style={{ cursor: 'pointer' }}>
									{product.description}
								</Typography>
							</Grid>
						</Grid>
						<Grid item className={classes.lastItem}>
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

export default ProductCard;
