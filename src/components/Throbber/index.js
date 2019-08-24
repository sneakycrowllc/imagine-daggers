import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

import Logo from '../../static/images/logos/logo_250_fill.png';

const Throbber = () => {
  return (
    <StyledThrobber>
      <StyledCard>
        <img src={Logo} />
        <img src={Logo} />
      </StyledCard>
    </StyledThrobber>
  )
}

const StyledThrobber = styled.div`
  width: 109px;
  height: 150px;
  perspective: 600px;
`;

const CardFlipAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(180deg);
  }
`
const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: ${CardFlipAnimation} infinite 1s;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    backface-visibility: hidden;
    &:last-child {
      transform: rotateY(180deg);
    }
  }
`;

export default Throbber;
