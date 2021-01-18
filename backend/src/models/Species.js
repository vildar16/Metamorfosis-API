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
            required: true,
            default: "No hay descripción de la mariposa"
        },
        photos: {
            type: Array,
            'default': ["https://res.cloudinary.com/dhh7tuvtw/image/upload/v1610998076/e2cvgro6kwt7f7kijm5o.jpg"]
        },
        tags: {
            type: Array,
            'default': []
        },
        accepted: {
            type: Boolean,
            default: false
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