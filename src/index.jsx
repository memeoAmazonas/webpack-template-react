import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider} from '@mui/material/styles';
import {StyledEngineProvider} from '@mui/material/styles';
import {render} from 'react-dom';
import App from "./view/layout/App";
import theme from "./theme";
import React from "react";
import "./index.css";
import I18NProvider from "./i18n/I18NProvider";
import {Provider} from 'react-redux';
import store from './store';

render(
    <StyledEngineProvider injectFirst>
        <CssBaseline/>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <I18NProvider>
                    <App/>
                </I18NProvider>
            </Provider>
        </ThemeProvider>
    </StyledEngineProvider>,
    document.getElementById("root"))
