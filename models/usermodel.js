const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ecommercedb')
  .then(() => console.log('Connected to Db!'));

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:String,
  email:String,
  password:String,
  token:String
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel


