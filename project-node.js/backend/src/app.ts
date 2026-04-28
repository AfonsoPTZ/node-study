import express from "express";
import cors from "cors";
import { UsuarioRouter, CreateUser, DeleteUser, updateUser } from "./routes/usuario-route"

function CreateApp(){

    const app = express()

    app.use(express.json());

    app.use(cors());

    app.use(UsuarioRouter);
    app.use(CreateUser);
    app.use(DeleteUser);
    app.use(updateUser);

    return app;

}

export default CreateApp;
