import jwt from 'jsonwebtoken';

import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { user_email, password } = req.body;

    if (!user_email || !password)
      return res.status(401).json({ errors: ['The credentials are null'] });

    const user = await User.findOne({ where: { user_email } });

    if (!user) return res.status(401).json({ errors: ['User do not exists'] });

    if (!(await user.passwordValidator(password))) {
      return res.status(401).json({ errors: ['Invalid password'] });
    }

    const { id } = user;

    const token = jwt.sign({ id, user_email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.json({ token, user: { id, name: user.user_name, user_email } });
  }
}

export default new TokenController();
