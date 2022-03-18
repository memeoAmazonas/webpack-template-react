import React from 'react';
import { AccountCircle, Login, VpnKey } from '@mui/icons-material';
import { FormattedMessage } from 'react-intl';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';

import {
  CustomPaper, PositiveButton, NoLogged, TextInput, Toast,
} from 'Component';

import logo from 'Asset/images/logos/logo.png';
import { LoginHook } from 'Hooks/LoginHook';
import LoggedHook from 'Hooks/LoggedHook';

function View() {
  LoggedHook(true);
  const {
    errorEmail, email, onChangeEmail, onBlur, focusEmail, msgError,
    errorPsw, onChangePsw, focusPsw, saveLogin, onSave, onLogin, isDisabled, open,
  } = LoginHook();

  return (
    <NoLogged>
      <Toast severity="error" message={msgError} open={open} />
      <CustomPaper elevation={3}>
        <img alt="logo" style={{ borderRadius: '50%' }} src={logo} width={140} height={140} />
        <Grid
          container
          justifyContent="center"
        >
          <Grid item md={9}>
            <TextInput
              error={errorEmail}
              value={email}
              label={<FormattedMessage id="username" />}
              onChange={onChangeEmail}
              onBlur={() => onBlur(true, true)}
              onFocus={() => onBlur(true, false)}
              size="small"
              nofocus={focusEmail}
              fullWidth
              margin="dense"
              InputProps={{
                autoComplete: 'off',
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextInput
              error={errorPsw}
              type="password"
              label={<FormattedMessage id="password" />}
              onChange={onChangePsw}
              onBlur={() => onBlur(false, true)}
              onFocus={() => onBlur(false, false)}
              size="small"
              nofocus={focusPsw}
              fullWidth
              mb={1.2}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKey />
                  </InputAdornment>
                ),
              }}
            />
            <FormGroup>
              <FormControlLabel
                control={(
                  <Checkbox
                    checked={saveLogin}
                    onChange={onSave}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{
                      color: (theme) => theme.palette.btn.positive.main,
                      '&.Mui-checked': {
                        color: (theme) => theme.palette.btn.positive.main,
                      },
                    }}
                  />
                                )}
                label={<FormattedMessage id="save.username" />}
              />
            </FormGroup>
          </Grid>
        </Grid>

        <PositiveButton onClick={onLogin} disabled={isDisabled}>
          <FormattedMessage id="login" />
          <Login />
        </PositiveButton>
      </CustomPaper>
    </NoLogged>
  );
}

export default View;
