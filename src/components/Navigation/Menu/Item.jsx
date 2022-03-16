import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActual, setOpen } from 'Slice/menu';
import { logout } from 'Slice/user';

import ListItemIcon from '@mui/material/ListItemIcon';
import { FormattedMessage } from 'react-intl';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { ToolTip } from 'Component';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { ListItemBtn, Text } from '../CustomComponents';
import itemsConfig from './itemsConfig';

const Item = ({
  values = itemsConfig, isChild = null,
}) => {
  const navigate = useNavigate();
  const { value: actual, open } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const toSend = async ({ to, child, label }) => {
    if (child) {
      dispatch(setOpen(true));
    } else {
      dispatch(setActual(label));
      dispatch(setOpen(false));
      navigate(to);
    }
    /*    if (child) {
      if (!open) {
        setOpen(true);
        dispatch(setActual(label));
      } else if (actual === label) {
        dispatch(setActual(''));
      } else {
        dispatch(setActual(label));
      }
    } else {
      console.log('label', to, child, label);
      dispatch(setActual(label));
      setOpen(false);
      if (to === '/') {
        try {
          await Auth.signOut();
        } catch (e) {
          console.info('usuario deslogeado');
        }
        dispatch(logout());
      }
      navigate(to);
    } */
  };
  const setItems = ({
    icon, label, to, child,
  }) => {
    const item = (
      <ListItemBtn open={open} onClick={() => toSend({ to, child, label })} child={isChild}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
        <Text>
          <FormattedMessage id={label} />
        </Text>
      </ListItemBtn>
    );
    const openDivider = open && child && actual === label && (
    <Divider sx={{
      backgroundColor: (theme) => theme.palette.white.main,
    }}
    />
    );

    const childs = child !== null && open && actual === label
            && (
            <Paper
              elevation={12}
              sx={{ backgroundColor: (theme) => theme.palette.black.second, boxShadow: 3 }}

            >
              <Item
                values={child}
                isChild="true"
              />
              {open && child && actual === label && (
              <Divider sx={{
                backgroundColor: (theme) => theme.palette.white.main,
              }}
              />
              )}
            </Paper>
            );
    if (!open) {
      return (
        <div key={to}>
          {openDivider}
          <ToolTip title={<FormattedMessage id={label} />} placement="right">
            {item}
          </ToolTip>
          {childs}
        </div>
      );
    }
    return (
      <>
        {openDivider}
        {item}
        {childs}
      </>
    );
  };
  return (values.map(({
    icon, label, to, child,
  }) => setItems({
    icon, label, to, child,
  })));
};

export default Item;
