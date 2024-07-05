const express =  require('express');
const  Favourite = require('../Models/Favourite');
const FavouriteRouter = express.Router();
const Joi = require('joi')
const schema = Joi.object({
    name:Joi.string().required(),
    number:Joi.string().required(),
    features:Joi.string().required(),
    construction:Joi.string().required(),
    price:Joi.string().required(),
  });
FavouriteRouter.post('/api/favourite', async(req, res) =>{
    const {error,value} = schema.validate(req.body,{abortEarly:false}); 
    try{
        if (!error) {
        let{name,number,features,construction,price} = req.body;
        const formData = await Favourite.create({name,number,features,construction,price});
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
FavouriteRouter.get('/api/favourite', async (req, res) => {
    try {
      const blogs = await Favourite.find();
      res.json(blogs);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching blogs' });
    }
  });
  
  
module.exports=FavouriteRouter;