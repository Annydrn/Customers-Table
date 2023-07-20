// Importamos el módulo Express
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const mysql = require("mysql");
const myConnection = require("express-myconnection");
// Creamos una instancia de la aplicación Express
const app = express();

// Configuramos la aplicación Express para establecer el puerto en el cual escuchará las solicitudes entrantes
app.set("port", process.env.PORT || 3000);
// process.env.PORT es una variable de entorno que puede ser proporcionada por el sistema operativo o por el proveedor de alojamiento.
// Si no hay una variable de entorno definida, se usará el puerto 3000 como valor predeterminado.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


//importando rutas
const compradoresRoutes= require("./routes/compradores")

//Middlewares
app.use(morgan("dev"));
app.use(
  myConnection(
    mysql,
    {
      host: "localhost",
      user: "root",
      port: 3306,
      database: "crudenodemysql",
    },
    "single"
  )
);

//llamo un metodo de express que nos traera la informacion del formulario
app.use(express.urlencoded({extended:false}))

//RUTAS
app.use("/", compradoresRoutes );   

//archivos estaticos
app.use(express.static(path.join(__dirname, "public")))




// Iniciamos el servidor Express y lo configuramos para escuchar en el puerto especificado
app.listen(app.get("port"), () => {
  console.log("Servidor levantado en el puerto 3000");
});
// app.get("port") obtiene el valor del puerto configurado previamente.
// Luego, app.listen() inicia el servidor en ese puerto y utiliza una función de devolución de llamada para imprimir un mensaje de confirmación en la consola.
