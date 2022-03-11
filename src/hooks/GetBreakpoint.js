import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const GetBreakPoint = ({ measure, type = 'up' }) => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints[type](measure));
};

export default GetBreakPoint;
