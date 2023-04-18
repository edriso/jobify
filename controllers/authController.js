import User from '../models/User.js';

const register = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ user });
};

const login = async (req, res) => {
  res.send('login');
};

const updateUser = async (req, res) => {
  res.send('updateUser');
};

export default { register, login, updateUser };
