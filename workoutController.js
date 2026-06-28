const Workout=require('../models/Workout');
exports.addWorkout=async(req,res)=>res.json(await Workout.create({...req.body,user:req.user._id}));
exports.getWorkouts=async(req,res)=>res.json(await Workout.find({user:req.user._id}));
