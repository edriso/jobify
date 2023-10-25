import mongoose from 'mongoose';
// import validator from 'validator';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: String,
  location: {
    type: String,
    default: 'my city',
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
});

userSchema.methods.hidePassword = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

const User = mongoose.model('User', userSchema);

export default User;
