import React from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';
import { lighten } from 'polished';
import { Global, css } from '@emotion/core';
import emotionReset from 'emotion-reset';
import { ThemeProvider } from 'emotion-theming';

import theme from '../lib/theme';
import SubscriptionForm from '../containers/forms/subscribe';

// Function that returns all colors in the theme as CSS variables
// This is for cases where we might not want to make a Styled component to access a var
const generateColorVariables = () => {
  return Object.keys(theme.colors)
    .map(color => `--color-${color}: ${theme.colors[color]}`)
    .join(';');
};

const Home = () => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        ${emotionReset}
        :root {
          ${generateColorVariables()};
        }
        html,
        body {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 16px;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: futura-pt, sans-serif;
          font-weight: 800;
          font-style: normal;
          color: var(--color-CEDAR);
        }
        h1 {
          font-size: 2em;
        }
        h2 {
          font-size: 1.5em;
        }
        h3 {
          font-size: 1.17em;
        }
        h4 {
          font-size: 1.12em;
        }
        h5 {
          font-size: 0.83em;
        }
        h6 {
          font-size: 0.75em;
        }
        label {
          font-size: 0.75em;
        }
      `}
    />
    <StyledLandingPage>
      <StyledHorizontalLogo>
        <img src="/static/images/logos/horizontal_logo_color_with_text.png" />
      </StyledHorizontalLogo>
      <StyledSignupContainer>
        <StyledFAQ>
          <h2>What is Imagine Daggers?</h2>
          <p>
            Imagine Daggers is a project where people can take there session logs, convert them into
            short stories, and then share them amongst a wider audience. It allows for broader story
            telling, and also combines all your sessions into one story that you can come back to
            experience over again, even when your campaign is complete
          </p>
        </StyledFAQ>
        <SubscriptionForm />
      </StyledSignupContainer>
      <StyledSocialList>
        <li>
          <a href="https://discord.gg/YghZkfP">Discord</a>
        </li>
        <li>
          <a href="https://blog.imaginedaggers.com">Blog</a>
        </li>
        <li>
          <a href="https://twitter.com/imaginedaggers">Twitter</a>
        </li>
      </StyledSocialList>
    </StyledLandingPage>
  </ThemeProvider>
);

const StyledLandingPage = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 24px;
`;

const StyledHorizontalLogo = styled.div`
  grid-column: 2 / span 10;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 800px;
    height: auto;
    width: 100%;
  }
  @media screen and (max-width: 780px) {
    grid-column: 1 / span 12;
  }
`;

const StyledSignupContainer = styled.div`
  grid-row: 2;
  grid-column: 4 / span 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 780px) {
    grid-column: 2 / span 8;
  }
`;

const StyledFAQ = styled.div`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${props => lighten(0.2, props.theme.colors.SILVERRUST)};
  h2 {
    margin-bottom: 8px;
  }
  p {
    line-height: 1.3em;
  }
`;

const StyledSocialList = styled.ul`
  grid-column: 2 / span 10;
  grid-row: 3;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 8px;
  li {
    margin-right: 8px;
    font-size: 0.75em;
  }
  li:not(:first-of-type)::before {
    content: '|';
    margin-right: 8px;
    color: ${props => props.theme.colors.SILVERRUST};
    opacity: 0.5;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.SILVERRUST};
    font-weight: 700;
    text-transform: lowercase;
    &:hover {
      background-color: ${props => props.theme.colors.POMEGRANATE};
      color: ${props => props.theme.colors.SNOW};
    }
  }
`;

export default Home;
