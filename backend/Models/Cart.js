const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    name: {type: String,required: true},
    number:{type:Number,require:true},
    construction:{type:String,required:true},
    price:{type:String,required:true},
    features:{type:String,required:true},

},
{
    timestamps: true
})

module.exports = mongoose.model('Cart', CartSchema);