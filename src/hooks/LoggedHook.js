import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Auth } from 'aws-amplify';
import { setInfo } from 'Slice/user';
import { setActual } from 'Slice/menu';

function LoggedHook(isLogin = false) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logged, setLogged] = React.useState(false);
  const [user, setUser] = React.useState({});
  const { info } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (logged && user && isLogin) {
      dispatch(setActual('home'));
      navigate('/home');
    }
  }, [logged, user]);
  React.useEffect(async () => {
    if (!info) {
      try {
        const data = await Auth.currentSession();

        if (data) {
          setLogged(true);
          const id = data.getAccessToken().getJwtToken();
          const token = data.getIdToken().payload['custom:CustomerId'];
          dispatch(setInfo({ token, id }));
          setUser({ token, id });
        } else {
          navigate('/');
        }
      } catch (e) {
        console.info('Usuario no logeado!!!');
        navigate('/');
      }
    } else {
      setLogged(true);
      setUser(info);
    }
  }, []);
  return { logged, user };
}

export default LoggedHook;
