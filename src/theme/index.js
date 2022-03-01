import {createTheme} from "@mui/material";
import {blue, red, purple} from "@mui/material/colors";

const theme = createTheme({
    palette:{
        primary: {
            main: blue.A700,
        },
        error: {
            main: red.A400,
        },
        fino: {
            main: purple.A700,
        }
    }
});

export default theme;
