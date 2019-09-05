import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  min-width: 100px;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.CARDINAL};
  padding: 8px;
  border-radius: 2px;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.75em;
  color: ${props => props.theme.colors.SNOW};
  background-color: ${props => props.theme.colors.POMEGRANATE};
  transition: background-color 100ms ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.CARDINAL};
  }
`;

const Button = props => {
  return (
    <StyledButton onClick={props.onClick} type={props.type}>
      {props.isLoading ? 'Loading...' : props.label}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button']),
  label: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  type: 'button',
  label: 'Button',
  isLoading: false,
  onClick: () => null
};

export default Button;
