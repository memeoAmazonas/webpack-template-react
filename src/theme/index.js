import {createTheme} from "@mui/material";
import {blue, red, deepPurple} from "@mui/material/colors";

const theme = createTheme({
    palette:{
        primary: {
            main: blue.A700,
        },
        error: {
            main: red.A400,
        },
    }
});

export default theme;
