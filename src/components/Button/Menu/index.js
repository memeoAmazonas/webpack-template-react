import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export const MenuButton = styled(IconButton, { shouldForwardProp: (prop) => prop !== 'static' })(({ theme, hover = false }) => ({
  width: theme.spacing(2),
  height: theme.spacing(2),
  boxShadow: theme.customShadows.btn,
  borderRadius: 0,
  ...(!hover && {
    '&:hover': {
      backgroundColor: theme.palette.white.main,
      svg: {
        color: theme.palette.black.second,
      },
    },
  }
  ),
  ...(hover && {
    backgroundColor: `${theme.palette.white.main} !important`,
    svg: {
      color: theme.palette.black.second,
    },
  }
  ),

}));
