const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rinkalsoni_161:foaCaEadecDotxvG@cluster0.e4hw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
  useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000
}).then(() => console.log('Connected to new Db-catmodel!'));

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name:String
});

const CategoryModel = mongoose.model('Category', CategorySchema);

module.exports = CategoryModel


