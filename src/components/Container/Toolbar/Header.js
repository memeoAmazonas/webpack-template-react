import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

export const CustomToolbar = styled(Toolbar, {})(({ theme }) => ({
  backgroundColor: theme.palette.black.second,
}));
