import { Api } from './Api.js'
import 'dotenv/config'
//console.log(process.env)

let servidor = new Api() //Creando un objeto de la clase Api

//Levantar servidor
servidor.levandarServidor()
servidor.procesarPeticiones()