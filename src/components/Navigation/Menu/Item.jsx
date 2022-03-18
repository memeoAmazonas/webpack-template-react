import React from 'react';
import itemsConfig from 'Component/Navigation/Menu/itemsConfig';
import { ListItemBtn, Text } from 'Component/Navigation/CustomComponents';
import ListItemIcon from '@mui/material/ListItemIcon';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import ToolTip from 'Component/Tooltip';
import { setActual, setOpen } from 'Slice/header';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { logout } from 'Slice/user';

function Item({ isChild, items = itemsConfig }) {
  const { open } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const commonDispatch = (label, to) => {
    dispatch(setOpen(false));
    dispatch(setActual(label));
    navigate(to);
  };
  const onClick = async ({ child, label, to }) => {
    if (to === '/') {
      try {
        await Auth.signOut();
      } catch (e) {
        console.info('usuario deslogeado');
      }
      dispatch(logout());
      navigate(to);
    }
    if (!open) {
      if (child) {
        dispatch(setOpen(true));
      } else {
        commonDispatch(label, to);
      }
    } else if (!child) {
      commonDispatch(label, to);
    }
  };
  const content = items.map((act) => {
    const response = [];
    const ite = (
      <ListItemBtn key={`item-${act.label}`} onClick={() => onClick(act)} child={isChild} open={open}>
        <ListItemIcon>
          {act.icon}
        </ListItemIcon>
        <Text size={14}>
          <FormattedMessage id={act.label} />
        </Text>
      </ListItemBtn>
    );
    if (!open) {
      response.push(
        <ToolTip key={`item-open-${act.label}`} title={<FormattedMessage id={act.label} />} placement="right">
          {ite}
        </ToolTip>,
      );
    } else {
      response.push(ite);
    }
    if (act.child && open) {
      response.push(
        <Paper
          elevation={12}
          sx={{ backgroundColor: (theme) => theme.palette.black.second, boxShadow: 3 }}
        >
          <Item isChild="true" items={act.child} />
        </Paper>,
      );
    }
    return response;
  });
  return (<>{ content }</>);
}

export default Item;
