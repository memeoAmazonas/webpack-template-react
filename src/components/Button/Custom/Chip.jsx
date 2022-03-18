import * as React from 'react';
import { Chip as C } from '@mui/material';
import { FormattedMessage } from 'react-intl';

const sx = {
  svg: { color: (theme) => `${theme.palette.white.main}!important` },
  color: (theme) => theme.palette.white.main,
  bgcolor: 'transparent',
  border: (theme) => `0.1rem solid ${theme.palette.white.main}`,
  mb: 0.5,
};
export default function Chip({ onDelete, label }) {
  return (
    <C
      sx={sx}
      label={<FormattedMessage id={label} />}
      variant="outlined"
      onDelete={onDelete}
    />
  );
}
