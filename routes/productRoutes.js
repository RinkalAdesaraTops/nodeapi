var express = require('express')
var router = express.Router()
const {productfrm,getSubcategory,saveproduct,editProduct} = require('../controllers/productcontroller')

router.get('/',productfrm)

router.get('/getSubcategory/:cid',getSubcategory)
router.get('/edit/:id',editProduct)

router.post('/savedata',saveproduct)

module.exports = router