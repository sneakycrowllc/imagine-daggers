import React from 'react';
import styled from 'styled-components';

type TFormButton = {
  children: string;
};

const FormButton = ({ children }: TFormButton) => (
  <StyledFormButton type="submit">{children}</StyledFormButton>
);

const StyledFormButton = styled.button`
  height: 50px;
  padding: 8px 16px;
  margin: 8px;
  border: 2px solid ${props => props.theme.palette.darkness};
  background-color: ${props => props.theme.palette.snow};
  font-size: 1em;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.03rem;
  &:hover {
    background-color: ${props => props.theme.palette.darkness};
    color: ${props => props.theme.palette.snow};
    cursor: pointer;
  }
`;

export default FormButton;
