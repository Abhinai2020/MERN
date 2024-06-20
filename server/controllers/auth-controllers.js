const User=require('../models/user_model')
const bcrypt=require('bcrypt');

const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const userExist=await User.findOne({email});
        if(!userExist){
            return res.status(401).json({message:"User does't exist"})
        }
        const user=await userExist.comparePassword(password);
        if(user){
            res.status(201).json({message:"Login successful",token:await userExist.generateToken(),userId:userExist._id.toString()});
        }
        else{
            res.status(401).json({msg:"Invalid email or password"})
        }
    }
    catch(error){
       res.status(500).json("Internal server error")
    }
}

const register=async(req,res)=>{
    try{
        console.log(req.body)
        const {username,email,phone,password}=req.body;
        const userExist=await User.findOne({email});
        if(userExist){
        return res.status(400).json({message:"User already exist"});
        }
        const userCreated=await User.create({username,email,phone,password})
        res.status(201).json({
            message:"Registration successful",
            token:await userCreated.generateToken(),
            userId:userCreated._id.toString(),
        })
    }
    catch(error){
        next(error);
        // res.status(404).json({msg:"Internal error"})
    }
}

const user=async(req,res)=>{
    try {
        const userData=req.user;
        console.log(userData)
        res.status(200).json({userData})
        
    } catch (error) {
        console.log(`Error from the user route ${error}`)
    }
}
module.exports={login,register,user};