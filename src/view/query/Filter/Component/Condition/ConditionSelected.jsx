import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Stack from '@mui/material/Stack';
import { deleteCondition } from 'Slice/query';
import { Chip } from 'Component';
import { useIntl } from 'react-intl';

function ConditionSelected() {
  const dispatch = useDispatch();
  const { condition } = useSelector((s) => s.query);

  const onDelete = (act) => dispatch(deleteCondition(act));
  const intl = useIntl();
  function setTranslate(it) {
    return [intl.formatMessage({ id: it.field }), it.op, it.value].join(' ');
  }

  const content = condition.length > 0
        && condition.map((it) => (
          <Chip
            key={it.id}
            label={setTranslate(it)}
            onDelete={() => onDelete(it.id)}
          />
        ));
  if (condition.length > 0) {
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
  return null;
}

export default ConditionSelected;
