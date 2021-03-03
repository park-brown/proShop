import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from './HomeCard.styles';
import Typography from '@material-ui/core/Typography';
import Rate from '../Rate/Rate';
const HomeCard = ({ product }) => {
	const classes = useStyles();

	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						component='img'
						alt='product'
						image={product.image}
						title='product'
						className={classes.media}
					/>
					<CardContent>
						<Typography variant='button' gutterBottom className={classes.name}>
							{product.name}
						</Typography>
						<Typography
							className={classes.review}
							component='div'
							variant='subtitle2'>
							{/* {product.rating} from {product.numReviews} reviews */}
							<Rate rate={product.rating} num={product.numReviews} />
						</Typography>
						<Typography gutterBottom>${product.price}</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
};

export default HomeCard;
