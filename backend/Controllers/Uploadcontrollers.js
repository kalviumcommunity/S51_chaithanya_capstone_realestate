const multer = require('multer')
const Uploadcontroller = require("express").Router()


//destination -> where the image will be saved
//filename-> what will be name of the saved image

const storage=multer.diskStorage({
    destination:(req,file,cb)=> { 
        cd(null,'Public/Images')
    },

    filename: (req, file, cb) =>{
        cd(null,req.body.filename)
    }
})

const upload=multer({
    storage
})

//upload.single("images") is gng to check the rfeq.body from 
Uploadcontroller.post("/Images" ,upload.single("image"),async(req,res)=>{
    try{
        return res.status(200).json("file uploaded successfully")
    }catch(error){
        console.error(error)
    }
})

module.exports=Uploadcontroller