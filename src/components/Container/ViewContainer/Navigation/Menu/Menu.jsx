import React from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { CustomTheme, MenuButton, CustomToolbar } from 'Component';
import { useDispatch } from 'react-redux';
import { setActual } from 'Slice/menu';
import {
  Drawer,
} from '../CustomComponents';
import Item from './Item';

function Menu({ open, toggleDrawer, setOpen }) {
  const dispatch = useDispatch();
  const onClose = () => {
    toggleDrawer();
    dispatch(setActual(''));
  };
  return (
    <Drawer variant="permanent" open={open}>
      <CustomToolbar
        open={open}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <MenuButton
          edge="start"
          color="white"
          aria-label="open drawer"
          onClick={onClose}
          sx={{
            ...(!open && { display: 'none' }),
          }}
        >
          <ChevronLeftIcon />
        </MenuButton>
      </CustomToolbar>
      <Divider />
      <List component="nav">
        <Item open={open} setOpen={setOpen} />
        <CustomTheme />
      </List>
    </Drawer>

  );
}

export default Menu;
