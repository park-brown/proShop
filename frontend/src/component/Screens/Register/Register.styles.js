import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: '3rem',
		height: '80vh',
		backgroundColor: ` ${theme.palette.background.paper}`,
	},
	paper: {
		width: '100%',
	},
	gridContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		height: '100%',
	},
	firstGrid: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		backgroundColor: `${theme.palette.secondary.main}`,
		margin: theme.spacing(1),
	},
	email: {
		width: 266,
	},
	signInButton: {
		width: 266,
	},
	Copyright: {
		marginBottom: theme.spacing(1),
	},
	signUpLink: {
		textDecoration: 'none',
		color: `${theme.palette.primary.main}`,
		'&:hover': {
			textDecoration: 'underline',
		},
	},
}));
