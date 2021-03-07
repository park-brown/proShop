import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	header: {
		marginTop: '2rem',
		marginBottom: '2rem',
	},
	grid_container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		'& > *': {
			// marginBottom: 'auto',
		},
	},
	name: {
		paddingLeft: theme.spacing(1),
		paddingRight: theme.spacing(1),
		[theme.breakpoints.down('xs')]: {
			fontSize: '0.125rem',
		},
		[theme.breakpoints.up('xs')]: {
			display: 'none',
		},
	},
	image_Container: {
		width: 150,
		height: 150,
		[theme.breakpoints.down('xs')]: {
			width: 100,
			height: 100,
		},
	},
	image: {
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	quantity: {
		display: 'flex',
	},
	inputInput: {
		border: '1px solid black',
		textAlign: 'center',
		width: '100%',
		[theme.breakpoints.down('xs')]: {
			width: '3ch',
		},
	},
}));
