import React from 'react';
import { PositiveButton, NegativeButton } from 'Component/Button';
import { FormattedMessage } from 'react-intl';
import { Add } from '@mui/icons-material';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';
import GetBreakPoint from 'Hooks/GetBreakpoint';

const Content = styled(Dialog)(({ theme }) => ({

  '& .MuiDialog-paper': {
    padding: theme.spacing(0.5),
    margin: 0,
    backgroundColor: theme.palette.black.second,
    color: theme.palette.white.main,
    borderRadius: 0,

  },
  '& .MuiDialogContent-root': {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

}));
function Modal({
  labelButton = 'empty',
  title = 'empty',
  children,
  onAccept,
  labelAccept = 'accept',
  labelCancel = 'cancel',
  iconCancel = null,
  iconAccept = null,
  iconButton = <Add />,
  disabledSend = false,
}) {
  const [open, setOpen] = React.useState(false);

  const onSend = () => {
    onAccept();
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };
  const fullscreen = GetBreakPoint({ measure: 'sm', type: 'down' });
  return (
    <>
      <PositiveButton sx={{ maxWidth: 175 }} onClick={handleClickOpen}>
        <FormattedMessage id={labelButton} />
        {iconButton}
      </PositiveButton>
      <Content maxWidth="lg" fullScreen={fullscreen} disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle><FormattedMessage id={title} /></DialogTitle>
        <DialogContent>
          {children}
        </DialogContent>
        <DialogActions>
          <PositiveButton disabled={disabledSend} onClick={handleClose}>
            {iconAccept}
            <FormattedMessage id={labelAccept} />
          </PositiveButton>
          <NegativeButton onClick={onSend}>
            {iconCancel}
            <FormattedMessage id={labelCancel} />
          </NegativeButton>
        </DialogActions>
      </Content>
    </>
  );
}

export default Modal;
