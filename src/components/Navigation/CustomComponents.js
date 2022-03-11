import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

const drawerWidth = 150;

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  '& .MuiToolbar-root': {
    minHeight: theme.spacing(3),
    paddingLeft: theme.spacing(2),
  },
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({

    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.black.second,
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,

      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      '& .MuiToolbar-root': {
        minHeight: theme.spacing(3),
        paddingLeft: theme.spacing(1),
      },
      boxSizing: 'border-box',
      ...(!open && {

        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(4),
        },
      }),
    },
  }),
);

export const Text = styled(ListItemText, {})(({ theme }) => ({
  color: theme.palette.white.main,
}));

export const ListItemBtn = styled(
  ListItemButton,
  {},
)(({ theme, child, open = false }) => ({
  height: theme.spacing(2.5),
  marginBottom: theme.spacing(0.5),
  paddingLeft: theme.spacing(0.6),
  backgroundColor: theme.palette.black.second,
  ...(!open && {
    boxShadow: theme.shadows.btn,
  }),
  ...(child && {
    paddingLeft: theme.spacing(2.5),
  }),
  '& .MuiListItemIcon-root': {
    minWidth: theme.spacing(2.7),
    paddingRight: theme.spacing(1.4),

  },
  '&:hover': {
    backgroundColor: theme.palette.white.main,
    '& .MuiListItemText-root': {
      color: theme.palette.black.main,
    },
    '& .MuiListItemIcon-root': {
      svg: {
        color: theme.palette.black.second,
      },
    },
  },
}));
