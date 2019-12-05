import bcrypt from 'bcrypt';

// BCRYPT SETTINGS
const saltRounds = 10;

const registerHandler = (req, res) => {
  res.json({ data: req.body });
}

export default registerHandler;