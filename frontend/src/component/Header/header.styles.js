import { makeStyles, fade } from '@material-ui/core';
export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	title: {
		flexGrow: 0,
		fontWeight: 500,
		color: theme.palette.common.white,
		[theme.breakpoints.down('xs')]: {},
	},
	button: {
		fontWeight: 500,
		color: theme.palette.common.white,
		[theme.breakpoints.down('xs')]: {
			color: theme.palette.common.black,
		},
	},
	moreIcon: {
		fontWeight: 500,
		color: theme.palette.common.white,
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
		[theme.breakpoints.down('xs')]: {
			width: '50%',
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch',
		},
	},
	sectionDesktop: {
		display: 'flex',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	sectionMobile: {
		display: 'none',
		[theme.breakpoints.down('xs')]: {
			display: 'flex',
		},
	},
}));
