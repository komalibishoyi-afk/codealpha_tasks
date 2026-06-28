const jwt=require('jsonwebtoken');const User=require('../models/User');
exports.protect=async(req,res,next)=>{try{const token=req.headers.authorization?.split(' ')[1];const d=jwt.verify(token,process.env.JWT_SECRET);req.user=await User.findById(d.id);next();}catch(e){res.status(401).json({message:'Unauthorized'});}};
