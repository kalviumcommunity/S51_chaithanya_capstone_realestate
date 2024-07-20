const express = require('express');
const Feedback = require('../Models/Feedback.model');
const Joi = require('joi');

const FeedbackRouter = express.Router();

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email(),
  feedback: Joi.string().required(),
});

FeedbackRouter.post('/', async (req, res) => {
  const { error, value } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(400).json({ message: `Bad request ${error}` });
  }

  try {
    const { name, email, feedback } = value;
    const formData = await Feedback.create({ name, email, feedback });
    res.status(201).json(formData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = FeedbackRouter;
