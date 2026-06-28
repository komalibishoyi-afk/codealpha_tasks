const mongoose=require('mongoose');
module.exports=mongoose.model('Workout',new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},workoutType:String,duration:Number,caloriesBurned:Number},{timestamps:true}));
