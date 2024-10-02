const { Schema } = require('mongoose')
const subcatModel = require('../models/subcategorymodel')
const CategoryModel = require('../models/categorymodel')


//display subcategory form
const subcatform = async(req,res)=>{
    //disp all subcategory
    const result = await subcatModel.find().populate('category')
   
    //disp cat list
    const catlist = await CategoryModel.find()
    
    
    res.render('subcategory',{
        allsubcat:result,
        catlist:catlist,
        editsubcat:'',
        messages:''
    })
}
//insert subcategory
const savesubcat = async(req,res)=>{
    const {subcatid,category,sname} = req.body;
    let ans = '';
    if(subcatid != ''){
    //update 
    ans = await subcatModel.findByIdAndUpdate(subcatid,{
        category:category,
        sname:sname
    })
    } else {
        //insert
        const result = new subcatModel({
            sname:sname,
            category:category
        })
       ans = await result.save()
    }
    
    if(ans){
        req.flash('success',"Subcategory inserted successfully....")
        res.redirect('/subcategory/')
    }
}
const deleteSubcat = async(req,res)=>{
    let id = req.params.id
    const result = await subcatModel.findByIdAndDelete(id)
    if(result){
        res.redirect('/subcategory/')
    }
}
const editSubcat = async(req,res)=>{
    let id = req.params.id
    const subcatdata = await subcatModel.findById(id)
    //disp all subcategory
    const result = await subcatModel.find().populate('category')
   
    //disp cat list
    const catlist = await CategoryModel.find()
    
    res.render('subcategory',{
        allsubcat:result,
        catlist:catlist,
        editsubcat:subcatdata,
        messages:''
    })    
}

module.exports = {subcatform,savesubcat,deleteSubcat,editSubcat}