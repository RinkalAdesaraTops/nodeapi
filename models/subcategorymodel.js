const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ecommercedb')
  .then(() => console.log('Connected!'));

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