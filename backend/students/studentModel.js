const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId;
const studentSchema = new mongoose.Schema({
    name:{type:String},
    subject :{ type:String},
    marks : {type:Number},
    userId :{type:ObjectId, ref:"user"},
    isDeleted :{type:Boolean,default:false}
},{timestamps:true})



module.exports = mongoose.model("student", studentSchema)