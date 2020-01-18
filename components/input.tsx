import React, { ChangeEvent } from 'react';

type TInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
};

const Input = ({ value, onChange, label, name }: TInputProps) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input name={name} type="text" value={value} onChange={onChange} />
  </>
);

export default Input;
