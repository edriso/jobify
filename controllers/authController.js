const register = async (req, res) => {
  res.send('register');
};

const login = async (req, res) => {
  res.send('login');
};

const updateUser = async (req, res) => {
  res.send('updateUser');
};

export default { register, login, updateUser };
