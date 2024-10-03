const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rinkalsoni_161:foaCaEadecDotxvG@cluster0.e4hw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
  useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000
})
  .then(() => console.log('Connected to Db prmodel!'));
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