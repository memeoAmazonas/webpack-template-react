import React from 'react';
import { useTheme } from '@mui/material/styles';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { FormattedMessage } from 'react-intl';
import Select from '@mui/material/Select';
import { OutlineInput } from 'Component/TextInput';
import MenuItem from '@mui/material/MenuItem';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = (theme) => ({
  PaperProps: {

    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      color: theme.palette.white.main,
      backgroundColor: theme.palette.black.second,
    },
  },
});

function MultipleSelected({
  title, value, handleChange, data, multiple = false,
}) {
  const theme = useTheme();
  return (
    <FormControl>
      <InputLabel
        sx={{
          color: theme.palette.white.main,
        }}
        id={`select-multiple-${title}`}
      >
        <FormattedMessage id={title} />
      </InputLabel>
      <Select
        labelId={`select-multiple-${title}`}
        id={`multiple-${title}`}
        multiple={multiple}
        value={value}
        onChange={handleChange}
        input={<OutlineInput id={`select-${title}`} label={<FormattedMessage id={title} />} />}
        MenuProps={MenuProps(theme)}
      >
        {data.map((name) => (
          <MenuItem
            key={name}
            value={name}
            name={name}
          >
            <FormattedMessage id={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default MultipleSelected;
