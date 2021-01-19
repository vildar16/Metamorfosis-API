const { Schema, model, Mongoose } = require('mongoose');



const distritoMariposasSchema = new Schema(
    {
        codigo: {
            type: String,
            required: true,
            default: 0
        },
        mariposas: {
            type: Number,
            required: true,
            default: 0
        }

    }, 
    {
    timestamps: true
    }
);


module.exports = model('DistritoMariposas', distritoMariposasSchema);