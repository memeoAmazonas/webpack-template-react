import { Send, Home, VerifiedUser } from '@mui/icons-material';
import React from 'react';

const itemsConfig = [
  {
    icon: <Home sx={{ color: (theme) => theme.palette.white.main }} />,
    label: 'home',
    to: '/',
    child: [
      {
        icon: <Send sx={{ color: (theme) => theme.palette.white.main }} />,
        label: 'es.large',
        to: '/',
      },
      {
        icon: <Send sx={{ color: (theme) => theme.palette.white.main }} />,
        label: 'es.large',
        to: '/',
      },
      {
        icon: <Send sx={{ color: (theme) => theme.palette.white.main }} />,
        label: 'es.large',
        to: '/',
      },
    ],
  },
  {
    icon: <VerifiedUser sx={{ color: (theme) => theme.palette.white.main }} />,
    label: 'users',
    to: '/',
    child: [
      {
        icon: <Send sx={{ color: (theme) => theme.palette.white.main }} />,
        label: 'en.large',
        to: '/',
      },
    ],
  },
];
export default itemsConfig;
