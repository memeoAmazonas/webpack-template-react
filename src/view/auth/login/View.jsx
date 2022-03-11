import React from 'react';
import {
  CustomPaper, PositiveButton, Logged,
} from 'Component';

function View() {
  return (
    <Logged
      content={(
        <CustomPaper elevation={3}>

          <PositiveButton>
            hola mundo aqui estoy
          </PositiveButton>
        </CustomPaper>
)}
      filter={(
        <CustomPaper elevation={3}>

          <PositiveButton>
            hola mundo aqui estoy
          </PositiveButton>
        </CustomPaper>
)}
    />

  );
}

export default View;
