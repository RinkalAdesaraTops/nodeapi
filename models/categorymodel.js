const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rinkaladesaratops:cpxiFgn8xe61JG40@rinkaldb.gpf9iwz.mongodb.net/?retryWrites=true&w=majority&appName=RinkalDB')
  .then(() => console.log('Connected to Db!'));

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name:String
});

const CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = CategoryModel


