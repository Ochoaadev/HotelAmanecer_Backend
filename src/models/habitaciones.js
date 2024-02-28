const mongoose = require('mongoose')

const rooms = new mongoose.Schema(
    {
        Tipo:{
            type:String
        },
        Descripcion:{
            type:String
        },
        Comodidad:{
            type:String
        },
        Tarifa:{
            type:String
        },
        Review:{
            type:String
        }
    }
)

module.exports = mongoose.model('habitaciones', rooms)