import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { FormattedMessage } from 'react-intl';

function Toast({ open=false, message, severity = 'success' }) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={open}
      autoHideDuration={6000}
      severity="success"
    >
      <Alert severity={severity}><FormattedMessage id={message} /></Alert>
    </Snackbar>
  );
}

export default Toast;
