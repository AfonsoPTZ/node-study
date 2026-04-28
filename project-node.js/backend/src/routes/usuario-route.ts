import { Router } from "express";
import { GetUsuarioControler, CreateUserControler, DeleteUserControler } from "../controllers/usuario-controler";



const UsuarioRouter = Router();
const CreateUser = Router();
const DeleteUser = Router();


UsuarioRouter.get("/Usuario", GetUsuarioControler);
CreateUser.post("/CreateUser", CreateUserControler);
DeleteUser.delete("/DeleteUser/:id", DeleteUserControler);


export { UsuarioRouter, CreateUser, DeleteUser };