import User from '../models/User';

class UserController {
  async post(req, res) {
    try {
      const newUser = await User.create(req.body);

      const { id, userEmail, userName } = newUser;

      res.json({ id, userEmail, userName });

      res.json({ id, userEmail, userName });
    } catch (e) {
      res.status(400).json({ errors: e.errors });
    }
  }
  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'userName'] });

      return res.json(users);
    } catch (e) {
      res.status(500).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
