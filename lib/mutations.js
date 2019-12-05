import gql from 'graphql-tag';

export const NEW_USER_MUTATION = gql`
  mutation MyMutation($email: String!, $username: String!, $password: String!) {
    insert_imaginedagger_users(
      objects: { email: $email, password: $password, username: $username }
    ) {
      affected_rows
    }
  }
`;
