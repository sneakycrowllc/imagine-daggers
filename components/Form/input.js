import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { darken } from 'polished';

const StyledInput = styled.div`
  width: auto;
  border-radius: 2px;
  position: relative;
  border: 1px solid ${props => props.theme.colors.SILVERRUST};
  padding: 10px;
  min-height: 24px;
  label {
    font-weight: bold;
    transform: translateY(-16px);
    position: absolute;
    background: ${props => props.theme.colors.SNOW};
    text-transform: uppercase;
  }
  input {
    border: none;
    width: 100%;
    height: 100%;
    font-size: 1em;
    color: ${props => darken(0.5, props.theme.colors.SILVERRUST)};
    &::placeholder {
      color: ${props => darken(0.1, props.theme.colors.SILVERRUST)};
      font-style: italic;
    }
  }
`

const Input = props => {
  return (
    <StyledInput>
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        placeholder={props.placeholder}
        className={props.className}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </StyledInput>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'hidden', 'email', 'password']),
  onChange: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string
};

Input.defaultProps = {
  value: '',
  type: 'text',
  onChange: () => null,
  className: '',
  placeholder: '',
  name: '',
  label: ''
};

export default Input;