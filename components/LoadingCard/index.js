import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const LoadingCard = () => {
  return (
    <StyledLoadingCard>
      <StyledThrobber>
        <StyledCard>
          <img src="/static/images/logos/logo_250_fill.png" />
          <img src="/static/images/logos/logo_250_fill.png" />
        </StyledCard>
      </StyledThrobber>
    </StyledLoadingCard>
  );
};

const StyledLoadingCard = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledThrobber = styled.div`
  width: 109px;
  height: 150px;
  perspective: 600px;
  transform: scale(0.5);
`;

const SpinningCard = keyframes`
  from {
    transform: rotateY(0deg) rotate(-35deg);
  } to {
    transform: rotateY(360deg) rotate(-35deg);
  }
`;

const StyledCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transform-origin: bottom left;
  animation: ${SpinningCard} linear infinite 1s;
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

export default LoadingCard;
