import mongoose from "mongoose"

const Schema= mongoose.Schema

const Reserva=new Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    telefono:{
        type:Number,
        required:true
    },
    fechainicio:{
        type:Date,
        required:true
    },
    fechafinal:{
        type:Date,
        required:true
    },
    numerodepersonas:{
        type:Number,
        required:true
    }
})

export const modeloReserva=mongoose.model('reserva',Reserva)