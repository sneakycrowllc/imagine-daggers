import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  // @ts-ignore
  static getInitialProps = ({ renderPage }) => {
    const sheet = new ServerStyleSheet();
    // @ts-ignore
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  };

  render() {
    return (
      <html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,700|Open+Sans:400,700|Space+Mono&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.png" />
          {/* 
          // @ts-ignore */}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
