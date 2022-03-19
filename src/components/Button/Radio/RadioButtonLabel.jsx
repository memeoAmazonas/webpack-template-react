import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { FormattedMessage } from 'react-intl';
import { Loading } from 'Component/index';

export default function RadioButtonLabel({
  title, value, handleChange, data, loading = false,
}) {
  if (loading) return Array.from(Array(2).keys()).map((k) => <Loading key={k} first />);

  const content = data && data
    .map(({ value: actualValue, label }) => (
      <FormControlLabel
        value={actualValue}
        key={label}
        sx={{

          color: (theme) => theme.palette.white.main,
        }}
        control={(
          <Radio sx={{
            color: (theme) => theme.palette.btn.positive.main,
            '&.Mui-checked': {
              color: (theme) => theme.palette.btn.positive.main,
            },
          }}
          />
)}
        label={<FormattedMessage id={label} />}
      />
    ));
  return (
    <FormControl>
      <FormLabel
        sx={{
          color: (theme) => theme.palette.white.main,
          fontSize: 16,
          fontWeight: '600',
        }}
        id={title}
      >
        <FormattedMessage id={title} />
      </FormLabel>
      <RadioGroup
        aria-labelledby={title}
        name={`radio-${title}`}
        value={value}
        onChange={handleChange}
      >
        { content }
      </RadioGroup>
    </FormControl>
  );
}
