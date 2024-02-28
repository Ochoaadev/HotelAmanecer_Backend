const mongoose = require('mongoose')

const users = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        lastname:{
            type: String,
            required: true
        },
        email:{
            type: String,
            unique: true,
            required: true
        },
        password:{
            type: String,
            required: true
        },
        phone:{
            type: String,
            unique: false,
            required: false,
        },
        rol:{
            type: String,
            required: true
        },
        username:{
            type: String,
            unique: true,
            required: true
        },
        gender:{
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('usuarios', users)