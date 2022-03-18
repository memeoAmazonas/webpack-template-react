import React from 'react';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { Chip } from 'Component';
import { setFields } from 'Slice/query';

function Selected() {
  const { fields } = useSelector((t) => t.query);
  const dispatch = useDispatch();

  const onDelete = (act) => dispatch(setFields(fields.filter((it) => it !== act)));
  const content = fields.length > 0
      && fields.map((it) => <Chip key={`chip-${it}`} label={it} onDelete={() => onDelete(it)} />);

  return (
    <Stack
      justifyContent="flex-end"
      sx={{ flexWrap: 'wrap', mb: 2 }}
      direction="row"
      spacing={1}
    >
      {content}
    </Stack>
  );
}

export default Selected;
