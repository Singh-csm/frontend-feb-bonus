
const userModel = require("../users/userModel")
const studentModel = require("./studentModel")


const createStudent = async function(req,res){
    let data = req.body
    let {name,subject,marks} = data
    let finalData = await studentModel.findOneAndUpdate({name:name,subject:subject},{$inc: { marks: marks }},{upsert:true,new:true})
    return res.status(201).send({"data":finalData})

}

const getStudent = async function(req,res){
    let data  = req.query
    let {name}= data
    let filter ={isDeleted:false,name:name}
    let finalData = await studentModel.find({isDeleted:false})
    if(!finalData) return  res.status(200).send({msg:"No Students present"})
    return  res.status(200).send({"data":finalData})
}

const updateStudent = async function(req,res){
    let data = req.body
    let id = req.params.studentId
     let finalData = await studentModel.findOneAndUpdate({_id:id},data,{new:true})
     return res.status(200).send({"msg":finalData})
}

const deleteStudent = async function(req,res){
try {
        let data = req.params.studentId
        let finalData = await studentModel.updateOne({_id:data},{$set:{isDeleted:true}})
        return res.status(200).send({"msg":"Data deleted successfully"})
} catch (error) {
    return res.send("server error")
}
}

module.exports = {createStudent,getStudent,updateStudent,deleteStudent}