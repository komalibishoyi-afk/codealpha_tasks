const User=require('../models/User');const bcrypt=require('bcryptjs');const token=require('../utils/generateToken');
exports.registerUser=async(req,res)=>{const {name,email,password}=req.body;const hash=await bcrypt.hash(password,10);const u=await User.create({name,email,password:hash});res.json({id:u._id,token:token(u._id)});};
exports.loginUser=async(req,res)=>{const {email,password}=req.body;const u=await User.findOne({email});if(u&&await bcrypt.compare(password,u.password))res.json({id:u._id,token:token(u._id)});else res.status(401).json({message:'Invalid'});};
