import {modeloReserva} from '../models/modeloreserva.js'
export class ServicioReserva{

    constructor(){}

    async buscarTodas(){
        let reserva=await modeloReserva.find()
        return reserva
    }
    async buscarPorId(id){
        let reserva=await modeloReserva.findById(id)
        return reserva
    }
    async modificar(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let reservaNueva=new modeloReserva(datos)
        return await reservaNueva.save()
    }
    async eliminar(id){
        return await modeloReserva.findByIdAndDelete(id)
    }

}