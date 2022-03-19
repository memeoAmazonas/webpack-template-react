import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

const BaseButton = (theme) => ({
  color: theme.palette.btn.positive.text,
  borderRadius: 0,
  height: theme.spacing(3),
  minWidth: theme.spacing(5),
  fontSize: 16,
});

export const PositiveButton = styled(IconButton, {})(({ theme }) => ({
  backgroundColor: `${theme.palette.btn.positive.main} !important`,
  ...BaseButton(theme),
  '&: hover': {
    color: theme.palette.btn.positive.main,
    fontWeight: 'bold',
    boxShadow: theme.customShadows.btn,
    backgroundColor: `${theme.palette.black.second} !important`,
    border: `1px solid ${theme.palette.btn.positive.main}`,
  },
  '&: disabled': {
    backgroundColor: `${theme.palette.grey['400']} !important`,
    color: theme.palette.grey.A700,
  },
}));
export const NegativeButton = styled(IconButton, {})(({ theme }) => ({
  backgroundColor: `${theme.palette.error.main} !important`,
  ...BaseButton(theme),
  '&: hover': {
    color: theme.palette.error.main,
    fontWeight: 'bold',
    boxShadow: theme.customShadows.btn,
    backgroundColor: `${theme.palette.black.second} !important`,
    border: `1px solid ${theme.palette.error.main}`,
  },
  '&: disabled': {
    backgroundColor: `${theme.palette.grey['400']} !important`,
    color: theme.palette.grey.A700,
  },
}));
