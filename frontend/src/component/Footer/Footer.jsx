import React from 'react';

import Typography from '@material-ui/core/Typography';
import { useStyles } from './Footer.styles';
const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Typography className={classes.copy}>Copyright &copy; Proshop</Typography>
		</footer>
	);
};

export default Footer;
