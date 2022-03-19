import * as React from 'react';
import { List, Modal } from 'Component';
import Stack from '@mui/material/Stack';
import { useSelector } from 'react-redux';

export default function Condition() {
  const [actual, setActual] = React.useState('');
  const { fieldsByTable } = useSelector((s) => s.query);
  const handleChange = (event) => {
    setActual(event.target.value || '');
  };
  console.log(actual);
  return (
    <>
      <Modal title="condition" labelButton="add.condition" onAccept={() => console.log('gol')}>
        <Stack
          justifyContent="flex-end"
          sx={{
            flexWrap: 'wrap', mb: 2, mt: 2, minWidth: 380,
          }}
          direction="column"
          spacing={1}
        >
          <List sx={{ mb: 10 }} handleChange={handleChange} value={actual} data={fieldsByTable} title="select.field" />
          <List handleChange={handleChange} value={actual} data={fieldsByTable} title="select.field" />
          <List handleChange={handleChange} value={actual} data={fieldsByTable} title="select.field" />
        </Stack>
      </Modal>
    </>
  );
}
