import { createTheme } from '@mui/material';
import { green, red, common } from '@mui/material/colors';

const theme = createTheme({
  spacing: 10,
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 900,
      lg: 1200,
      xl: 1800,
    },
  },
  palette: {
    white: {
      main: common.white,
      second: '#fff1',
    },
    black: {
      main: common.black,
      second: '#191919',
    },
    error: {
      main: red.A400,
    },
    bgView: {
      main: '#00000080',
    },
    grey: {
      main: '#fefefe',
    },
    btn: {
      positive: {
        main: green['600'],
        text: common.white,
      },
    },
  },
  typography: {
    fontFamily: ['"Raleway"', '"Montserrat"', 'Open Sans'].join(','),
    fontSize: 20,
  },
  customShadows: {
    btn: '0 0 1rem 0 rgba(255, 255, 255, 0.4)',
  },
});

export default theme;
