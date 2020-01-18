import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

type TInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  placeholder?: string;
};

const Input = ({ value, onChange, label, name, placeholder = '' }: TInputProps) => (
  <StyledInput>
    <label htmlFor={name}>{label}</label>
    <input name={name} type="text" value={value} onChange={onChange} placeholder={placeholder} />
  </StyledInput>
);

const StyledInput = styled.div`
  min-width: 300px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px;
  border: 1px solid red;
  label {
    width: 100%;
    display: block;
    text-align: left;
    font-size: 1em;
    margin-bottom: 4px;
  }
  input {
    width: 100%;
    display: block;
    padding: 8px 16px;
    border: 2px solid #202020;
    font-size: 1.5em;
    &:focus {
      border-left-width: 6px;
      border-bottom-width: 6px;
    }
  }
`;

export default Input;
