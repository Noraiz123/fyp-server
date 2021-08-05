import express from 'express';
import usersModel from '../models/users.js';

const router = express.Router();

router.get('/signin', (req, res) => {
  const { email, password } = req.body;

  const isUser = usersModel.find({email});
  if (!isUser) return res.status(400).json({ message: 'User does not exist' });

  res.status(200).json({ isUser });
});

export default router;
