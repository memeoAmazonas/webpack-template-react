import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';
import dark from 'Theme/dark';
import light from 'Theme/light';
import I18NProvider from 'Src/i18n/I18NProvider';
import Amplify from 'aws-amplify';

import config from 'Src/config/aws-exports';
import Routes from './Routes';

function Root() {
  const typeTheme = {
    dark,
    light,
  };
  Amplify.configure(config);
  const { value } = useSelector((state) => (state.theme));
  const [theme, setTheme] = React.useState();
  React.useEffect(() => {
    setTheme(typeTheme[value]);
  });
  if (theme) {
    return (
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <I18NProvider>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </I18NProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    );
  }
  return null;
}

export default Root;
