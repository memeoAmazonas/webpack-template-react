import React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

const BaseButton = (theme) => ({
  color: theme.palette.btn.positive.text,
  borderRadius: 0,
  height: theme.spacing(3),
  minWidth: theme.spacing(5),
  fontSize: 16,
});

export const PositiveButtonBase = styled(IconButton, {})(({ theme }) => ({
  backgroundColor: `${theme.palette.btn.positive.main} !important`,
  ...BaseButton(theme),
  '&: hover': {
    color: theme.palette.btn.positive.main,
    fontWeight: 'bold',
    boxShadow: theme.shadows.btn,
    backgroundColor: `${theme.palette.black.second} !important`,
    border: `1px solid ${theme.palette.btn.positive.main}`,
  },
  '&: disabled': {
    backgroundColor: `${theme.palette.grey['400']} !important`,
    color: theme.palette.grey.A700,
  },
}));

export function PositiveButton({ children, disabled, onClick }) {
  return (
    <PositiveButtonBase onClick={onClick} disabled={disabled}>
      {children}
    </PositiveButtonBase>
  );
}
