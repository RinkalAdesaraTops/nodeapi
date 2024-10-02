const CategoryModel = require('../models/categorymodel')

const dispcat = async(req,res)=>{
    let result = await CategoryModel.find()
    //message set 
    req.flash('info', 'Category get successfully...')
    res.header("Access-Control-Allow-Origin", "*");
    return res.status(200).json({
        msg:"Get successfully...",
        allcat:result
    })
    // res.render('category',{
    //     'allcat':result,
    //     'editcat':'',
    //     'message':req.flash('info') //ejs file msg render
    // })
}
const savecat = async(req,res)=>{
    let {catid,name} = req.body
    let result = ''
    if(catid != ''){
        result =await CategoryModel.findByIdAndUpdate(catid,{
            name:name
        })
    } else {
        result = new CategoryModel({
            name:name
        })
        result.save()       
    }
    if(result){
        res.redirect('category')
    }
}
const delcat = async(req,res)=>{
    let id = req.params.id
    let result = await CategoryModel.findByIdAndDelete(id)
    if(result){
        res.redirect('/admin/category')
    }
}
const editcat = async(req,res)=>{
    let id = req.params.id
    let result = await CategoryModel.findById(id)
    if(result){
        let catlist = await CategoryModel.find()
        res.render('category',{
            'allcat':catlist,
            'editcat':result,
            'message':''
        })
    }
}
const product = (req,res)=>{
    res.render('product')   
}
module.exports = {dispcat,savecat,delcat,editcat,product}