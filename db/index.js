const mongoose = require("mongoose");

// Conexión a la base de datos
const connectDB = async () => {
mongoose
  .connect(process.env.URL_CONNECT)
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });
}


  module.exports = { mongoose, connectDB };