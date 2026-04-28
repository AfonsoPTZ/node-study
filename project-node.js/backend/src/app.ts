import express from "express";
import cors from "cors";
import { UsuarioRouter, CreateUser, DeleteUser } from "./routes/usuario-route"

function CreateApp(){

    const app = express()

    app.use(express.json());

    app.use(cors());

    app.use(UsuarioRouter);
    app.use(CreateUser);
    app.use(DeleteUser);

    return app;

}

export default CreateApp;
