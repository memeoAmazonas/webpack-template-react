import React from 'react';
import Menu from '@mui/material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import { setLanguage } from 'Slice/language';
import { FormattedMessage } from 'react-intl';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { ToolTip } from 'Component';

function Language() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
  const { value: language } = useSelector((state) => state.language);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const send = (id) => {
    dispatch(setLanguage(id));
    handleClose();
  };
  const styles = {
    borderRadius: 0,
    color: (theme) => (!open ? theme.palette.white.main : theme.palette.black.second),
    backgroundColor: (theme) => (!open ? theme.palette.black.second : theme.palette.white.main),
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <ToolTip title={<FormattedMessage id="change.language" />} placement="bottom">
        <IconButton
          id="demo-positioned-button"
          aria-controls={open ? 'demo-positioned-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          size="small"
          sx={{
            height: 20,
            width: 20,
            '&:hover': {
              backgroundColor: (theme) => theme.palette.black.second,
              color: (theme) => theme.palette.white.main,
            },
            ...styles,
          }}
        >
          <Avatar sx={{
            height: 18,
            width: 18,
            padding: 1.5,

            '&:hover': {
              color: (theme) => theme.palette.black.second,
              backgroundColor: (theme) => theme.palette.white.main,
            },
            ...styles,
          }}
          >
            {language}
          </Avatar>
        </IconButton>
      </ToolTip>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          padding: 0,
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 0.5,

            borderRadius: 0,
            backgroundColor: (theme) => theme.palette.black.second,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
              padding: 0,
              borderRadius: 0,
            },
            '& .MuiMenuItem-root': {
              color: (theme) => theme.palette.white.main,
              pt: 0,
              pb: 0,
              height: 20,
              '&:hover': {
                color: (theme) => theme.palette.black.second,
                backgroundColor: (theme) => theme.palette.white.main,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{ minHeight: 20 }} onClick={() => send('es')}>
          <FormattedMessage id="es.large" />
        </MenuItem>
        <MenuItem sx={{ minHeight: 20 }} onClick={() => send('en')}>
          <FormattedMessage id="en.large" />
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Language;
