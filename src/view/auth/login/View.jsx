import React from 'react';
import {
  CustomPaper, PositiveButton, NoLogged,
} from 'Component';
import { AccountCircle, Login, VpnKey } from '@mui/icons-material';
import { FormattedMessage } from 'react-intl';
import Grid from '@mui/material/Grid';
import isEmail from 'validator/lib/isEmail';
import InputAdornment from '@mui/material/InputAdornment';
import { TextInput } from 'Views/auth/login/styles';
import isLength from 'validator/es/lib/isLength';
import logo from 'Asset/images/logos/logo.png';

function View() {
  const [email, setEmail] = React.useState('');
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [focusEmail, setFocusEmail] = React.useState(false);

  const [psw, setPsw] = React.useState('');
  const [errorPsw, setErrorPsw] = React.useState(false);
  const [focusPsw, setFocusPsw] = React.useState(false);

  const onChangeEmail = (e) => {
    setFocusPsw(true);
    setFocusEmail(false);
    setEmail(e.target.value.trim());
  };
  const onChangePsw = (e) => {
    setFocusEmail(true);
    setFocusPsw(false);
    setPsw(e.target.value.trim());
  };
  const onBlur = (key, isBlur) => {
    if (key) {
      if (isBlur) {
        setErrorEmail(!isEmail(email));
        setFocusEmail(true);
      } else {
        setFocusEmail(false);
        setErrorEmail(false);
      }
    } else if (isBlur) {
      setErrorPsw(!isLength(psw, { min: 6 }));
      setFocusPsw(true);
    } else {
      setFocusPsw(false);
      setErrorPsw(false);
    }
  };

  return (
    <NoLogged>
      <CustomPaper elevation={3}>
        <img alt="logo" style={{ borderRadius: '50%' }} src={logo} width={140} height={140} />
        <Grid
          container
          justifyContent="center"
        >
          <Grid item md={9}>
            <TextInput
              autocomplete="off"
              error={errorEmail}
              label={<FormattedMessage id="username" />}
              onChange={onChangeEmail}
              onBlur={() => onBlur(true, true)}
              onFocus={() => onBlur(true, false)}
              size="small"
              noFocus={focusEmail}
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
              noFocus={focusPsw}
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKey />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
        </Grid>
        <PositiveButton disabled={!isLength(psw, { min: 6 }) || !isEmail(email)}>
          <FormattedMessage id="login" type="email" />
          <Login />
        </PositiveButton>
      </CustomPaper>
    </NoLogged>
  );
}

export default View;
