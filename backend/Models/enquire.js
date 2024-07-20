const mongoose = require('mongoose');

const enquireSchema = new mongoose.Schema({
    name: {type: String,required: true},
    number:{type:Number,require:true},
},
{
    timestamps: true
})

module.exports = mongoose.model('enquire', enquireSchema);