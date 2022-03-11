import React from 'react';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import dark from 'Theme/dark';
import light from 'Theme/light';
import App from './App';
import I18NProvider from '../../i18n/I18NProvider';

function Root() {
  const { value } = useSelector((state) => (state.theme));
  const [theme, setTheme] = React.useState();
  React.useEffect(() => {
    console.log('value', value);
    if (value === 'light') {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  }, [value]);
  if (theme) {
    return (
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <I18NProvider>
            <App />
          </I18NProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
  return null;
}

export default Root;
