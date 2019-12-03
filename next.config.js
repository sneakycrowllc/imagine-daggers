const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const { withGraphQLConfig } = require('next-graphql-react/server');

module.exports = {
  ...withGraphQLConfig(),
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
};
