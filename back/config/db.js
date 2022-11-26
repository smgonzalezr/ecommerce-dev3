//traer librerias mongoose..
const mongoose = require("mongoose");

//conexion a la db:
const connectDatabase = () => {
    mongoose.connect(process.env.DB_EXT_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(con => {
        console.log(`Database Mongo connected succesfully with: ${con.connection.host}`)
    }).catch(con => {
        console.log(`Connection refused...`)
    })
}

module.exports = connectDatabase;

