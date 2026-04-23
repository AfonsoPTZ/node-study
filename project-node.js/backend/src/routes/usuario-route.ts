import { Router } from "express";
import { GetUsuarioControler } from "../controllers/usuario-controler";



const UsuarioRouter = Router();


UsuarioRouter.get("/Usuario", GetUsuarioControler);


export { UsuarioRouter };