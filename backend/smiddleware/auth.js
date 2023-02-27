const jwt=require("jsonwebtoken")

const authentication=async (req,res,next)=>{
    try {
            let token = req.headers["authorization"]
            console.log(token);
            // if(!token) return res.status(400).send({status:false,message:"please enter token"})
          
            
        
            jwt.verify(token,"new_seceret_key",(err,decode)=>{
                if(err){
        
                    return res.status(401).send({status:false,message:err.message})
                }else{
                    req.decode=decode
                     next()
                }
            })
    } catch (error) {
        return res.status(500).send({status:false,message:error.message})
    }
         
    }




module.exports = {authentication}
    

