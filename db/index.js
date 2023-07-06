const mongoose = require("mongoose");

// Conexión a la base de datos
mongoose
  .connect("mongodb://localhost:27017/shipgocanaryApi", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((error) => {
    console.error("Error al conectar a MongoDB:", error);
  });

  module.exports = mongoose