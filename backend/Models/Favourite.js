const mongoose = require('mongoose');

const FavouriteSchema = new mongoose.Schema({
    name: {type: String,required: true},
    number:{type:Number,require:true},
    construction:{type:String,required:true},
    price:{type:String,required:true},
    features:{type:String,required:true},

},
{
    timestamps: true
})

module.exports = mongoose.model('Favourite', FavouriteSchema);