import jwt from 'jsonwebtoken';

const withAuth = handler => (req, res) => {
  const { authToken } = req.body;
  jwt.verify(authToken, process.env.json_secret, (err) => {
    if (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    return handler(req, res);
  });
};

module.exports = {
  withAuth
};
