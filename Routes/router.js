const express=require('express'); 
const router=new express.Router(); 
const controller=require("../Controller/controller")

// Register user details
router.post('/register',controller.register)

router.get('/project',controller.project)


module.exports=router;