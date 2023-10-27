import { ServicioRoom } from "../services/ServicioRoom.js"
export class ControladorHabitacion {
    constructor (){}

    async buscarTodas(request, response){
        try { 
        let servicioHabitacion = new ServicioRoom()
        //1. hay que recibir datos
        //2. intentare conectarme a la BD
        //3.envio la respuesta
        response.status(200).json({
            "estado":true,
            "mensaje":"Exito buscando las habitaciones",
            "datos": await servicioHabitacion.buscarTodas()
        })
    } catch (error) {
        response.status(400).json({
            "estado":false,
            "mensaje":"Fallamos buscando las habitaciones",
            "datos":null
        })
        
    }}
    
    async buscarPorId(request, response){
        try { let servicioHabitacion = new ServicioRoom()
            //1. hay que recibir datos (si)
            let id=request.params.id
            //2.con el id que mando el cliente busco la habitacion en BD
            //3. resp ondo al cliente
             await servicioHabitacion.buscarPorId()
            response.status(200).json({ 
                "estado":true,
                "mensaje":"Exito buscando las habitaciones",
                "datos": est
            })
            
        } catch (error) {response.status(400).json({
            "estado":false,
            "mensaje":"Fallamos buscando las habitaciones"+error,
            "datos":null
        })
            
        }
    }
    async modificar(request, response){
        try {
            let servicioHabitacion = new ServicioRoom()
            //1. hay que recibir datos(si)
            let id=request.params
            let datosModificar=request.body
            //2. modificar en BD
            //3. enviar respuesta
            await servicioHabitacion.modificar(id,datosModificar)
            response.status(200).json({
                "mensaje":"Exito modificando las habitaciones",
                "datos":null
            })
            

            
        } catch (error) {
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos modificando las habitaciones"+error,
                "datos":null
            })
            
        }
    }
    async registrar(request, response){
        try {
            let servicioHabitacion = new ServicioRoom()
            //1. hay que recibir datos(si)
            let datosRegistrar=request.body
            //2. guardar en BD
            //3. enviar respuesta
            await servicioHabitacion.registrar(datosRegistrar)
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito registrando las habitaciones",
                "datos":datosRegistrar
            })
            
        } catch (error) {
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos registrando las habitaciones"+error,
                "datos":null
            })
            
            
        }
    }
    async eliminar(request, response){
        try {
            let servicioHabitacion = new ServicioRoom()
            //1. hay que recibir datos(si)
            let id=request.params.id
            //2. eliminelo
            //3. mande respuesta
            await servicioHabitacion.eliminar(datosEliminar)
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito eliminando la habitaciones",
                "datos":null
            })
            
        } catch (error) {
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos borrando la habitaciones"+error,
                "datos":null
            })
            
        }
    }
}