class HomeController {
  async index(req, res) {
    res.send('hello world!');
  }
}

export default new HomeController();
