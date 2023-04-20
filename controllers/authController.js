import User from '../models/User.js';
import { BadRequestError } from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('Some values missing');
  }

  const userAlreadyExist = await User.findOne({ email });

  if (userAlreadyExist) {
    throw new BadRequestError('Duplicate email');
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();

  res.status(201).json({
    user: {
      name: user.name,
      email: user.email,
      location: user.location,
    },
    token,
  });
};

const login = async (req, res) => {
  res.send('login');
};

const updateUser = async (req, res) => {
  res.send('updateUser');
};

export default { register, login, updateUser };
