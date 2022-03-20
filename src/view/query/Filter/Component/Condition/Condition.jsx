import * as React from 'react';
import { Link, List, Modal } from 'Component';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';
import ConditionQuery from 'Hooks/ConditionQuery';
import ConditionType from 'Views/query/Filter/Component/Condition/ConditionType';

export default function Condition() {
  const { fieldsByTable } = useSelector((s) => s.query);
  const {
    field, reset, onSelectField, listOp,
    onSelectCondition, actType, disabled,
    option, titleOption, value, setValue,
    onSend,
  } = ConditionQuery();
  return (
    <>
      <Modal
        disabledSend={disabled()}
        title="condition"
        labelButton="add.condition"
        onAccept={onSend}
        onCancel={reset}
      >
        <Stack
          justifyContent="flex-end"
          sx={{
            flexWrap: 'wrap', mb: 2, mt: 2, minWidth: 380,
          }}
          direction="column"
          spacing={1}
        >
          {field && <Link disabled label="reset" onClick={reset} />}
          <List
            sx={{ mb: 10 }}
            handleChange={onSelectField}
            value={field}
            data={fieldsByTable}
            title="select.fields"
          />
          {listOp.length > 0
                    && (
                    <List
                      translate={false}
                      sx={{ mb: 10 }}
                      handleChange={onSelectCondition}
                      value={option}
                      data={listOp}
                      title={titleOption}
                    />
                    )}
          <ConditionType
            value={value}
            actType={actType}
            setValue={(e) => setValue(e.target.value)}
          />
        </Stack>
      </Modal>
    </>
  );
}
