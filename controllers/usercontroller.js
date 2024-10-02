const UserModel = require("../models/usermodel");
var jwt = require('jsonwebtoken');
var localStorage = require('localStorage')
const bcrypt = require('bcrypt')
let saltRound = 12
let secretKey = "test@123"

const register = (req,res)=>{
    res.render('register')
}
const saveUser = async(req,res)=>{
    const {name,email,pwd} = req.body
    const salt = bcrypt.genSaltSync(saltRound);
    const hash = bcrypt.hashSync(pwd, salt);

    let result = new UserModel({
        name:name,
        email:email,
        password:hash
    })
    await result.save()
    if(result){
        res.redirect('/user/login') //routes calling
    }
}
const login = (req,res)=>{
    res.render('login') //ejs file
}
const checkLogin = async(req,res)=>{
    const {email,pwd} = req.body
    
   
    let result = await UserModel.find({email:email})
   
    if(result.length > 0){
        let ans = bcrypt.compareSync(pwd,result[0].password); 
        if(ans){
            let data = {
                name:result[0].name,
                email:result[0].email
            }
            
            let token = jwt.sign(data,secretKey)
            result[0].token = token
            result[0].save()
            localStorage.setItem('token',token)
            localStorage.setItem('userid',result[0]._id)
            res.redirect('/admin/category/')
            
        } else {
            res.redirect('/user/login')
            
        }
    } else {
        res.redirect('/user/login')
        
    }
    // bcrypt.compareSync(myPlaintextPassword, hash); // true
}
const logout = async(req,res)=>{
    let getToken = localStorage.getItem('token')
    let getUserId = localStorage.getItem('userid')
    let result = await UserModel.findByIdAndUpdate(getUserId,{
        token:''
    })
    if(result){
        res.redirect('/user/login')
    }
}
module.exports = {register,login,checkLogin,saveUser,logout}
