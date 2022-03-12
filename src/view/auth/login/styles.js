import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import red from '@mui/material/colors/red';

export const TextInput = styled(TextField)(({ theme, error, noFocus }) => ({

  '& label': {
    color: error ? theme.palette.error : theme.palette.white.main,
    ...(noFocus && !error && {
      color: theme.palette.btn.positive.main,
    }),
  },
  '& label.Mui-focused': {
    color: theme.palette.white.main,
  },

  '& .MuiOutlinedInput-root': {
    color: error === true ? red.A400 : theme.palette.white.main,
    marginBottom: theme.spacing(2.2),
    ...(noFocus && !error && {
      color: theme.palette.btn.positive.main,
    }),
    borderRadius: 0,
    '& .MuiSvgIcon-root': {
      color: error === true ? red.A400 : theme.palette.white.main,
    },
    '& fieldset': {
      borderColor: error ? theme.palette.error : theme.palette.white.main,
      ...(noFocus && !error && {
        borderColor: theme.palette.btn.positive.main,
      }),
    },
    '&:hover fieldset': {
      borderColor: theme.palette.btn.positive.main,
      borderRadius: 0,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.white.main,
    },
  },
}));
