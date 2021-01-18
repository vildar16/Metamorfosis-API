const { Schema, model, Mongoose } = require('mongoose');



const userSchema = new Schema(
    {
        
        name: {
            type: String,
            required: true
        },

        lastname1: {
            type: String,
            required: true
        },

        lastname2: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        password: {
            type: String, 
            required: true
        },   

        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        },
        blocked: {
            type: Boolean,
            default: false
        }
    }, 
    {
    timestamps: true
    }
);


module.exports = model('User', userSchema);