import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setFields } from 'Slice/query';
import Stack from '@mui/material/Stack';
import Selected from 'Views/query/Filter/Component/Fields/Selected';
import { List as L } from 'Component';

export default function List() {
  const dispatch = useDispatch();
  const { fields, fieldsByTable } = useSelector((state) => state.query);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    dispatch(setFields(
      value,
    ));
  };

  return (
    <Stack>
      <Selected />
      <L multiple data={fieldsByTable} handleChange={handleChange} value={fields} title="select.fields" />
    </Stack>
  );
}
