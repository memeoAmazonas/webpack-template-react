import React from 'react';
import { Divider as D } from '@mui/material';

function Divider() {
  return (
    <D sx={{ bgcolor: (theme) => theme.palette.white.main, mb: 2, mt: 1 }} />
  );
}

export default Divider;
