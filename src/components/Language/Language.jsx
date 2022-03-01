import React from 'react';
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import {useDispatch, useSelector} from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import {setLanguage} from "Slice/language";

const Language = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const { value: language } = useSelector((state)=> state.language)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    console.log("language", language)
    const send = (id) =>{
        dispatch(setLanguage(id))
        handleClose();
    }
    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {language}
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={()=>send('es')}>ES</MenuItem>
                <MenuItem onClick={()=>send('en')}>EN</MenuItem>
            </Menu>
        </div>
    );
};

export default Language;
