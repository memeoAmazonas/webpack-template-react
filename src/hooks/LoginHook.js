import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { setSaveLogin } from 'Slice/user';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/es/lib/isLength';
import { signInService } from 'Views/auth/login/service';
import { setActual } from 'Slice/header';

export const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = React.useState(localStorage.getItem('email') || '');
  const [errorEmail, setErrorEmail] = React.useState(false);
  const [focusEmail, setFocusEmail] = React.useState();
  const [msgError, setMsgError] = React.useState('error.generic');
  const [psw, setPsw] = React.useState('Erasmo6969*****');
  const [errorPsw, setErrorPsw] = React.useState(false);
  const [focusPsw, setFocusPsw] = React.useState();
  const [open, setOpen] = React.useState(false);
  const { saveLogin } = useSelector((state) => state.user);

  const onSave = (e) => dispatch(setSaveLogin(e.target.checked));

  React.useEffect(() => {
    if (open) {
      const timeout = setTimeout(() => {
        setOpen(false);
        setMsgError('error.generic');
      }, 4500);
      return () => clearTimeout(timeout);
    }
    return null;
  }, [open]);

  const onLogin = async () => {
    if (saveLogin) {
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('email');
    }
    try {
      const user = await signInService(email, psw);
      Object.keys(user);
      if (!Object.keys(user).includes('error')) {
        dispatch(setActual('home'));
        navigate('/home');
      } else {
        if (user.message && user.message.code.includes('NotAuthorizedException')) {
          setMsgError('error.login');
        } else {
          setMsgError('error.generic');
        }
        setOpen(true);
      }
    } catch (e) {
      setMsgError('error.generic');
      setOpen(true);
    }
  };
  const onChangeEmail = (e) => {
    setFocusPsw('true');
    setFocusEmail();
    setEmail(e.target.value.trim());
  };
  const onChangePsw = (e) => {
    setFocusEmail('true');
    setFocusPsw();
    setPsw(e.target.value.trim());
  };

  const onBlur = (key, isBlur) => {
    if (key) {
      if (isBlur) {
        setErrorEmail(!isEmail(email));
        setFocusEmail('true');
      } else {
        setFocusEmail();
        setErrorEmail(false);
      }
    } else if (isBlur) {
      setErrorPsw(!isLength(psw, { min: 6 }));
      setFocusPsw('true');
    } else {
      setFocusPsw();
      setErrorPsw(false);
    }
  };
  const isDisabled = !isLength(psw, { min: 6 }) || !isEmail(email);
  return {
    errorEmail,
    email,
    onChangeEmail,
    onBlur,
    focusEmail,
    errorPsw,
    onChangePsw,
    focusPsw,
    saveLogin,
    onSave,
    onLogin,
    isDisabled,
    open,
    setOpen,
    msgError,
  };
};
