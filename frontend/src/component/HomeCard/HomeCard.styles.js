import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 255,
		textDecoration: 'none',

		[theme.breakpoints.down('xs')]: {
			margin: 'auto',
		},
	},
	media: {},
	name: {
		textTransform: 'none',
		fontWeight: 550,
		lineHeight: 1,
		marginBottom: '1rem',
		display: 'block',
	},
	review: {
		marginBottom: '1rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
}));
