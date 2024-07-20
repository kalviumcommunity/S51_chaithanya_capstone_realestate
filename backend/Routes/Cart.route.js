const express = require('express');
const Cart = require('../Models/Cart');
const CartRouter = express.Router();
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().required(),
    number: Joi.string().required(),
    features: Joi.string().required(), 
    construction: Joi.string().required(),
    price: Joi.string().required(),
});

CartRouter.post('/api/cart', async (req, res) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false }); 
    try {
        if (!error) {
            let { name, number, features, construction, price } = req.body;
            const formData = await Cart.create({ name, number, features, construction, price });
            res.status(201).json(formData);
        } else { 
            return res.status(400).send({
                message: `Bad request ${error}`
            });
            console.error(error);
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send({
            message: "Internal server error"
        });
    }
});

CartRouter.get('/api/cart', async (req, res) => {
    try {
        const items = await Cart.find();
        res.json(items);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching items' });
    }
});
CartRouter.put('/api/cart/:id', async (req, res) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        return res.status(400).send({
            message: `Bad request ${error}`
        });
    }

    try {
        const { id } = req.params;
        const { name, number, features, construction, price } = req.body;
        const updatedItem = await Cart.findByIdAndUpdate(
            id, 
            { name, number, features, construction, price }, 
            { new: true }
        );
 
        if (!updatedItem) {
            return res.status(404).json({ message: 'Item not found' });
        }

        res.json(updatedItem);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = CartRouter;
 