import User from '../models/User';

class UserController {
  async post(req, res) {
    try {
      const data = req.body;

      await User.create(data);

      const { id, userEmail, userName } = data;

      res.json({ id, userEmail, userName });

      res.json({ id, userEmail, userName });
    } catch (e) {
      if (e.errors) {
        return res
          .status(400)
          .json({ errors: e.errors.map((msg) => msg.message) });
      }

      return res
        .status(500)
        .json({ error: 'Something went wrong in the server' });
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
