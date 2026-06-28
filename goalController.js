const Goal=require('../models/Goal');
exports.createGoal=async(req,res)=>res.json(await Goal.create({...req.body,user:req.user._id}));
exports.getGoals=async(req,res)=>res.json(await Goal.find({user:req.user._id}));
