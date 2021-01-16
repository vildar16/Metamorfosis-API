const { Schema, model, Mongoose } = require('mongoose');



const funFactSchema = new Schema(
    {
        fact: {
            type: String,
            required: true
        }
    }, 
    {
    timestamps: true
    }
);


module.exports = model('FunFact', funFactSchema);