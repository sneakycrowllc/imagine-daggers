import React, { ChangeEvent, useState, useRef } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type TInputProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'password';
};

const Input = ({ value, onChange, label, name, placeholder = '', type = 'text' }: TInputProps) => {
  // Dynamic input type for show/hide button
  const [isPasswordShown, setPasswordShown] = useState<boolean>(false);
  const inputEl = useRef<any>(null);
  const handleShownPassword = (newToggleValue: boolean) => {
    inputEl.current.focus();
    setPasswordShown(newToggleValue);
  };

  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <StyledDynamicInput>
        <input
          name={name}
          type={type === 'text' ? 'text' : isPasswordShown ? 'text' : 'password'} // eslint-disable-line
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          ref={inputEl}
        />
        {type === 'password' && (
          // @ts-ignore
          <FontAwesomeIcon
            icon={isPasswordShown ? 'eye-slash' : 'eye'}
            onClick={() => handleShownPassword(!isPasswordShown)}
          />
        )}
      </StyledDynamicInput>
    </StyledInput>
  );
};

const StyledInput = styled.div`
  min-width: 300px;
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 8px;
  label {
    width: 100%;
    display: block;
    text-align: left;
    font-size: 1em;
    margin-bottom: 4px;
  }
`;

const StyledDynamicInput = styled.div`
  position: relative;
  input {
    width: 100%;
    height: 50px;
    display: block;
    padding: 8px 16px;
    border: 2px solid #202020;
    font-size: 1.5em;
    &:focus {
      border-left-width: 6px;
      border-bottom-width: 6px;
    }
  }
  svg {
    position: absolute;
    right: 8px;
    top: 0;
    height: 100%;
    font-size: 1.5em;
  }
`;

export default Input;
