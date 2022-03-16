import {
  Home, VerifiedUser, Logout,
} from '@mui/icons-material';
import React from 'react';

function MenuIcon(Icon) {
  return <Icon sx={{ color: (theme) => theme.palette.white.main }} />;
}
const itemsConfig = [
  {
    icon: MenuIcon(Home),
    label: 'home',
    to: '/home',
    child: [
      {
        icon: MenuIcon(Home),
        label: 'home',
        to: '/home',
      },
    ],
  },
  {
    icon: MenuIcon(VerifiedUser),
    label: 'users',
    to: '/query',
  },
  {
    icon: MenuIcon(Logout),
    label: 'logout',
    to: '/',
  },
];
export default itemsConfig;
