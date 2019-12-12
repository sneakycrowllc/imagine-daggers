import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
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
      .then(mutationResponse => {
        const userInResponse = mutationResponse.data.insert_imaginedagger_users.returning[0];
        const tokenData = {
          user: userInResponse
        };
        const token = jwt.sign(
          {
            data: tokenData
          },
          process.env.json_secret,
          { expiresIn: '1h' }
        );
        return res.json({ token, user: tokenData.user });
      })
      .catch(() => res.status(500).json({ error: 'Internal Server Error' }));
  });
};

export default registerHandler;
