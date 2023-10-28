import { ServicioReserva } from "../services/ServicioReserva.js"
export class ControladorReservas {
    constructor (){}

  async  buscarTodas(request, response){
        try { let servicioReserva = new ServicioReserva()
        //1. hay que recibir datos
        //2. intentare conectarme a la BD
        //3.envio la respuesta
        response.status(200).json({
            "estado":true,
            "mensaje":"Exito buscando las reservas",
            "datos":await servicioReserva.buscarTodas()
        })
    } catch (error) {
        response.status(400).json({
            "estado":false,
            "mensaje":"Fallamos buscando las reservas",
            "datos":null
        })
        
    }}
    
  async  buscarPorId(request, response){
        try { let servicioReserva = new ServicioReserva()
            //1. hay que recibir datos (si)
            let id=request.params.id
            //2.con el id que mando el cliente busco la habitacion en BD
            //3. respondo al cliente
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando las reservas",
                "datos":await servicioReserva.buscarPorId(id)
            })
            
        } catch (error) {response.status(400).json({
            "estado":false,
            "mensaje":"Fallamos buscando las reservas"+error,
            "datos":null
        })
            
        }
    }
  async  modificar(request, response){
        try { 
            let servicioReserva = new ServicioReserva()
            //1. hay que recibir datos(si)
            let id=request.params.id
            let datosModificar=request.body
            //2. modificar en BD
            //3. enviar respuesta
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito modificando las reservas",
                "datos":await servicioReserva.modificar(id, datosModificar)
            })
            

            
        } catch (error) {
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos modificando las reservas"+error,
                "datos":null
            })
            
        }
    }
  async  registrar(request, response){
        try { let servicioReserva = new ServicioReserva()
            //1. hay que recibir datos(si)
            let datosRegistrar=request.body
            let fechainicial=new Date(datosRegistrar.fechainicial)
            let fechafinal=new Date(datosRegistrar.fechafinal)
            let diashospedaje=(Math.floor(fechafinal-fechainicial)/(1000*60*24*60))
            //2. guardar en BD
            //3. enviar respuesta
            await servicioReserva.registrar(datosRegistrar),
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito registrando las reservas",
                "datos":datosRegistrar,
                "diashospedaje":diashospedaje,
            })
            
        } catch (error) {
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos registrando las reservas"+error,
                "datos":null
            })
            
            
        }
    }
  async  eliminar(request, response){
        try { let servicioReserva = new ServicioReserva()
            //1. hay que recibir datos(si)
            let id=request.params.id
            //2. eliminelo
            //3. mande respuesta
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito eliminando la reserva",
                "datos":await servicioReserva.eliminar(id, datosEliminar)
            })
            
        } catch (error) {
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos borrando la reserva"+error,
                "datos":null
            })
            
        }
    }
}