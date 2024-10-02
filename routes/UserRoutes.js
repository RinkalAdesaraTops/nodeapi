
var express = require('express')
var app = express()
var router = express.Router()

const {register,saveUser,login,checkLogin,logout} = require('../controllers/usercontroller')

router.get("/register",register)
router.get("/logout",logout)
router.get("/login",login)
router.post("/login",checkLogin)
router.post("/saveuser",saveUser)


module.exports = router

