import React from 'react';
import { Logged } from 'Component/ViewContainer';
import Content from 'Views/query/Content';
import Filter from 'Views/query/Filter/Filter';

function View() {
  return (
    <Logged
      content={<Content />}
      filter={<Filter />}
    />
  );
}

export default View;
