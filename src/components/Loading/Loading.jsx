import React from 'react';
import Paper from '@mui/material/Paper';
import { Skeleton as K } from '@mui/material';

function Loading({ first = false, width = 300, height = 20 }) {
  return (
    <Paper elevation={0} sx={{ display: 'flex', mb: 0.5, bgcolor: (theme) => theme.palette.black.second }}>
      {first && (
      <K
        sx={{ mr: 0.5, bgcolor: (theme) => theme.palette.white.main }}
        variant="rectangular"
        width={20}
        height={20}
      />
      )}
      <K
        sx={{ bgcolor: (theme) => theme.palette.white.main }}
        variant="rectangular"
        width={first ? 276 : width}
        height={first ? 20 : height}
      />
    </Paper>
  );
}

export default Loading;
