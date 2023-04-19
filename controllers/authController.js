import User from '../models/User.js';
import { BadRequestError } from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('Some values missing');
  }

  const user = await User.create({ name, email, password });

  res.status(201).json({ user });
};

const login = async (req, res) => {
  res.send('login');
};

const updateUser = async (req, res) => {
  res.send('updateUser');
};

export default { register, login, updateUser };
