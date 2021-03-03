import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	container: {
		marginTop: theme.spacing(2),
	},
	grid: {
		maxWidth: '100%',
		marginTop: theme.spacing(2),
	},
}));
