const userModel = require("../users/userModel")
const jwt  = require("jsonwebtoken")

const createUser = async function(req,res){
    let data = req.body
    let {email,password} = data
    let checkEmail = await userModel.findOne({email:email})
    if(checkEmail) return res.status(400).send({msg:"Please enter Unique EmailId, these EmailId is already existed"})
    let finalData = await userModel.create(data)
    return res.status(201).send({"data":finalData})
}

const login = async function(req,res){
    let data  = req.body
    let {email,password} = data
    let finalData = await userModel.findOne({email:email,password:password})
    if(!finalData) return  res.status(400).send({msg:"please enter valid emailid or password"})
    const createToken=jwt.sign({id:finalData._id.toString()},"new_seceret_key")
    return res.status(200).send({"data":createToken})
}



module.exports = {createUser,login}