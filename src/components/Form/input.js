import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledInput = styled.div`
  width: 100%;
  border-radius: 2px;
  position: relative;
  border: 1px solid ${props => props.theme.colors.SILVERRUST};
  padding: 8px;
  min-height: 24px;
  label {
    font-weight: bold;
    transform: translateY(-14px);
    position: absolute;
    background: ${props => props.theme.colors.SNOW};
    text-transform: uppercase;
  }
  input {
    border: none;
    width: 100%;
    padding: 8px 0;
    height: 100%;
    font-size: 1em;
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
  type: PropTypes.oneOf(['text', 'hidden', 'email']),
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
