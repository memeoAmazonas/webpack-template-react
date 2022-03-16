import React from 'react';
import { Logged } from 'Component';

function View() {
  return (
    <Logged
      content={
        <h2>hola home</h2>
      }
      filter={<h1>filtro</h1>}
    />

  );
}

export default View;
