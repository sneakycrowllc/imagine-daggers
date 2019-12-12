import App from 'next/app';
import React, { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';

import ThemeToggler from '../components/themeToggler';
import withData from '../utils/apollo-client';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
  * {
    font-family: 'Montserrat', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 0.5em;
  }
  h1 {
    font-size: 6em;
    font-weight: 400;
    @media screen and (max-width: ${props => props.theme.layout.mobileMaxWidth}) {
      font-size: 3em;
    }
  }
  h2 {
    font-size: 4em;
    @media screen and (max-width: ${props => props.theme.layout.mobileMaxWidth}) {
      font-size: 2.5em;
    }
  }
  h3 {
    font-size: 2em;
    @media screen and (max-width: ${props => props.theme.layout.mobileMaxWidth}) {
      font-size: 2em;
    }
  }
  a {
    color: ${props => props.theme.palette.black};
    text-decoration: none;
    transition: color 0.25s ease-in-out;
    &:hover {
      color: ${props => props.theme.palette.green};
    }
  }
`;

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <ThemeToggler>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeToggler>
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
