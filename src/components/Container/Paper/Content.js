import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';

export const CustomPaper = styled(Paper, {})(({ theme }) => ({
  backgroundColor: theme.palette.black.second,
  minHeight: 130,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 0,
  padding: 10,
  color: theme.palette.white.main,
}));
