const mongoose = require("mongoose");

// Conexión a la base de datos
const connectDB = async () => {
mongoose
  .connect("mongodb://localhost/shipgocanaryApi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });
}


  module.exports = { mongoose, connectDB };