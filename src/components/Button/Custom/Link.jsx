import React from 'react';
import { Link as L } from '@mui/material';
import { FormattedMessage } from 'react-intl';

function Link({ label, onClick }) {
  return (
    <L
      component="button"
      variant="body2"
      onClick={onClick}
      sx={{
        color: (theme) => theme.palette.btn.positive.main,
        fontSize: 15.5,
        width: 30,
        mb: 2,
      }}

    >
      <FormattedMessage id={label} />
    </L>
  );
}

export default Link;
