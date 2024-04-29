const express=require('express'); 
const router=new express.Router(); 
const controller=require("../Controller/controller")

// Register user details
router.post('/register',controller.register)



module.exports=router;
