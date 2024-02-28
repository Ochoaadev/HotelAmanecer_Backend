const mongoose = require('mongoose');

const reserva = new mongoose.Schema(
    {
        Nombre:{
            type:String,
            required: true
        },
        Apellido:{
            type:String,
            required: true
        },
        DNI:{
            type: Number,
            required: true
        },
        Email:{
            type:String,
            required: true
        },
        Telefono:{
            type: Number,
            required: true
        },
        Cantidad_Persona:{
            type:Number,
        },
        Fecha_llegada:{
            type:date,
            required: false
        },
        Fecha_Salida:{
            type:date,
            required: false
        },
        Estatus:{
            type: String,
        }
    }
)

module.exports = mongoose.model('reservas', reserva)