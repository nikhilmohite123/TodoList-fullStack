const mongoose=require('mongoose');
require('dotenv').config();
const mongodbUrl = process.env.MONGODB_URL;

mongoose.connect(mongodbUrl);

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:{
        type:Boolean,
        default:false
    }
})
const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}