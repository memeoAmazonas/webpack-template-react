import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, MenuButton, ToolbarHeader } from 'Component/Navigation/CustomComponents';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

function Header({ open, toggleDrawer }) {
  return (
    <>
      <CssBaseline />
      <AppBar sx={{ minHeight: 20 }} position="absolute" open={open} color="grey">
        <ToolbarHeader
          open={open}
          sx={{
            pr: '26px', // keep right padding when drawer closed
          }}
        >
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
          <Typography
            component="h1"
            variant="h7"
            noWrap
            sx={{ flexGrow: 1, color: (theme) => theme.palette.white.main }}
          >
            Dashboard
          </Typography>
        </ToolbarHeader>
      </AppBar>

    </>
  );
}

export default Header;
