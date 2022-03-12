import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

import {
  CustomToolbar, Language, MenuButton, CustomTheme,
} from 'Component';
import { AppBar } from '../CustomComponents';

function Header({ open, toggleDrawer, logged = true }) {
  return (
    <>
      <CssBaseline />
      <AppBar sx={{ minHeight: 20 }} position="absolute" open={open} color="grey">
        <CustomToolbar
          open={open}
          sx={{
            pr: '26px',
          }}
        >
          {logged && (
          <MenuButton
            edge="start"
            color="white"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              mr: (theme) => theme.spacing(1.2),
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </MenuButton>
          )}
          <Typography
            component="h1"
            variant="h7"
            noWrap
            sx={{ flexGrow: 1, color: (theme) => theme.palette.white.main }}
          >
            Dashboard
          </Typography>
          <CustomTheme />
          <Language />
        </CustomToolbar>
      </AppBar>

    </>
  );
}

export default Header;
