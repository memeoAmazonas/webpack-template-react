import React from 'react';
import List from 'Views/query/Filter/Component/Fields/List';
import { Divider, Link, Radio } from 'Component';
import { useDispatch, useSelector } from 'react-redux';
import { setTable, clear } from 'Slice/query';
import Condition from 'Views/query/Filter/Component/Condition/Condition';

function Filter() {
  const dispatch = useDispatch();
  const { table, fields } = useSelector((state) => state.query);
  const handleChange = (event) => {
    dispatch(setTable(event.target.value));
  };
  const reset = () => dispatch(clear());
  return (
    <>
      {table && <Link disabled label="reset" onClick={reset} />}
      <Radio
        handleChange={handleChange}
        title="select.table"
        value={table}
        data={[{ value: 'c1', label: 'c1' }, { value: 'c2', label: 'c2' }]}
      />

      {table
            && (
            <>
              <Divider />
              <List />
            </>
            )}
      {
           fields.length > 0 && (
           <>
             <Divider />
             <Condition />
           </>
           )
        }
    </>
  );
}

export default Filter;
