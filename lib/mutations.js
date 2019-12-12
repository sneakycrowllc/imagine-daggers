import gql from 'graphql-tag';

export const NEW_USER_MUTATION = gql`
  mutation NewUserMutation($email: String!, $username: String!, $password: String!) {
    insert_imaginedagger_users(
      objects: { email: $email, password: $password, username: $username }
    ) {
      returning {
        id,
        username,
        email
      }
    }
  }
`;
