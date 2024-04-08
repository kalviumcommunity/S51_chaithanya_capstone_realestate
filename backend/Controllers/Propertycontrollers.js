const Property = require("../Models/Property")
const Property = require("../Models/Property")
const Propertycontroller=require("express").Router()
const Verifytoken=require("../Middleware/Verifytoken")
const Property = require("../Models/Property")
const Property = require("../Models/Property")

Propertycontroller.get('getAll',async(req,res)=>{
    try{
        const properties=await Property.find({})
        return res.status(200).json(properties)
        }catch(err){
            return res.status(500).json(error.message)
    }
})

Propertycontroller.get('/find/featured' , async(req,res)=>{
    try{
        const featuredProperties=await Property.find({featured:true}).populate('currentOwner' , '-password')

        return res.status(200).json(featuredProperties)
    } catch (error){
        return res.status(500).json(error.message)
    }
 })


 Propertycontroller.get('/find' , async (req,res)=>{
    const type =req.query
    try{
        if(type){
            const properties=await Property.find(type).populate('currentOwner', '-password')
            return res.status(200).json(properties)
        }else{
            return res.status(500).json({msg:"No such type"})
        }
    }catch(error){
        return res.status(500).json(error.message)
    }
 })

 Propertycontroller.get('/find/types' , async(req,res)=>{
    try{
        const beachType=await Property.countDocuments({type:'beach'})
        const mountainType=await Property.countDocuments({type:'mountain'})
        const villageType=await Property.countDocuments({type:'village'})

        return res.status(200).json({
            beach:beachType,
            mountain:mountainType,
            village:villageType
        })
    }catch(error){
        return res.status(500).json(error.message)
    }
 })
//get individual property
 Propertycontroller.get("find/:id" , async(req,res)=>{
    try{
        const Property=await Property.find(req.params.id).populate("currentOwner" , "-password")
        if(!Property){
            throw new Error("No such property with this id")
        }else{
            return res.status(200)
        }
    }catch(error){
        return res.status(500).json(error.message)
    }
 })

 //create a property

 Propertycontroller.post('/' , Verifytoken, async(req,res)=>{
    try{
        const newProperty = await Property.create({...req.body , currentOwner:req.user.id})
    }catch(error){
        return  res.status(500).json(error.message)
    }
 })

 //update property

 Propertycontroller.put("/:id" , Verifytoken,async(req,res)=>{
    try{
        const Property = await Property.findById(req.params.id)
        if(Property.currentOwner !== req.user.id){
            throw new error("you are not allowed to uodate other people properties")
        }else{
            const updatedProperty=await Property.findByIdAndUpdate(
                req.params.id,
                {$set:req.body},
                {new:true}
            )
            return res.status(200).json(updatedProperty)
        }
    }catch(error){
        return res.status(500).json(error.message)
    }
 })

 //delete property

 Propertycontroller.delete("/:id",Verifytoken, async (req, res) => {
    try{
        const Property=await Property.findById(req.params.id)
        if(Property.currentOwner.toString() !== req.user.id){
            throw new Error("You are not allowed to delete other people properties")
        }else{
            await Property.delete()
            return res.status(200).json({msg:"Successfully deleted property"})
        }
    }catch(error){
        return res.status(500).json(error.message)


    }
 })

 module.exports=Propertycontroller;