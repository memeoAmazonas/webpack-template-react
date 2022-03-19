import React from 'react';
import { Auth } from 'aws-amplify';
import Box from '@mui/material/Box';
import Navigation from 'Component/Navigation';
import Content from 'Component/ViewContainer/content/Content';
import LoggedHook from 'Hooks/LoggedHook';
import { useNavigate } from 'react-router-dom';
import IdleTimer from 'react-idle-timer';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'Slice/user';
import { Toast } from 'Component';

function Logged({ content, filter }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const idleTimerRef = React.useRef(null);
  const { logged, user } = LoggedHook();
  const { isLoggedError } = useSelector((state) => state.user);
  React.useEffect(() => {
    if (!logged && !user && !isLoggedError) {
      navigate('/');
    }
  });
  const onIdle = async () => {
    try {
      await Auth.signOut();
    } catch (e) {
      console.info('logout succesfull');
    }
    dispatch(logout());
    navigate('/');
  };
  return (
    <IdleTimer
      ref={idleTimerRef}
      timeout={Number(process.env.SESSION_TIMEOUT)}
      onIdle={onIdle}
    >

      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <Toast severity="error" message="username" open={isLoggedError} />
        <Navigation />
        <Content content={content} filter={filter} />
      </Box>
    </IdleTimer>
  );
}

export default Logged;
