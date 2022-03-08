import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
  spacing: 10,
  palette: {
    white: {
      main: '#000',
      second: '#fff1',
    },
    black: {
      main: '#fff',
      second: '#fff',
    },
    error: {
      main: red.A400,
    },
    grey: {
      main: '#fefefe',
    },
  },
  typography: {
    fontFamily: ['"Raleway"', '"Montserrat"', 'Open Sans'].join(','),
  },
});

export default theme;
