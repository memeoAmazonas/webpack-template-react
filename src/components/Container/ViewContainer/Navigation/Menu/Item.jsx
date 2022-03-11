import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActual } from 'Slice/menu';

import ListItemIcon from '@mui/material/ListItemIcon';
import { FormattedMessage } from 'react-intl';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { ToolTip } from 'Component';
import { ListItemBtn, Text } from '../CustomComponents';
import itemsConfig from './itemsConfig';

const Item = ({
  open, setOpen, values = itemsConfig, isChild = false,
}) => {
  const { value: actual } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const toSend = ({ to, child, label }) => {
    if (child) {
      if (!open) {
        setOpen(true);
        dispatch(setActual(label));
      } else if (actual === label) {
        dispatch(setActual(''));
      } else {
        dispatch(setActual(label));
      }
    } else {
      console.log(to);
      setOpen(false);
    }
  };
  console.log(actual, open);
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

    const childs = child && open && actual === label
            && (
            <Paper
              elevation={12}
              sx={{ backgroundColor: (theme) => theme.palette.black.second, boxShadow: 3 }}
            >
              <Item
                open={open}
                setOpen={setOpen}
                values={child}
                isChild
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
        <>
          {openDivider}
          <ToolTip title={<FormattedMessage id={label} />} placement="right">
            {item}
          </ToolTip>
          {childs}
        </>
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
