
var express = require('express')
var app = express()
var router = express.Router()
var localStorage = require('localStorage')
var jwt = require('jsonwebtoken')

let secretKey = "test@123"
const {dispcat,savecat,delcat,editcat,product} = require('../controllers/admincontroller')

const verifyToken = (req,res,next)=>{
    let token = localStorage.getItem('token')
    if(token != null){
        try {
            var decoded = jwt.verify(token, secretKey);
            console.log(decoded);
            next()
        } catch(err) {
            // err
            console.log(err);           
        }
    } else {
        res.send("No authorized user")
    }
}
router.get("/category",dispcat)
router.post("/savecat",savecat)
router.get("/delcat/:id",verifyToken,delcat)
router.get("/editcat/:id",verifyToken,editcat)
router.get("/product",product)
module.exports = router

