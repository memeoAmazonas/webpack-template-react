import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { FilterAlt, FilterAltOff } from '@mui/icons-material';
import { ToolTip, MenuButton } from 'Component';
import { FormattedMessage } from 'react-intl';

function Filter({
  setOpen, filterMeasures, open, size, content,
}) {
  const setButton = () => {
    let icon = <FilterAltOff />;
    let message = 'close.filter';
    const placement = size ? 'top' : 'right';
    if (!open) {
      icon = <FilterAlt />;
      message = 'open.filter';
    }
    return (
      <ToolTip
        title={<FormattedMessage id={message} />}
        placement={placement}
      >
        <MenuButton
          color="white"
          sx={{ ml: 0 }}
          onClick={setOpen}
          hover={!open}
        >
          {icon}
        </MenuButton>
      </ToolTip>
    );
  };
  return (
    <Grid item {...filterMeasures}>
      { !open && setButton()}
      {open && (
      <Paper
        square
        sx={{
          minHeight: 150,
          backgroundColor: (theme) => theme.palette.black.second,
        }}
        elevation={3}
      >
        {setButton()}

        <Paper
          square
          variant="outlined"
          sx={{

            backgroundColor: 'transparent',
            border: 'none',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          { content }
        </Paper>

      </Paper>
      )}

    </Grid>
  );
}

export default Filter;
