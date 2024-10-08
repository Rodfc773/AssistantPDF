import jwt from 'jsonwebtoken';

import User from '../models/User';

export async function loginAuthorization(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ errors: ['Login Required'] });

  const token = getBearerToken(authorization);

  try {
    const data = retrieveUserData(token);
    const user = findUser(data);

    if (!user) return res.status(401).json({ errors: ['Invalid User'] });

    req.user_email = data.email;
    req.id = data.id;

    return next();
    // eslint-disable-next-line no-unused-vars
  } catch (error) {
    res.status(401).json({ errors: ['Expired or invalid token'] });
  }
}

function getBearerToken(token) {
  const tokenString = token.split(' ');
  return tokenString[1];
}

function retrieveUserData(token) {
  const data = jwt.verify(token, process.env.TOKEN_SECRET);
  const { id, user_email } = data;

  return { id, user_email };
}
async function findUser({ id, user_email }) {
  const user = await User.findOne({
    where: {
      id,
      user_email,
    },
  });

  return user;
}
