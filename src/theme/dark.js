import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
  spacing: 10,
  palette: {
    white: {
      main: '#fff',
      second: '#fff1',
    },
    black: {
      main: '#000',
      second: '#191919',
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
