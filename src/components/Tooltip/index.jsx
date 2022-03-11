import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const ToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    borderRadius: 0,
    border: `0.5px solid${theme.palette.black.main}`,
    backgroundColor: theme.palette.white.main,
    color: theme.palette.black.main,
    fontWeight: 'bold',
  },
}));

export default ToolTip;
