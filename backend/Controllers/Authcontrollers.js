const Authcontrollers = require('express').Router()
const User=require("../Models/User")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
Authcontrollers.post("/register",async (req,res)=>{
    try{
        const isExisting=await User.findOne({email:req.body.email})
        if(isExisting){
            throw new error("Already such an email registered!!")
            }
            const hashedPassword=await bcrypt.hash(req.body.password,10)
            const newUser=await User.create({...req.body, password:hashedPassword})
            const{password, ...others}=newUser._doc;
            const token=jwt.sign({_id:newUser._id},process.env.JWTSECRET , {expiresIn: '4h'});
            return res.status(201).json({others,token})
        }catch (error){
            return res.status(500).json(error.message)
        }
    })

    Authcontrollers.post('/login' , async(req,res)=>{
        try{
            const user = await User.findOne({email:req.body.email})
            if (!user) {
                throw new Error ("wrong credentials");
       }

       const comparePass = await bcrypt.compare(req.body.password , user.password) 
       if(!comparePass){
        throw new error("wrong credentials")
       }

    const token = jwt.sign({id:user._id} , process.env.JWT_SECRET , {expiresIn:'4h'})
    const {password,...others} = user._doc

    return res.status(200).json({others ,token})
        }catch(error){
            return res.status(500).json(error.message)

        }
    })

    module.exports=Authcontrollers 