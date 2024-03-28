const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        require:"Please provide your Email address",
        unique:true
    },
    password:{
        type:String,
        require: "Password is required",
        unique:true,
        min:8
    },

},{timestamps: true})

module.exports=mongoose.model("databases",UserSchema)