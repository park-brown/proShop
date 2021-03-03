import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
	overrides: {
		MuiRating: {
			root: {
				fontSize: '1rem',
			},
		},
	},
});
theme = responsiveFontSizes(theme);

export default theme;
