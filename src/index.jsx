import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider  } from '@mui/material/styles';
import { render } from 'react-dom';
import App from "./view/layout/App";
import theme from "./theme";
import React from "react";
render(
        <App />,
    document.getElementById("root"))
