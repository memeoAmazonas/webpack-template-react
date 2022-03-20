import * as React from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { OPERATION_QUERY } from 'Asset/constants';
import { setCondition } from 'Slice/query';

const ConditionQuery = () => {
  const dispatch = useDispatch();
  const [field, setField] = React.useState('');
  const { data, table } = useSelector((s) => s.query);
  const [op, setOp] = React.useState('');
  const [listOp, setLisOp] = React.useState([]);
  const [actType, setActType] = React.useState();
  const [value, setValue] = React.useState('');
  const [option, setOption] = React.useState('');
  const [titleOption, setTitleOption] = React.useState('empty');
  const [type, setType] = React.useState('');

  const disabled = () => {
    if (field) {
      if (actType) {
        if (op && value) {
          return false;
        }
      } else if (value) return false;
    }
    return true;
  };
  const setActualOp = (isType, options) => {
    if (['date', 'number', 'string'].includes(isType)) {
      setTitleOption('select.condition');
      if (isType === 'date') {
        setActType('date');
      } else {
        setActType('text');
      }
      if (isType === 'string') {
        setLisOp(OPERATION_QUERY.STRING);
      } else {
        setLisOp(OPERATION_QUERY.DATE);
      }
    } else {
      setTitleOption('select.value');
      setLisOp(options);
    }
  };
  const onSelectCondition = (e) => {
    setOption(e.target.value);
    if (actType) {
      setOp(e.target.value);
    } else {
      setValue(e.target.value);
    }
  };
  const onSelectField = (event) => {
    setActType();
    setField(event.target.value || '');
    const { Type, Options } = data[table].filter((it) => it.Name === event.target.value)[0];
    setType(Type);
    setActualOp(Type, Options);
  };
  const reset = () => {
    setField('');
    setActType();
    setLisOp([]);
    setOp('');
    setValue('');
    setOption('');
  };

  const onSend = () => {
    dispatch(setCondition([{
      field,
      value,
      op,
      type,
      id: uuid(),
    }]));
    reset();
  };

  return {
    field,
    op,
    listOp,
    onSelectField,
    reset,
    actType,
    value,
    setValue,
    disabled,
    onSelectCondition,
    option,
    titleOption,
    onSend,
  };
};
export default ConditionQuery;
