import React from 'react';
import { useSelector } from 'react-redux';

function Content() {
  const { fields, condition, table } = useSelector((t) => t.query);
  const result = () => {
    const base = `SELECT ${fields.join(', ')} FROM ${table} `;
    const cond = `WHERE ${condition.map((item) => `${item.field} ${item.op} '${item.value}'`).join(' AND ')}`;
    if (condition.length > 0) {
      return base + cond;
    }
    return base;
  };
  if (fields.length > 0) {
    return (
      <div>
        {result()}
      </div>
    );
  }
  return null;
}

export default Content;
