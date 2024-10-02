const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ecommercedb')
  .then(() => console.log('Connected!'));

const schema = mongoose.Schema
const prSchema = new schema({
    product:String,
    price:String,
    category:{
        type:schema.Types.ObjectId,
        ref:'Category'
    },
    subcategory:{
        type:schema.Types.ObjectId,
        ref:'subcategory'
   }
})

const ProductModel = mongoose.model('Product', prSchema);

module.exports = ProductModel