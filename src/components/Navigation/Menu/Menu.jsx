import React from 'react';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import { MenuButton, CustomToolbar } from 'Component';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from 'Slice/header';
import {
  Drawer,
} from '../CustomComponents';
import Item from './Item';

function Menu() {
  const dispatch = useDispatch();
  const { open } = useSelector((state) => state.header);
  const onClose = () => {
    dispatch(setOpen(false));
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
        <div style={{
          display: 'flex',
          marginRight: 25,
          border: '1px solid blue',
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
        >
          <div style={{ width: 15, height: 15, backgroundColor: 'red' }} />
          <div style={{ width: 18, height: 18, backgroundColor: 'red' }} />
          <div style={{ width: 20, height: 20, backgroundColor: 'red' }} />
        </div>
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
      <Divider sx={{ backgroundColor: (theme) => theme.palette.white.main }} />
      <List component="nav">
        <Item />
      </List>
    </Drawer>

  );
}

export default Menu;
