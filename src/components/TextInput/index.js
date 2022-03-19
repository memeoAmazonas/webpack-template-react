import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import red from '@mui/material/colors/red';

export const TextInput = styled(TextField)(({
  theme, error, nofocus = false, mb = 3.2,
}) => ({

  '& label': {
    color: error ? theme.palette.error : theme.palette.white.main,
    ...(nofocus && !error && {
      color: theme.palette.btn.positive.main,
    }),
  },
  '& label.Mui-focused': {
    color: theme.palette.white.main,
  },

  '& .MuiOutlinedInput-root': {
    color: error === true ? red.A400 : theme.palette.white.main,
    marginBottom: theme.spacing(mb),
    ...(nofocus && !error && {
      color: theme.palette.btn.positive.main,
    }),
    borderRadius: 0,
    '& .MuiSvgIcon-root': {
      color: error === true ? red.A400 : theme.palette.white.main,
    },
    '& fieldset': {
      borderColor: error ? theme.palette.error : theme.palette.white.main,
      ...(nofocus && !error && {
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
export const OutlineInput = styled(OutlinedInput)(({ theme }) => ({

  '& .MuiOutlinedInput-input': {
    color: theme.palette.white.main,
    backgroundColor: theme.palette.black.second,
    '& label': {
      color: 'green',
    },
    '& label.Mui-focused': {
      color: theme.palette.white.main,
    },
  },
}));
