const Property = require("../Models/Property")
const Propertycontroller=require("express").Router()
// const verifyToken=require("../")

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