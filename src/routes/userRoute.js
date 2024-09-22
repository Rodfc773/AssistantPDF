import { Router } from 'express';

const router = new Router();

router.get('/', async (req, res) => res.send('Welcome to the users router!'));

export default router;
