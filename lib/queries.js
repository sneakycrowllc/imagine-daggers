import gql from 'graphql-tag';

export const USERS_QUERY = gql`
  query UsersQuery {
    imaginedagger_users {
      email
      username
    }
  }
`;

export const GET_USER_QUERY = gql`
  query GetUserQuery($username: String, $password: String) {
    imaginedagger_users(where: { username: { _eq: $username } }) {
      email
      id
      username
      password
    }
  }
`;
