import bcrypt from 'bcrypt';
import { graphQLClient } from '../../utils/apollo-client';
import { NEW_USER_MUTATION } from '../../lib/mutations';

// BCRYPT SETTINGS
const saltRounds = 10;

const registerHandler = (req, res) => {
  const { username, email, password } = req.body;
  // Start our hash encryption
  bcrypt.hash(password, saltRounds, (err, hash) => {
    // Create a new user
    const newUser = {
      username,
      email,
      password: hash
    };
    // Send mutation
    graphQLClient
      .mutate({ mutation: NEW_USER_MUTATION, variables: newUser })
      .then(mutationResponse => res.json(mutationResponse));
  });
};

export default registerHandler;
