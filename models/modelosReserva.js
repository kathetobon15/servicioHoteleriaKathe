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
        type:number,
        required:true
    },
    fechainicio:{
        type:Number,
        required:true
    },
    fechafinal:{
        type:Number,
        required:true
    },
    numerodepersonas:{
        type:Number,
        required:true
    }
})

export const modeloReserva=mongoose.model('reserva',Reserva)