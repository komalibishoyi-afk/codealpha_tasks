const mongoose=require('mongoose');
module.exports=mongoose.model('Goal',new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},title:String,target:Number,progress:{type:Number,default:0}},{timestamps:true}));
