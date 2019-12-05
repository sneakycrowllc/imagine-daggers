import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApollo from 'next-with-apollo';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';

const httpLink = createHttpLink({
  fetch,
  uri: process.env.graphql_api_url
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'x-hasura-admin-secret': process.env.graphql_api_key
    }
  };
});

export const graphQLClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false
  })
});

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache({
        addTypename: false
      }).restore(initialState || {})
    })
);
