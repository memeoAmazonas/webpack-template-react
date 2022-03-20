import React from 'react';
import List from 'Views/query/Filter/Component/Fields/List';
import {
  Divider, Domain, Link, Radio,
} from 'Component';
import { useDispatch, useSelector } from 'react-redux';
import { setTable, clear, fetcMetadata } from 'Slice/query';
import Condition from 'Views/query/Filter/Component/Condition/Condition';
import { setDomain } from 'Slice/domain';
import { HTTP_STATUS } from 'Asset/constants';
import ConditionSelected from 'Views/query/Filter/Component/Condition/ConditionSelected';

function Filter() {
  const dispatch = useDispatch();
  const {
    table, fields, tables, loading, condition,
  } = useSelector((state) => state.query);
  console.log('condition', condition);
  React.useEffect(() => {
    if (!tables) dispatch(fetcMetadata());
  }, []);
  const handleChange = (event) => {
    dispatch(setTable(event.target.value));
  };
  const reset = () => {
    dispatch(clear());
    dispatch(setDomain(''));
  };
  return (
    <>
      {table && <Link disabled label="reset" onClick={reset} />}
      <Radio
        handleChange={handleChange}
        title="select.table"
        value={table}
        loading={loading === HTTP_STATUS.PENDING}
        data={tables}
      />

      {table
            && (
            <>
              <Divider />
              <Domain />
              <Divider />
              <List />
            </>
            )}
      {
           fields.length > 0 && (
           <>
             <Divider />
             <ConditionSelected />
             <Condition />
           </>
           )
        }
    </>
  );
}

export default Filter;
