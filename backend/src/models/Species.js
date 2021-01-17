const { Schema, model, Mongoose } = require('mongoose');



const speciesSchema = new Schema(
    {
        
        name: {
            type: String,
            required: true
        },
        scientificName: {
            type: String,
            required: true
        },
        kingdom: {
            type: String,
            default: "Animalia"
        },
        phylum : {
            type: String,
            default: "Arthropoda"
        },
        class: {
            type: String,
            default: "Insecta"
        },
        order: {
            type: String,
            default: "Lepidoptera"
        },
        family: {
            type: String,
            required: true
        },
        genus: {
            type: String,
            required: true
        },
        district: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        stage: {
            type: String,
            enum : ['Mariposa', 'Oruga']
        }

    }, 
    {
    timestamps: true
    }
);


module.exports = model('Species', speciesSchema);