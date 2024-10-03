const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rinkalsoni_161:foaCaEadecDotxvG@cluster0.e4hw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to new Db-usermodel!'));
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:String,
  email:String,
  password:String,
  token:String
});

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel


