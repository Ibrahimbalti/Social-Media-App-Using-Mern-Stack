const express = require('express');
const router = express.Router();
const User=require('../models/User')
//update user
router.put('/:id',(req,res)=>{
if(req.body.userId===req.params.id || req.body.isAdmin){

}
})
//delete user
//get user
// followers user
// unfollow user

module.exports = router
