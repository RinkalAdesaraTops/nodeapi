const CategoryModel = require("../models/categorymodel")
const ProductModel = require("../models/productmodel")
const SubcatModel = require("../models/subcategorymodel")

const productfrm = async (req,res)=>{
    const result = await CategoryModel.find()
    const prdata = await ProductModel.find().populate('category').populate('subcategory')
    
    res.render('product',{
        catlist:result,
        prdata:prdata,
        editpr:'',
        subcatdata:''
    })
}
const editProduct = async(req,res)=>{
    let id = req.params.id
    let editpr = await ProductModel.findById(id)

    const result = await CategoryModel.find()
    const prdata = await ProductModel.find().populate('category').populate('subcategory')
    let subcatdata = await SubcatModel.find({category:editpr.category})
    res.render('product',{
        catlist:result,
        prdata:prdata,
        editpr:editpr,
        subcatdata:subcatdata
    })
}
const getSubcategory = async(req,res)=>{
    let cid = req.params.cid
    let subcatlist = await SubcatModel.find({"category":cid})
    if(subcatlist){
        return res.json(subcatlist)
    }
}

const saveproduct = async(req,res)=>{
    console.log(req.body);   
    const {category,subcategory,product,price} = req.body
    let result = new ProductModel({
        category:category,
        subcategory:subcategory,
        product:product,
        price:price,
        image:"abc.jpg"
    })
    let finalans = await result.save()
    if(finalans){
        res.redirect('/product/')
    }

}


module.exports = {productfrm,getSubcategory,saveproduct,editProduct}