import express, { static as static_ } from "express";
import path from "path";
// import database from "../database.json"
// import { setApp } from "./modelGlobalApp"; Esto es lo que hace Router BTS
import dotenv from "dotenv";
dotenv.config()

import { engine } from "express-handlebars";
import swaggerJsDoc from "swagger-jsdoc";
import { setup, serve } from "swagger-ui-express";
import swaggerOptions from '../swagger.config'

import { dbConnect } from "./database";

import routes from "./routes/routes";  // Todo se debe de importar antes de las rutas de nuestro proyecto

const port = process.env.PORT || 3000;

const app = express();
// setApp(app) Esto es lo que hace Router BTS

// Configuracion del motor de plantillas
app.engine("handlebars", engine());
// Decirle a express que use handlebars como motor de plantillas
app.set("view engine", "handlebars");
// Decirle a express donde estan las vistas
app.set("views", "./src/views"); // aqui van las vistas
// Se pone ./src/view porque parte de la raiz del proyecto

// Servir archivos estaticos
app.use("/static", static_(path.join(__dirname, "..", "public"))) // se pone ..porque __dirname apunta a /src y public esta en la raiz


app.use(routes)




app.get('', (req, res) => {
    // console.log('database: ', database);
    // res.send("api works")
    res.render("index", {
        nombre: "Oz",
        usuarios: [
            { id: 1, nombre: "Ricki" },
            { id: 2, nombre: "Mickey" },
        ]
    })
})


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/swagger", serve, setup(swaggerDocs))

// conectar a  mongo
dbConnect().then(() => {
    app.listen(port, () => {
        console.log(`api is running in port ${port}`);
    })
}).catch(() => {
    console.log("Failed to connect to the database");

})







// Approach A

//     src/
//         routes
//             auth
//             usuarios
//             proyectos
//             index
//         controllers
//             usuarios
//             proyectos
//             tareas
//             auth
//             index
//         models
//             index
//         middlewares
//             index
