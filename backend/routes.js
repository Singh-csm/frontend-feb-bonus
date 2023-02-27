const express = require("express")
const route = express.Router()
const {createStudent,getStudent,updateStudent,deleteStudent} = require("./students/studentController")
const {createUser,login} = require("./users/userController")
const {authentication} = require("./smiddleware/auth")


route.post("/createStudent",authentication,createStudent )
route.get("/getStudent",authentication,getStudent )
route.patch("/updateStudent/:studentId",updateStudent )
route.delete("/deleteStudent/:studentId",authentication,deleteStudent )

route.post("/createUser",createUser )
route.post("/login",login )









module.exports = route