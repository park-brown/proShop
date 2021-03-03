import React from 'react';
// import StarRateIcon from '@material-ui/icons/StarRate';
// import StarHalfIcon from '@material-ui/icons/StarHalf';
import { useStyles } from './Rate.styles';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
// import StarHalf from '@material-ui/icons/StarHalf';
const Rate = ({ rate, num }) => {
	const classes = useStyles();

	return (
		<React.Fragment>
			<Rating
				name='read-only'
				value={rate}
				readOnly
				classes={{ root: classes.root }}
			/>
			<Typography variant='subtitle2'> {num} reviews</Typography>
		</React.Fragment>
	);
};

export default Rate;
