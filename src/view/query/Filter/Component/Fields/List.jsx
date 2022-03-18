import React from 'react';

import { useTheme } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { setFields } from 'Slice/query';
import Stack from '@mui/material/Stack';
import Selected from 'Views/query/Filter/Component/Fields/Selected';
import { OutlineInput } from 'Component';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'c1', 'c2', 'c3', 'c4',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
            personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
  };
}

export default function List() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { fields } = useSelector((state) => state.query);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch(setFields(
      value,
    ));
  };
  return (
    <Stack sx={{ maxWidth: 360, minWidth: 360 }}>
      <Selected />
      <FormControl sx={{ maxWidth: 360, minWidth: 360 }}>
        <InputLabel id="demo-multiple-chip-label"><FormattedMessage id="select.field" /></InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={fields}
          onChange={handleChange}
          input={<OutlineInput id="select-multiple-chip" label={<FormattedMessage id="select.field" />} />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              name={name}
              style={getStyles(name, fields, theme)}
            >
              <FormattedMessage id={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Stack>
  );
}
