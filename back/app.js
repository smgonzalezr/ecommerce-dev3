//crear recursos que permita usar la libreria express:...
const express = require ("express");

// crear una constante que se llame app:... objeto app con caracteristicas de express...
const app = express();

//usar herramientas json:...
app.use(express.json());

//importar rutas...
const products = require("./routes/products");

//definir que se va a ver desde la landing page ruta del navegador...
app.use('/api',products)

//se instancia app.js como un archivo al que se le pueda hacer referencia...
module.exports = app;