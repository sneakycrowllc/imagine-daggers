import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { graphQLClient } from '../../utils/apollo-client';
import { GET_USER_QUERY } from '../../lib/queries';

const loginHandler = (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    // First we need to grab our user
    graphQLClient
      .query({ query: GET_USER_QUERY, variables: { username } })
      .then(queryResponse => {
        // This assumes we found our user, now we need to compare the password
        const {
          data: { imaginedagger_users: dbResponseData }
        } = queryResponse;
        bcrypt.compare(password, dbResponseData[0].password, (err, bcryptRes) => {
          if (bcryptRes) {
            const tokenData = {
              username: dbResponseData[0].username,
              email: dbResponseData[0].email,
              id: dbResponseData[0].id
            };
            const token = jwt.sign(
              {
                data: tokenData
              },
              process.env.json_secret,
              { expiresIn: '1h' }
            );
            return res.status(200).json({ token, user: tokenData });
          } else {
            return res.status(400).json({ error: 'Internal Server Error' });
          }
        });
      })
      .catch(() => res.status(500).json({ error: 'Internal Server Error' }));
  } else {
    res.status(400).json({ error: 'username and password required' });
  }
};

export default loginHandler;
