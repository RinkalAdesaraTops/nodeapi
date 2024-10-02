const express = require('express')
const router = express.Router()

const {catlist,savecat,delcat,editcat} = require('../controllers/Apicontroller')
router.get('/categorylist',catlist)
router.post('/savecategory',savecat)
router.delete('/deletecategory/:id',delcat)
router.patch('/editcategory/:id',editcat) //to get data idwise
// router.put('/editcategory/:id',editcat) //update data
 
module.exports = router