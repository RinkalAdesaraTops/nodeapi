const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rinkalsoni_161:foaCaEadecDotxvG@cluster0.e4hw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
  useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000
}) .then(() => console.log('Connected to Db-subcatmodel!'));
const schema = mongoose.Schema
const subCatSchema = new schema({
    sname:String,
    category:{
      type:schema.Types.ObjectId,
      ref:'Category'
    }
})
const SubcatModel = mongoose.model('subcategory',subCatSchema)
module.exports = SubcatModel