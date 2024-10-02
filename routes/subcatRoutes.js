var express = require('express')
var router = express.Router()
const {subcatform,savesubcat,deleteSubcat,editSubcat} = require('../controllers/subcategorycontroller')

router.get("/",subcatform)
router.get("/delsubcat/:id",deleteSubcat)
router.get("/editsubcat/:id",editSubcat)
router.post('/save',savesubcat)

module.exports = router


