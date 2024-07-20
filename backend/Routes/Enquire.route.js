const express =  require('express');
const  Enquire = require('../Models/enquire');
const EnquireRouter = express.Router();
const Joi = require('joi')
const schema = Joi.object({
    name:Joi.string().required(),
    number:Joi.string().required(),
  });
EnquireRouter.post('/api/enquire', async(req, res) =>{
    const {error,value} = schema.validate(req.body,{abortEarly:false}); 
    try{
        if (!error) {
        let{name,number} = req.body;
        const formData = await Enquire.create({name,number});
        res.status(201).json(formData);}
        else {
            return res.status(400).send({
            message: `Bad request ${error}`
            })
            console.error(error)
        }
    } catch(err){
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        })
    }
})
EnquireRouter.get('/api/enquire', async (req, res) => {
    try {
      const blogs = await Enquire.find();
      res.json(blogs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching blogs' });
    }
  });
  
  
module.exports=EnquireRouter;