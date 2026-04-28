import { Router } from "express";
import { GetUsuarioControler, CreateUserControler, DeleteUserControler, updateUserControler } from "../controllers/usuario-controler";



const UsuarioRouter = Router();
const CreateUser = Router();
const DeleteUser = Router();
const updateUser = Router();


UsuarioRouter.get("/Usuario", GetUsuarioControler);
CreateUser.post("/CreateUser", CreateUserControler);
DeleteUser.delete("/DeleteUser/:id", DeleteUserControler);
updateUser.put("/updateUser/:id", updateUserControler);



export { UsuarioRouter, CreateUser, DeleteUser, updateUser };