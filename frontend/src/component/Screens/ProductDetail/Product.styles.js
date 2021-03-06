import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginTop: '2rem',
		marginBottom: '2rem',
	},
	paper: {
		margin: 'auto',
		maxWidth: 500,
	},
	container: {
		'& > *': {
			marginLeft: theme.spacing(2),
		},
	},
	lastItem: {
		marginRight: theme.spacing(1),
		marginLeft: theme.spacing(1),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	img: {
		marginRight: theme.spacing(0.5),
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
	button: {
		color: theme.palette.common.white,
		backgroundColor: '#0063cc',
		'&:hover': {
			color: theme.palette.common.white,
			backgroundColor: theme.palette.success.main,
			fontStyle: 'italic',
		},
		'&.Mui-disabled': {
			backgroundColor: theme.palette.grey[600],
		},
	},
	review: {
		display: 'flex',
		alignItems: 'center',
		marginTop: theme.spacing(3),
	},
	reviewNum: {
		marginLeft: theme.spacing(2),
	},
	formControl: {
		minWidth: 120,
		marginBottom: theme.spacing(4),
	},
	menuPaper: {
		maxHeight: 50,
	},
}));
