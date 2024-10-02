const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ecommercedb')
  .then(() => console.log('Connected to Db!'));

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name:String
});

const CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = CategoryModel


