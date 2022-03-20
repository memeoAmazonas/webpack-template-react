import React from 'react';
import { FormattedMessage } from 'react-intl';
import { TextInput } from 'Component';

function ConditionType({ actType, value, setValue }) {
  if (actType) {
    return (
      <TextInput
        id="date"
        label={<FormattedMessage id="ingress.value" />}
        type={actType}
        InputLabelProps={{
          shrink: true,
        }}
        value={value}
        onChange={setValue}
      />
    );
  }
  return null;
}

export default ConditionType;
