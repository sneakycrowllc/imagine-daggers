import React from 'react';
import styled from '@emotion/styled';
import Throbber from '../../components/Throbber';

const LoadingPage = () => {
  return (
    <StyledLoadingPage>
      <Throbber />
      <p>Rolling Initiative...</p>
    </StyledLoadingPage>
  )
};

const StyledLoadingPage = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.CEDAR};
  > * {
    color: ${props => props.theme.colors.SNOW};
    margin-bottom: 16px;
  }
`

export default LoadingPage;
