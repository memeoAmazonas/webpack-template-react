import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MenuIcon from '@mui/icons-material/Menu';

import {
  CustomToolbar, Language, MenuButton, CustomTheme,
} from 'Component';
import { Text } from 'Component/Navigation/CustomComponents';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from 'Slice/header';
import { AppBar } from '../CustomComponents';

function Header({ logged = true }) {
  const dispatch = useDispatch();
  const { value, open } = useSelector((state) => state.header);
  const onOpen = () => {
    dispatch(setOpen(!open));
  };
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
            onClick={onOpen}
            sx={{
              mr: (theme) => theme.spacing(1.2),
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </MenuButton>
          )}
          <Text sx={{ span: { fontSize: 16 } }}>
            <FormattedMessage id={value} />
          </Text>
          <CustomTheme />
          <Language />
        </CustomToolbar>
      </AppBar>

    </>
  );
}

export default Header;
