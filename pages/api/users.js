import { graphQLClient } from '../../utils/apollo-client';
import { USERS_QUERY } from '../../lib/queries';

const getUsersHandler = (req, res) => {
  graphQLClient
    .query({ query: USERS_QUERY })
    .then(queryResponse => res.json(queryResponse.data.imaginedagger_users));
};

export default getUsersHandler;
