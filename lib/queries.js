import gql from 'graphql-tag';

export const USERS_QUERY = gql`
  query MyQuery {
    imaginedagger_users {
      email
      username
    }
  }
`