import React from 'react';
import { PositiveButtonBase } from 'Component/Button/Custom/Base';

export default function PositiveButton({ children, disabled, onClick }) {
  return (
    <PositiveButtonBase onClick={onClick} disabled={disabled}>
      {children}
    </PositiveButtonBase>
  );
}
