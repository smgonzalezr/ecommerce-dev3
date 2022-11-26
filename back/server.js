//llamar app con lo que se instanció
//este archivo se usa para arrancar el servidor
const app = require("./app");

//llamar archivo conexion data base...
const connectDatabase = require ("./config/db")

//declarar método para escuchar puerto del servidor, básicamente es setear el archivo de configuracion...
const dotenv = require("dotenv");

//definir path del archivo de configuracion:....
//dotenv.config({path: 'back/config/config.env'})
dotenv.config({path: 'config/config.env'})

//conectar a mongoDB....
connectDatabase();

//llamar al servidor
const server = app.listen(process.env.PORT,() =>{
    console.log(`Server has been started4 on port: ${process.env.PORT} with mode: ${process.env.NODE_ENV}`)
})