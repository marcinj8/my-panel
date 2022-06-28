import React from 'react';

interface InputProps {
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
}

export const Input: React.FC<InputProps> = ({ value, onChange, label = null }) => {
  return (
    <>
      {label && <label>{label}</label>}
      <input onChange={onChange} value={value} />
    </>
  );
};
